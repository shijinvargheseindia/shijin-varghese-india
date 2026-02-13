import { useState } from "react";
import { z } from "zod";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { MessageCircle, Mail, Phone, MapPin, Send, CheckCircle, Facebook, Linkedin, Instagram, Youtube } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

// Validation schema
const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email format").max(100, "Email must be less than 100 characters"),
  phone: z.string().trim().regex(/^[+]?[0-9\s\-()]{10,20}$/, "Invalid phone number format"),
  message: z.string().max(1000, "Message must be less than 1000 characters").optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

// Rate limiting constants
const RATE_LIMIT_KEY = "contact_form_submissions";
const MAX_SUBMISSIONS = 3; // Max submissions allowed
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

const checkRateLimit = (): { allowed: boolean; remainingTime?: number } => {
  try {
    const stored = localStorage.getItem(RATE_LIMIT_KEY);
    if (!stored) return { allowed: true };

    const submissions: number[] = JSON.parse(stored);
    const now = Date.now();
    
    // Filter out old submissions outside the rate limit window
    const recentSubmissions = submissions.filter(
      (time) => now - time < RATE_LIMIT_WINDOW
    );

    if (recentSubmissions.length >= MAX_SUBMISSIONS) {
      const oldestSubmission = Math.min(...recentSubmissions);
      const remainingTime = RATE_LIMIT_WINDOW - (now - oldestSubmission);
      return { allowed: false, remainingTime };
    }

    return { allowed: true };
  } catch {
    return { allowed: true };
  }
};

const recordSubmission = () => {
  try {
    const stored = localStorage.getItem(RATE_LIMIT_KEY);
    const submissions: number[] = stored ? JSON.parse(stored) : [];
    const now = Date.now();
    
    // Filter and add new submission
    const recentSubmissions = submissions.filter(
      (time) => now - time < RATE_LIMIT_WINDOW
    );
    recentSubmissions.push(now);
    
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(recentSubmissions));
  } catch {
    // Silently fail if localStorage is unavailable
  }
};

const formatRemainingTime = (ms: number): string => {
  const minutes = Math.ceil(ms / 60000);
  if (minutes >= 60) {
    const hours = Math.floor(minutes / 60);
    return `${hours} hour${hours > 1 ? 's' : ''}`;
  }
  return `${minutes} minute${minutes > 1 ? 's' : ''}`;
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [honeypot, setHoneypot] = useState(""); // Honeypot field - should remain empty
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    // Check honeypot - if filled, it's likely a bot
    if (honeypot) {
      // Silently reject bot submissions (don't reveal detection)
      setIsSubmitted(true);
      return;
    }

    // Check rate limit
    const rateLimit = checkRateLimit();
    if (!rateLimit.allowed) {
      toast({
        title: "Too Many Submissions",
        description: `Please wait ${formatRemainingTime(rateLimit.remainingTime!)} before submitting again.`,
        variant: "destructive",
      });
      return;
    }

    // Validate form data
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactFormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      toast({
        title: "Validation Error",
        description: "Please check the form fields and try again.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const form = e.currentTarget;
    const formDataToSend = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/shijinv.india@gmail.com", {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        recordSubmission(); // Record successful submission for rate limiting
        setIsSubmitted(true);
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out. We'll get back to you soon.",
        });
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/shijin.varghese.16/", label: "Facebook", color: "hover:bg-[#1877F2]" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/shijin-varghese-91693410b/", label: "LinkedIn", color: "hover:bg-[#0A66C2]" },
    { icon: Instagram, href: "https://www.instagram.com/sv_india/", label: "Instagram", color: "hover:bg-[#E4405F]" },
    { icon: Youtube, href: "https://www.youtube.com/@shijinvarghese", label: "YouTube", color: "hover:bg-[#FF0000]" },
  ];

  return (
    <Layout>
      <PageHeader
        title="Contact"
        subtitle="Get in touch for inquiries, appointments, or collaboration opportunities"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <motion.h2
                className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Get In Touch
              </motion.h2>

              <div className="space-y-6">
                {[
                  { href: "https://wa.me/919633508448", icon: MessageCircle, iconBg: "bg-[#25D366]", label: "WhatsApp", value: "+91 96335 08448", isLink: true },
                  { href: "mailto:shijinv.india@gmail.com", icon: Mail, iconBg: "bg-saffron", label: "Email", value: "shijinv.india@gmail.com", isLink: true },
                  { href: "", icon: MapPin, iconBg: "bg-india-green", label: "Location", value: "Kerala, India", isLink: false },
                ].map((item, index) => {
                  const content = (
                    <motion.div
                      className="card-tricolour bg-card p-6 flex items-center gap-4 hover:shadow-elegant transition-shadow duration-300 group"
                      custom={index}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <div className={`w-14 h-14 rounded-full ${item.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{item.label}</p>
                        <p className="text-muted-foreground">{item.value}</p>
                      </div>
                    </motion.div>
                  );
                  return item.isLink ? (
                    <a key={index} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                      {content}
                    </a>
                  ) : <div key={index}>{content}</div>;
                })}
              </div>

              {/* Social Links */}
              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Follow On Social Media</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, i) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground ${social.color} hover:text-white transition-all duration-300`}
                      aria-label={social.label}
                      whileHover={{ scale: 1.15, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.08 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="card-tricolour bg-card p-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Send a Message</h2>
                
                {isSubmitted ? (
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <CheckCircle className="w-16 h-16 text-india-green mx-auto mb-4" />
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Thank you.</h3>
                    <p className="text-muted-foreground mb-6">Your message has been sent successfully.</p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="btn-hero-primary"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                    
                    {/* Honeypot field - hidden from humans, visible to bots */}
                    <div className="absolute -left-[9999px] opacity-0 h-0 overflow-hidden" aria-hidden="true">
                      <label htmlFor="website">Website</label>
                      <input
                        type="text"
                        id="website"
                        name="website"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>
                    
                    {[
                      { id: "name", label: "Name *", type: "text", placeholder: "Your full name", maxLength: 100 },
                      { id: "phone", label: "Phone *", type: "tel", placeholder: "Your phone number", maxLength: 20 },
                      { id: "email", label: "Email *", type: "email", placeholder: "your@email.com", maxLength: 100 },
                    ].map((field, i) => (
                      <motion.div
                        key={field.id}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                      >
                        <label htmlFor={field.id} className="block text-sm font-medium text-foreground mb-2">{field.label}</label>
                        <input
                          type={field.type}
                          id={field.id}
                          name={field.id}
                          value={formData[field.id as keyof typeof formData]}
                          onChange={handleChange}
                          required
                          maxLength={field.maxLength}
                          className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all ${errors[field.id as keyof ContactFormData] ? 'border-destructive' : 'border-input'}`}
                          placeholder={field.placeholder}
                        />
                        {errors[field.id as keyof ContactFormData] && <p className="text-destructive text-sm mt-1">{errors[field.id as keyof ContactFormData]}</p>}
                      </motion.div>
                    ))}

                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.44 }}
                    >
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        maxLength={1000}
                        className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all resize-none ${errors.message ? 'border-destructive' : 'border-input'}`}
                        placeholder="Your message (optional)"
                      />
                      {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
                    </motion.div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-hero-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
