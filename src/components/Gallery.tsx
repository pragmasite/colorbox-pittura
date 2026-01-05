import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import images from assets
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery12 from "@/assets/gallery-12.jpg";
import gallery13 from "@/assets/gallery-13.jpg";

const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
  gallery13,
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const goToPrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section id="galleria" className="section-padding">
      <div className="container-narrow">
        <div className="section-header">
          <h2 className="section-title">Galleria Lavori</h2>
          <div className="section-divider" />
        </div>

        {/* Main image */}
        <div className="relative max-w-4xl mx-auto mb-8">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
            <img
              src={images[currentIndex]}
              alt={`Lavoro ${currentIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm hover:bg-card"
            onClick={goToPrev}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm hover:bg-card"
            onClick={goToNext}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center gap-3 flex-wrap">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentIndex
                  ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
