import { Link } from "react-router-dom";
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Awards & Recognition", path: "/awards" },
    { name: "Positions Held", path: "/positions" },
    { name: "SVI Wealth Management", path: "/wealth-management" },
    { name: "SVI NextGen Pro", path: "/nextgen-pro" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/shijin.varghese.16/", label: "Facebook" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/shijin-varghese-91693410b/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/sv_india/", label: "Instagram" },
  ];

  return (
    <footer className="bg-navy text-white">
      {/* Tricolour top border */}
      <div className="h-1.5 w-full bg-gradient-to-r from-saffron via-white to-india-green" />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-saffron via-white to-india-green flex items-center justify-center">
                <span className="font-serif font-bold text-lg text-navy">SV</span>
              </div>
              <span className="font-serif text-2xl font-semibold">Shijin Varghese</span>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed max-w-md">
              Global Youth Humanitarian Leader from Kerala, India. Dedicated to serving humanity, 
              empowering youth, and strengthening the nation through over two decades of social service.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-saffron transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-saffron">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-saffron transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-saffron">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/919633508448"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-india-green transition-colors duration-300"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 96335 08448</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:shijinv.india@gmail.com"
                  className="flex items-center gap-3 text-white/70 hover:text-saffron transition-colors duration-300"
                >
                  <Mail className="w-4 h-4" />
                  <span>shijinv.india@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Kerala, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/50">
          <p>&copy; {currentYear} Shijin Varghese. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Serving Humanity. Empowering Youth. Strengthening India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
