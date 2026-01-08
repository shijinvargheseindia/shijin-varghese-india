import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Link } from "react-router-dom";
import { 
  Users, 
  Building, 
  GraduationCap, 
  Briefcase, 
  CheckCircle,
  Quote,
  Calendar,
  Target
} from "lucide-react";

const trustedBy = [
  "NSS – Govt of India",
  "MY Bharath – Govt of India",
  "Suchitwa Mission – Govt of Kerala",
  "Kerala State Youth Welfare Board",
  "Universities & Colleges",
  "Corporates & CSR",
  "Media Platforms",
  "NGOs",
];

const focusAreas = [
  { icon: GraduationCap, title: "Students & Youth", description: "Empowering the next generation with skills and mindset for success" },
  { icon: Users, title: "Educators & Institutions", description: "Building inspired institutions and effective learning environments" },
  { icon: Briefcase, title: "Corporates", description: "Transformational programs for organizational excellence" },
];

const programFormats = [
  "Half-Day Programs",
  "Full-Day Programs",
  "2–3 Day Camps",
];

const NextGenPro = () => {
  return (
    <Layout>
      <PageHeader
        title="SVI NextGen Pro"
        subtitle="Unleashing Human Potential. Building Inspired Institutions. Creating Future-Ready Leaders."
      />

      {/* Quote Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="w-12 h-12 text-saffron mx-auto mb-6 opacity-50" />
            <blockquote className="font-serif text-2xl md:text-3xl text-foreground italic leading-relaxed">
              "True leadership is not about influence over people, but impact on lives."
            </blockquote>
            <div className="tricolour-divider mt-8" />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              <strong className="text-foreground">SVI NextGen Pro</strong> is led by <strong className="text-foreground">Shijin Varghese</strong>, a nationally and internationally recognized youth mentor, humanitarian leader, and transformation coach.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              SVI NextGen Pro works with students, educators, institutions, government bodies, and corporates.
            </p>
            <div className="card-tricolour bg-background inline-block px-8 py-4 rounded-xl">
              <p className="font-serif text-2xl font-bold text-saffron">1,00,000+</p>
              <p className="text-muted-foreground">Individuals Trained Across India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">Trusted By</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {trustedBy.map((org, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/10 transition-colors duration-300"
              >
                <p className="text-white/90 text-sm">{org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Focus Areas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-heading">Core Focus Areas</h2>
            <div className="tricolour-divider" />
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                className="card-tricolour bg-card p-8 text-center hover:shadow-elegant transition-shadow duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-saffron/20 to-india-green/20 flex items-center justify-center">
                  <area.icon className="w-8 h-8 text-saffron" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{area.title}</h3>
                <p className="text-muted-foreground text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Formats */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Calendar className="w-12 h-12 text-india-green mx-auto mb-6" />
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">Program Formats</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {programFormats.map((format, index) => (
                <div
                  key={index}
                  className="card-tricolour bg-background px-6 py-3 rounded-full"
                >
                  <span className="text-foreground font-medium">{format}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <Target className="w-12 h-12 text-saffron mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Engagement & Booking</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Transform your institution, empower your students, and create future-ready leaders. Get in touch to schedule a program.
          </p>
          <Link to="/contact" className="btn-hero-primary inline-block">
            Contact for Booking
          </Link>
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="font-serif text-xl text-saffron">SVI NextGen Pro</p>
            <p className="text-white/60 mt-2">Unleashing Human Potential. Building Inspired Institutions. Creating Future-Ready Leaders.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NextGenPro;
