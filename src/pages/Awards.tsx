import { useState } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Award, Medal, Trophy, Star, X } from "lucide-react";

// Import recognition images
import awardCeremony from "@/assets/recognition/award-ceremony.jpg";
import forestOfficerLetter from "@/assets/recognition/forest-officer-letter.jpg";
import youthWelfareBoard from "@/assets/recognition/youth-welfare-board.jpg";
import mlaGopakumar from "@/assets/recognition/mla-gopakumar.jpg";
import presidentInvitation from "@/assets/recognition/president-invitation.jpg";
import mlaJenishKumar from "@/assets/recognition/mla-jenish-kumar.jpg";
import mlaMathewThomas from "@/assets/recognition/mla-mathew-thomas.jpg";
import mlaVeenaGeorge from "@/assets/recognition/mla-veena-george.jpg";
import mpAntoAntony from "@/assets/recognition/mp-anto-antony.jpg";

const recognitionImages = [
  { src: awardCeremony, alt: "Award Ceremony - Receiving Recognition" },
  { src: presidentInvitation, alt: "NSS Award Invitation from President of India" },
  { src: youthWelfareBoard, alt: "Kerala State Youth Welfare Board - Letter of Appreciation" },
  { src: forestOfficerLetter, alt: "Social Forestry - Letter of Appreciation" },
  { src: mlaGopakumar, alt: "Letter of Recognition - MLA Chittayam Gopakumar" },
  { src: mlaJenishKumar, alt: "Letter of Appreciation - MLA K.U. Jenish Kumar" },
  { src: mlaMathewThomas, alt: "Letter of Appreciation - MLA Mathew T. Thomas" },
  { src: mlaVeenaGeorge, alt: "Letter of Appreciation - MLA Veena George" },
  { src: mpAntoAntony, alt: "Letter of Appreciation - MP Anto Antony" },
];

const Awards = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Layout>
      <PageHeader
        title="Awards & Recognition"
        subtitle="Honors received for outstanding contributions to society and humanitarian service"
      />

      {/* Awards Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Awards</h2>
            <div className="w-24 h-1 bg-saffron mx-auto mb-8" />
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-muted/50 px-8 py-10 rounded-xl text-center border border-border">
              <Award className="w-16 h-16 mx-auto mb-4 text-saffron opacity-50" />
              <p className="text-muted-foreground italic text-lg">
                Awards will be added later.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Recognition</h2>
            <div className="w-24 h-1 bg-india-green mx-auto mb-8" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Letters of appreciation and recognition received from government officials, legislators, and organizations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {recognitionImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image.src)}
                className="aspect-[3/4] rounded-xl overflow-hidden bg-background shadow-sm hover:shadow-elegant transition-all duration-300 cursor-pointer group border border-border"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selectedImage}
            alt="Recognition Certificate"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Layout>
  );
};

export default Awards;
