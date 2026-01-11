import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Awards & Courtesy", path: "/awards-courtesy" },
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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-saffron via-background to-india-green flex items-center justify-center shadow-lg group-hover:shadow-glow-saffron transition-shadow duration-300">
              <span className="font-serif font-bold text-xl text-navy">SVI</span>
            </div>
            <span className={`font-serif text-xl font-semibold hidden sm:block transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-white"
            }`}>
              Shijin Varghese
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${
                  location.pathname === item.path
                    ? "text-saffron"
                    : isScrolled
                    ? "text-foreground hover:text-saffron"
                    : "text-white hover:text-saffron"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-background/20 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-20 bg-background/98 backdrop-blur-lg shadow-elegant transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
          {navItems.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                location.pathname === item.path
                  ? "bg-saffron/10 text-saffron"
                  : "text-foreground hover:bg-muted"
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        {/* Tricolour bar */}
        <div className="h-1 w-full bg-gradient-to-r from-saffron via-background to-india-green" />
      </div>
    </header>
  );
};

export default Header;
