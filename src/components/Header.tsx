import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Awards & Courtesy Visits", path: "/awards-courtesy" },
  { name: "Positions Held", path: "/positions" },
  { name: "SVI Wealth Management", path: "/wealth-management" },
  { name: "SVI NextGen Pro", path: "/nextgen-pro" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl shadow-elegant h-16"
          : "bg-background shadow-elegant h-20"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div 
              className={`relative rounded-full bg-navy/5 border border-saffron/20 flex items-center justify-center transition-all duration-500 ${
                isScrolled ? "w-10 h-10" : "w-12 h-12"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={`font-serif font-bold text-saffron transition-all duration-500 ${
                isScrolled ? "text-lg" : "text-xl"
              }`}>SVI</span>
            </motion.div>
            <motion.span 
              className={`font-serif font-semibold hidden sm:block transition-all duration-500 text-foreground ${
                isScrolled ? "text-lg" : "text-xl"
              }`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Shijin Varghese
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                <Link
                  to={item.path}
                  className={`nav-link ${
                    location.pathname === item.path
                      ? "text-saffron"
                      : "text-foreground hover:text-saffron"
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-foreground" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-foreground" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-x-0 top-16 bg-background/95 backdrop-blur-xl shadow-elegant z-50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: 0.05 * index }}
                >
                  <Link
                    to={item.path}
                    className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 block ${
                      location.pathname === item.path
                        ? "bg-saffron/10 text-saffron"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            {/* Tricolour bar */}
            <motion.div 
              className="h-1 w-full bg-gradient-to-r from-saffron via-background to-india-green"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
