interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <section className="pt-32 pb-16 bg-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5 chakra-pattern" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-saffron via-white to-india-green" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-white/70 max-w-2xl mx-auto animate-fade-in stagger-1">
              {subtitle}
            </p>
          )}
          <div className="tricolour-divider mt-6 animate-fade-in stagger-2" />
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
