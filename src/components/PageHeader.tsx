import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <section className="pt-32 pb-16 bg-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5 chakra-pattern" />
      <motion.div 
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-saffron via-white to-india-green"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <motion.h1 
            className="font-serif text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p 
              className="text-lg text-white/70 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {subtitle}
            </motion.p>
          )}
          <motion.div 
            className="tricolour-divider mt-6"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
