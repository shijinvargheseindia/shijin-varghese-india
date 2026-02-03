import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Facebook, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = forwardRef<HTMLElement>((_, ref) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Awards & Courtesy Visits", path: "/awards-courtesy" },
    { name: "Positions Held", path: "/positions" },
    { name: "SVI Wealth Management", path: "/wealth-management" },
    { name: "SVI NextGen Pro", path: "/nextgen-pro" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/shijin.varghese.16/", label: "Facebook" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/shijin-varghese-91693410b/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/sv_india/", label: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/@shijinvarghese", label: "YouTube" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <footer ref={ref} className="bg-navy text-white">
      {/* Tricolour top border with animation */}
      <motion.div 
        className="h-1.5 w-full bg-gradient-to-r from-saffron via-white to-india-green"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* About */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4 hover:opacity-90 transition-opacity group">
              <motion.div 
                className="w-12 h-12 rounded-full bg-gradient-to-br from-saffron via-white to-india-green flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="font-serif font-bold text-lg text-navy">SVI</span>
              </motion.div>
              <span className="font-serif text-2xl font-semibold group-hover:text-saffron transition-colors duration-300">Shijin Varghese</span>
            </Link>
            <p className="text-white/70 mb-6 leading-relaxed max-w-md">
              Global Youth Humanitarian Leader from Kerala, India. Dedicated to serving humanity, 
              empowering youth, and strengthening the nation through over two decades of social service.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-saffron transition-colors duration-300"
                  aria-label={social.label}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-serif text-lg font-semibold mb-4 text-saffron">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.path}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-saffron transition-colors duration-300 inline-block hover:translate-x-1 transform"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="font-serif text-lg font-semibold mb-4 text-saffron">Contact</h4>
            <ul className="space-y-3">
              <motion.li whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 300 }}>
                <a
                  href="https://wa.me/919633508448"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-india-green transition-colors duration-300"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 96335 08448</span>
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 300 }}>
                <a
                  href="mailto:shijinv.india@gmail.com"
                  className="flex items-center gap-3 text-white/70 hover:text-saffron transition-colors duration-300"
                >
                  <Mail className="w-4 h-4" />
                  <span>shijinv.india@gmail.com</span>
                </a>
              </motion.li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Kerala, India</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="mt-12 pt-8 border-t border-white/10 text-center text-white/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p>&copy; {currentYear} Shijin Varghese. All rights reserved.</p>
          <motion.p 
            className="mt-2 text-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            Serving Humanity. Empowering Youth. Strengthening India.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
