import { useState, useEffect, useCallback } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  Shield, 
  Target, 
  Users, 
  CheckCircle, 
  ChevronLeft,
  ChevronRight,
  Heart,
  GraduationCap,
  Clock,
  Wallet,
  FileCheck
} from "lucide-react";

import sviWealthLogo from "@/assets/logos/svi-wealth-logo.jpeg";
import testimonial1 from "@/assets/testimonials/testimonial-1.jpeg";
import testimonial2 from "@/assets/testimonials/testimonial-2.jpeg";
import testimonial3 from "@/assets/testimonials/testimonial-3.jpeg";
import testimonial4 from "@/assets/testimonials/testimonial-4.jpeg";

const services = [
  { icon: TrendingUp, title: "Financial Planning", description: "Comprehensive financial strategies tailored to your goals" },
  { icon: Clock, title: "Retirement Planning", description: "Secure your golden years with smart planning" },
  { icon: Heart, title: "Health Insurance Planning", description: "Protect your family's health and finances" },
  { icon: GraduationCap, title: "Child Education & Marriage Planning", description: "Plan for your children's future milestones" },
  { icon: Wallet, title: "Wealth Creation & Investment Advisory", description: "Build and grow your wealth strategically" },
  { icon: Target, title: "Short-Term & Long-Term Investments", description: "Balanced portfolio for all time horizons" },
  { icon: Shield, title: "Risk Management", description: "Protect your assets and minimize risks" },
  { icon: FileCheck, title: "Life Insurance", description: "Comprehensive life coverage for your family's security" },
  { icon: Shield, title: "Term Insurance", description: "Affordable protection with high coverage" },
];

const whyChooseUs = [
  "Personalized advisory",
  "Ethical guidance",
  "Goal-based planning",
  "Long-term focus",
  "Dedicated support",
  "Trusted by families and professionals",
];

const whoShouldConsult = [
  "Working professionals",
  "Families",
  "Retirement planners",
  "Young earners",
  "Anyone seeking financial clarity",
];

const testimonialImages = [
  testimonial1,
  testimonial2,
  testimonial3,
  testimonial4,
];

const WealthManagement = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonialImages.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonialImages.length) % testimonialImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 4000);
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  return (
    <Layout>
      <PageHeader
        title="SVI Wealth Management"
        subtitle="Building Financial Security. Creating Lasting Legacies."
      />

      {/* Logo & Intro Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Logo */}
            <div className="flex justify-center mb-12">
              <img 
                src={sviWealthLogo} 
                alt="SVI Wealth Management Logo" 
                className="w-48 h-48 md:w-56 md:h-56 object-contain rounded-2xl shadow-elegant"
              />
            </div>
            
            <div className="text-center">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                SVI Wealth Management, led by <strong className="text-foreground">Shijin Varghese, Managing Director and Senior Family Wealth Advisor</strong>, is a professional financial advisory practice dedicated to long-term wealth creation, protection, and legacy planning.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                The firm is built on a strong philosophy of ethical advisory, transparency, and client-first financial planning. Every recommendation is carefully aligned with the client's life goals, risk profile, family responsibilities, and future aspirations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                SVI Wealth Management partners with individuals and families to help them make well-informed financial decisions that deliver stability, confidence, and sustainable financial growth across every stage of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Credibility */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
            Experience & Credibility
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { value: "10+", label: "Years of Professional Experience" },
              { value: "500+", label: "Families & Individuals Advised" },
              { value: "₹20 Cr+", label: "Assets Under Advisory" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm">
                <div className="font-serif text-4xl font-bold text-saffron mb-2">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-heading">Our Services</h2>
            <div className="tricolour-divider" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="card-tricolour bg-card p-6 hover:shadow-elegant transition-shadow duration-300"
              >
                <service.icon className="w-10 h-10 text-saffron mb-4" />
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Who Should Consult */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Why Choose Us */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Why Choose SVI Wealth Management</h2>
              <div className="space-y-3">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-india-green flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Who Should Consult */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Who Should Consult Us</h2>
              <div className="space-y-3">
                {whoShouldConsult.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-saffron flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-heading">Client Experiences & Testimonials</h2>
            <div className="tricolour-divider" />
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Carousel */}
            <div className="overflow-hidden rounded-xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonialImages.map((image, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0"
                  >
                    <img 
                      src={image} 
                      alt={`Customer testimonial ${index + 1}`}
                      className="w-full h-auto rounded-xl shadow-lg"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-background shadow-card flex items-center justify-center hover:shadow-elegant transition-shadow"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-background shadow-card flex items-center justify-center hover:shadow-elegant transition-shadow"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonialImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "w-8 bg-saffron" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Take the First Step</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Begin your journey towards financial security and lasting legacies. Book an appointment today.
          </p>
          <Link to="/contact" className="btn-hero-primary inline-block">
            Book Appointment
          </Link>
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="font-serif text-xl text-saffron">SVI Wealth Management</p>
            <p className="text-white/60 mt-2">Building Financial Security. Creating Lasting Legacies.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WealthManagement;