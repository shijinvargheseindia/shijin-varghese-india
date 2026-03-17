import { useState } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { X } from "lucide-react";
import { motion } from "framer-motion";

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

interface LightboxState {
  isOpen: boolean;
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

const AwardsCourtesy = () => {
  const [lightbox, setLightbox] = useState<LightboxState>({
    isOpen: false,
    image: "",
    title: "",
    subtitle: "",
    description: ""
  });

  const openLightbox = (award: typeof awardsData[0]) => {
    setLightbox({
      isOpen: true,
      image: award.image,
      title: award.title,
      subtitle: award.subtitle,
      description: award.description
    });
  };

  const closeLightbox = () => {
    setLightbox(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <Layout>
      <PageHeader
        title="Awards & Courtesy Visits"
        subtitle="Honours, Recognitions & Distinguished Courtesy Visits"
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awardsData.map((award, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl border border-border/50 shadow-card overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
                onClick={() => openLightbox(award)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (index % 6) * 0.08 }}
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={award.image}
                    alt={award.title || award.description}
                    className="w-full h-full object-contain bg-muted group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                
                {/* Caption */}
                <div className="p-5">
                  {award.title && (
                    <h3 className="font-serif text-lg font-bold text-foreground mb-1 leading-tight tracking-tight">
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightbox.isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={closeLightbox}
        >
          <div
            className="relative bg-card rounded-xl max-w-3xl w-full max-h-[90vh] overflow-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/90 flex items-center justify-center shadow-lg hover:bg-background transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>

            {/* Image */}
            <div className="w-full bg-muted">
              <img
                src={lightbox.image}
                alt={lightbox.title || lightbox.description}
                className="w-full h-auto object-contain max-h-[60vh]"
              />
            </div>

            {/* Caption */}
            <div className="p-6">
              {lightbox.title && (
                <h3 className="font-serif text-xl font-bold text-foreground mb-1 leading-tight">
                  {lightbox.title}
                </h3>
              )}
              {lightbox.subtitle && (
                <p className="text-sm text-saffron font-medium mb-2">{lightbox.subtitle}</p>
              )}
              <p className="text-muted-foreground leading-relaxed">
                {lightbox.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default AwardsCourtesy;
