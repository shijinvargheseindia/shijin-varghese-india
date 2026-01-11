import { useState } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { MessageCircle, Mail, Phone, MapPin, Send, CheckCircle, Facebook, Linkedin, Instagram, Youtube } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/919633508448"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-tricolour bg-card p-6 flex items-center gap-4 hover:shadow-elegant transition-shadow duration-300 group"
                >
                  <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">WhatsApp</p>
                    <p className="text-muted-foreground">+91 96335 08448</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:shijinv.india@gmail.com"
                  className="card-tricolour bg-card p-6 flex items-center gap-4 hover:shadow-elegant transition-shadow duration-300 group"
                >
                  <div className="w-14 h-14 rounded-full bg-saffron flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">shijinv.india@gmail.com</p>
                  </div>
                </a>

                {/* Location */}
                <div className="card-tricolour bg-card p-6 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-india-green flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-muted-foreground">Kerala, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Follow On Social Media</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground ${social.color} hover:text-white transition-all duration-300`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="card-tricolour bg-card p-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Send a Message</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-india-green mx-auto mb-4" />
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Thank you.</h3>
                    <p className="text-muted-foreground mb-6">Your message has been sent successfully.</p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="btn-hero-primary"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                    
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all"
                        placeholder="Your phone number"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Your message (optional)"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-hero-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;