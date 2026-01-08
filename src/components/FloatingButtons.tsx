import { MessageCircle, Mail } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919633508448"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn bg-[#25D366] hover:shadow-lg"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>

      {/* Email Button */}
      <a
        href="mailto:shijinv.india@gmail.com"
        className="floating-btn bg-saffron hover:shadow-glow-saffron"
        aria-label="Send Email"
      >
        <Mail className="w-6 h-6 text-white" />
      </a>
    </div>
  );
};

export default FloatingButtons;
