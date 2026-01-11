import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

import awardPresident from "@/assets/recognition/award-president.jpg";
import southKorea from "@/assets/recognition/south-korea.jpg";
import yuvaPrathibha from "@/assets/recognition/yuva-prathibha.jpg";
import kentuckyColonel from "@/assets/recognition/kentucky-colonel.jpg";
import nssVolunteer from "@/assets/recognition/nss-volunteer.jpg";
import worldBookRecords from "@/assets/recognition/world-book-records.jpg";
import rakatNayak from "@/assets/recognition/rakat-nayak.jpg";
import rashtriyaKarmayogi from "@/assets/recognition/rashtriya-karmayogi.jpg";
import presidentMurmu from "@/assets/recognition/president-murmu.jpg";
import governorKerala from "@/assets/recognition/governor-kerala.jpg";
import governorMizoram from "@/assets/recognition/governor-mizoram.jpg";
import brazilMinister from "@/assets/recognition/brazil-minister.jpg";
import speakerKerala from "@/assets/recognition/speaker-kerala.jpg";

const awardsData = [
  {
    image: awardPresident,
    title: "INDIRA GANDHI NSS NATIONAL AWARD",
    subtitle: "(Government of India)",
    description: "Presented by the Honourable President of India, Shri Pranab Kumar Mukherjee."
  },
  {
    image: southKorea,
    title: "INDIAN GOVERNMENT DELEGATE TO SOUTH KOREA",
    subtitle: "",
    description: "Official international delegation of the Government of India."
  },
  {
    image: yuvaPrathibha,
    title: "SWAMI VIVEKANANDA YUVA PRATHIBHA PURASKARAM",
    subtitle: "(Government of Kerala)",
    description: "For Best Youth Social Worker of Kerala, presented by the Honourable Minister for Youth Affairs & Sports, Shri E. P. Jayarajan."
  },
  {
    image: kentuckyColonel,
    title: "KENTUCKY COLONEL AWARD (USA)",
    subtitle: "",
    description: "The highest civilian honour of the Commonwealth of Kentucky, presented by the Honourable Governor of Kentucky."
  },
  {
    image: nssVolunteer,
    title: "KERALA STATE AWARD FOR BEST NSS VOLUNTEER",
    subtitle: "(Government of Kerala)",
    description: "Presented by the Honourable Minister of Education, Shri Abdu Rabb."
  },
  {
    image: worldBookRecords,
    title: "WORLD BOOK OF RECORDS",
    subtitle: "",
    description: "For organising the collection of 1,00,000 units of blood in a single day, presented by the Honourable Deputy Speaker of Kerala, Shri Chittayam Gopakumar."
  },
  {
    image: rakatNayak,
    title: "NATIONAL RAKAT-NAYAK AWARD",
    subtitle: "",
    description: "Presented by the Honourable Chief Minister of Haryana, Shri Manohar Lal Khattar."
  },
  {
    image: rashtriyaKarmayogi,
    title: "RASHTRIYA KARMAYOGI AWARD",
    subtitle: "",
    description: "Presented by the Honourable Speaker of Haryana, Shri Harvinder Kalyan."
  },
  {
    image: presidentMurmu,
    title: "",
    subtitle: "",
    description: "Courtesy visit to the Honourable President of India, Smt. Droupadi Murmu."
  },
  {
    image: governorKerala,
    title: "",
    subtitle: "",
    description: "Courtesy visit to the Honourable Governor of Kerala, Shri Arif Mohammed Khan."
  },
  {
    image: governorMizoram,
    title: "",
    subtitle: "",
    description: "Courtesy visit to the Honourable Governor of Mizoram, Shri Kummanam Rajasekharan."
  },
  {
    image: brazilMinister,
    title: "",
    subtitle: "",
    description: "Courtesy meeting with Dr. Luiz Claudio Costa, Vice-Minister of Education, Federative Republic of Brazil."
  },
  {
    image: speakerKerala,
    title: "",
    subtitle: "",
    description: "Courtesy Visit to the Honourable Speaker of Kerala, Shri A. N. Shamseer."
  },
];

const AwardsCourtesy = () => {
  return (
    <Layout>
      <PageHeader
        title="Awards & Courtesy"
        subtitle="Honours, Recognitions & Distinguished Courtesy Visits"
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awardsData.map((award, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border shadow-card overflow-hidden hover:shadow-elegant transition-shadow duration-300"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={award.image}
                    alt={award.title || award.description}
                    className="w-full h-full object-contain bg-muted"
                  />
                </div>
                
                {/* Caption */}
                <div className="p-5">
                  {award.title && (
                    <h3 className="font-serif text-lg font-bold text-foreground mb-1 leading-tight">
                      {award.title}
                    </h3>
                  )}
                  {award.subtitle && (
                    <p className="text-sm text-saffron font-medium mb-2">{award.subtitle}</p>
                  )}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AwardsCourtesy;
