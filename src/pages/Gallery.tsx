import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { ImageIcon } from "lucide-react";

// Placeholder gallery items - user will replace later
const placeholderImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  alt: `Gallery Image ${i + 1}`,
}));

const Gallery = () => {
  return (
    <Layout>
      <PageHeader
        title="Gallery"
        subtitle="Moments captured from humanitarian work, events, and initiatives"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {placeholderImages.map((image) => (
              <div
                key={image.id}
                className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-saffron/10 to-india-green/10 flex items-center justify-center group hover:shadow-elegant transition-shadow duration-300 cursor-pointer"
              >
                <div className="text-center text-muted-foreground group-hover:scale-110 transition-transform duration-300">
                  <ImageIcon className="w-12 h-12 mx-auto mb-2 opacity-30" />
                  <p className="text-sm opacity-50">Image {image.id}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block card-tricolour bg-muted/50 px-8 py-6 rounded-xl">
              <p className="text-muted-foreground italic">
                Gallery images will be uploaded soon. These are placeholder entries.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
