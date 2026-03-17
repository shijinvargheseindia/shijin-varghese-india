import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Link } from "react-router-dom";
import { Users, GraduationCap, Briefcase, Quote, Calendar, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

import sviNextgenLogo from "@/assets/logos/svi-nextgen-logo.jpeg";

const trustedBy = [
  "National Service Scheme (NSS) - Government of India",
  "MY Bharath - Government of India",
  "Suchitwa Mission – Government of Kerala",
  "Kerala State Youth Welfare Board - Government of Kerala",
  "Universities, Colleges & Educational Institutions",
  "Corporate Organizations & CSR Platforms",
  "Media & Corporate Training Platforms, including 24 Channel",
  "Non-Governmental & Social Development Organizations",
];

const studentFocusAreas = [
  "Leadership Activation & Self-Discovery",
  "Motivation, Goal Clarity & Life Direction",
  "Career Readiness & Campus-to-Corporate Transition",
  "Digital Discipline & Healthy Social Media Habits",
  "Anti-Drug Awareness & Addiction-Free Living",
  "Financial Intelligence for Young Adults",
  "NSS Volunteer Leadership & Civic Responsibility",
];

const educatorFocusAreas = [
  "Youth Psychology & Understanding the Modern Learner",
  "Classroom Engagement, Innovation & Gamification",
  "Emotional Intelligence & Stress Management",
  "Mentorship, Values Education & Institutional Culture Building",
];

const corporateFocusAreas = [
  "Leadership Development & Team Alignment",
  "Mindset Transformation & Performance Psychology",
  "Communication Excellence & Personal Branding",
  "Emotional Intelligence in the Workplace",
  "Stress Management & Work-Life Balance",
  "Ethics, Values & Purpose-Driven Leadership",
];

const programFormats = [
  "Half-Day High-Impact Sessions",
  "Full-Day Intensive Workshops",
  "2–3 Day Residential Leadership Camps",
  "Delivery at Campus Venues, Corporate Premises, or Offsite Retreats",
];

const whyChoose = [
  "Backed by 17+ years of grassroots and leadership experience",
  "Strong association with government and statutory bodies",
  "Highly interactive, engaging, and practice-oriented sessions",
  "Scientifically structured yet emotionally engaging methodology",
  "Clear focus on long-term transformation, not temporary motivation",
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-40px" as const },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

const NextGenPro = () => {
  return (
    <Layout>
      <PageHeader title="SVI NextGen Pro" subtitle="Unleashing Human Potential. Building Inspired Institutions. Creating Future-Ready Leaders." />

      {/* Logo & Quote Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div className="flex flex-col items-center text-center mb-10" {...fadeUp()}>
              <img src={sviNextgenLogo} alt="SVI NextGen Pro Logo" className="h-14 w-14 md:h-20 md:w-20 object-contain rounded-xl shadow-card mb-4" />
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">SVI NextGen Pro</h2>
            </motion.div>
            <motion.div className="text-center" {...fadeUp(0.15)}>
              <Quote className="w-12 h-12 text-saffron mx-auto mb-6 opacity-50" />
              <blockquote className="font-serif text-2xl md:text-3xl text-foreground italic leading-relaxed max-w-3xl mx-auto px-4">
                "True leadership is not about influence over people, but impact on lives."
              </blockquote>
              <div className="w-24 h-1 bg-saffron mx-auto mt-8" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed text-justify">
            {[
              "SVI NextGen Pro is led by Shijin Varghese, a nationally and internationally recognized youth mentor, humanitarian leader, and transformation coach, dedicated to shaping purpose-driven individuals, future-ready professionals, and values-based leaders.",
              "SVI NextGen Pro is a leadership and transformation initiative working with students, educators, institutions, government bodies, and corporate organizations. The programs are designed to deliver structured, high-impact learning experiences that go beyond motivation and create measurable, lasting behavioral change.",
              "With a strong foundation in youth development, leadership psychology, and real-world engagement, SVI NextGen Pro has successfully delivered training and transformational programs to over 1,00,000+ individuals across India, spanning academic institutions, government platforms, NGOs, and corporate environments.",
              "Built on credibility, trust, and proven impact, SVI NextGen Pro is recognized for its depth, authenticity, and results-oriented approach.",
            ].map((text, i) => (
              <motion.p key={i} {...fadeUp(i * 0.08)}>{text}</motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4">
          <motion.h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4" {...fadeUp()}>
            Trusted by Government, Institutions & Corporates
          </motion.h2>
          <motion.p className="text-white/70 text-center mb-12 max-w-2xl mx-auto" {...fadeUp(0.1)}>
            SVI NextGen Pro programs and sessions have been delivered for and in association with:
          </motion.p>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {trustedBy.map((org, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3 hover:bg-white/10 transition-colors duration-300"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <span className="text-white/90">{org}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Focus Areas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-12" {...fadeUp()}>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Core Focus Areas</h2>
            <div className="w-24 h-1 bg-saffron mx-auto" />
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: GraduationCap, color: "saffron", title: "Programs for Students & Youth", items: studentFocusAreas },
              { icon: Users, color: "india-green", title: "Programs for Educators & Institutions", items: educatorFocusAreas },
              { icon: Briefcase, color: "navy", title: "Programs for Corporates & Organizations", items: corporateFocusAreas },
            ].map((section, sIdx) => (
              <motion.div
                key={sIdx}
                className="bg-card p-8 rounded-xl border border-border shadow-sm"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: sIdx * 0.12 }}
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-${section.color}/10 flex items-center justify-center`}>
                  <section.icon className={`w-8 h-8 text-${section.color}`} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4 text-center">{section.title}</h3>
                <ul className="space-y-3 mt-4">
                  {section.items.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-2 text-muted-foreground text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                    >
                      <CheckCircle className={`w-4 h-4 text-${section.color} mt-0.5 flex-shrink-0`} />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Formats */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div {...fadeUp()}>
              <Calendar className="w-12 h-12 text-india-green mx-auto mb-6" />
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">Program Formats</h2>
            </motion.div>
            <div className="space-y-3">
              {programFormats.map((format, index) => (
                <motion.div
                  key={index}
                  className="bg-background px-6 py-4 rounded-lg border border-border text-left md:text-center"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <span className="text-foreground">{format}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground text-center mb-8" {...fadeUp()}>
              Why Organizations Choose SVI NextGen Pro
            </motion.h2>
            <div className="space-y-4">
              {whyChoose.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-muted rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <CheckCircle className="w-5 h-5 text-india-green mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 className="font-serif text-3xl md:text-4xl font-bold mb-4" {...fadeUp()}>Engagement & Booking</motion.h2>
          <motion.p className="text-white/70 mb-4 max-w-2xl mx-auto" {...fadeUp(0.1)}>
            SVI NextGen Pro offers customized programs tailored to the specific needs of educational institutions, government bodies, NGOs, and corporate organizations.
          </motion.p>
          <motion.p className="text-white/80 mb-8" {...fadeUp(0.15)}>
            To book a session or explore collaborations, please connect through the Contact section.
          </motion.p>
          <motion.div {...fadeUp(0.2)}>
            <Link to="/contact" className="btn-hero-primary inline-block">Contact for Booking</Link>
          </motion.div>
          <motion.div className="mt-12 pt-8 border-t border-white/10" {...fadeUp(0.3)}>
            <p className="font-serif text-2xl text-saffron font-bold">SVI NextGen Pro</p>
            <p className="text-white/80 mt-2 text-lg">Unleashing Human Potential. Building Inspired Institutions. Creating Future-Ready Leaders.</p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default NextGenPro;
