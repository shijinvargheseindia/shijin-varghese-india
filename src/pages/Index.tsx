import Layout from "@/components/Layout";
import HeroSlider from "@/components/HeroSlider";
import { Heart, Users, Droplets, TreeDeciduous, GraduationCap, Home } from "lucide-react";

const impactStats = [
  { number: "150,000+", label: "Blood Units Collected", icon: Droplets },
  { number: "100,000+", label: "Youth Trained", icon: Users },
  { number: "30,000+", label: "Saplings Planted", icon: TreeDeciduous },
  { number: "10,000+", label: "Families Supported", icon: Heart },
];

const Index = () => {
  return (
    <Layout>
      <HeroSlider />

      {/* Name & Tagline Section - Immediately Below Hero Slider */}
      <section className="py-10 md:py-14 bg-navy text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-wide">
            SHIJIN VARGHESE
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
            Serving Humanity. Empowering Youth. Strengthening India.
          </p>
        </div>
      </section>

      {/* Designation Section - Clean white/neutral background */}
      <section className="py-8 md:py-12 bg-background border-b">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm md:text-base lg:text-lg leading-relaxed max-w-5xl mx-auto text-muted-foreground">
            President of India Awardee for Social Service | Kentucky Colonel, USA | Kerala State Government Awardee – Best Youth Social Worker | World Book of Records Laureate | Indian Government Delegate to South Korea (2014) | Kerala State Government Award – Best NSS Volunteer | Philanthropist | Humanitarian Advocate | Esteemed Motivational Speaker | Strategic Financial & Wealth Advisor | Political & Strategic Marketing Strategist | Dedicated Proponent of India's Progress and Cultural Heritage
          </p>
        </div>
      </section>

      {/* Full About Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Shijin Varghese is a deeply patriotic and distinguished global youth humanitarian and social advocate from Kerala, India, with over two decades of dedicated service to societal development. His work spans healthcare, education, poverty alleviation, skill development, tribal welfare, and environmental sustainability, reflecting a strong commitment to equitable and sustainable progress.
            </p>
            <p>
              He has led numerous humanitarian initiatives, including the construction of homes for homeless families, distribution of food kits to the underprivileged, pensions for elderly individuals and widows, and ensuring food security for marginalized communities. He has also conducted extensive awareness programs on drug abuse prevention, HIV/AIDS awareness, and public health education.
            </p>
            <p>
              In the healthcare sector, he has demonstrated exceptional leadership by facilitating the collection of over 150,000 units of blood, organizing 1,000+ health check-up camps that benefited 100,000+ individuals, and enabling free surgeries for more than 500 patients. His medical assistance initiatives have supported over 10,000 families, and his contributions to palliative care include the distribution of wheelchairs, water beds, diapers, and essential medical equipment to bedridden patients.
            </p>
            <p>
              His contribution to education includes supporting more than 10,000 students, distributing study kits to 5,000+ children, establishing libraries, conducting awareness and motivational sessions, and organizing competitions to encourage young minds. He has also trained over 100,000 youth, equipping them with skills and knowledge for personal and professional growth.
            </p>
            <p>
              A strong advocate of environmental sustainability, he has led initiatives resulting in the planting of over 30,000 saplings and spearheaded the Plastic-Free India Project, distributing 11,000+ steel bottles, promoting cloth bags, steel lunch boxes, and eco-friendly alternatives to plastic. He has also organized beach cleaning programs to reduce marine pollution and promote environmental responsibility.
            </p>
            <p>
              His work with tribal communities includes constructing temporary shelters, providing nutritional food for women and children, distributing clothing and essential items, conducting tuition classes, and promoting menstrual hygiene awareness by providing sanitary cotton pads to underprivileged women.
            </p>
            <p>
              He has played a vital role in disaster response efforts, notably during the 2018 Kerala floods and during the COVID-19 pandemic. When the virus first affected Pathanamthitta District, he became the first volunteer in India to actively engage in COVID relief activities, playing a pioneering role in frontline support, public assistance, and emergency response during the initial outbreak.
            </p>
            <p>
              Through self-employment initiatives, he has empowered individuals by distributing sewing machines, hens, and goats, fostering economic independence.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-16 bg-muted relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 chakra-pattern" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-background shadow-card hover:shadow-elegant transition-shadow duration-300"
              >
                <stat.icon className="w-10 h-10 mx-auto mb-3 text-saffron" />
                <div className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Areas of Impact */}
      <section className="py-20 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 chakra-pattern" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Key Areas of Impact</h2>
            <div className="w-24 h-1 bg-saffron mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: "Healthcare",
                description: "Facilitated collection of over 150,000 blood units, organized 1,000+ health camps benefiting 100,000+ individuals, enabled free surgeries for 500+ patients"
              },
              {
                icon: GraduationCap,
                title: "Education",
                description: "Supported 10,000+ students, distributed study kits to 5,000+ children, established libraries, conducted motivational sessions"
              },
              {
                icon: TreeDeciduous,
                title: "Environment",
                description: "Led planting of 30,000+ saplings, spearheaded Plastic-Free India Project with 11,000+ steel bottles distributed"
              },
              {
                icon: Home,
                title: "Tribal Welfare",
                description: "Constructed shelters, provided nutrition for women and children, conducted tuition classes and menstrual hygiene awareness"
              }
            ].map((area, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-colors duration-300"
              >
                <area.icon className="w-12 h-12 text-saffron mb-4" />
                <h3 className="font-serif text-xl font-semibold mb-3">{area.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
