import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Award, Medal, Trophy, Star } from "lucide-react";

const placeholderAwards = [
  { title: "Award Placeholder", year: "Year", icon: Award },
  { title: "National Recognition", year: "Placeholder", icon: Medal },
  { title: "International Honour", year: "Placeholder", icon: Trophy },
  { title: "Social Service Award", year: "Placeholder", icon: Star },
];

const Awards = () => {
  return (
    <Layout>
      <PageHeader
        title="Awards & Recognition"
        subtitle="Honors received for outstanding contributions to society and humanitarian service"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {placeholderAwards.map((award, index) => (
              <div
                key={index}
                className="card-tricolour bg-card p-8 text-center hover:shadow-elegant transition-shadow duration-300"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-saffron/20 to-india-green/20 flex items-center justify-center">
                  <award.icon className="w-10 h-10 text-saffron" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {award.title}
                </h3>
                <p className="text-muted-foreground">{award.year}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block card-tricolour bg-muted/50 px-8 py-6 rounded-xl">
              <p className="text-muted-foreground italic">
                Award details will be updated soon. These are placeholder entries.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Awards;
