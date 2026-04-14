import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import masterPhoto from "@/assets/master-photo.png";

const galleryImages = [
  { src: heroBg, alt: "Training session", category: "Training" },
  { src: masterPhoto, alt: "Master instructor", category: "Events" },
  { src: heroBg, alt: "Competition moment", category: "Competitions" },
  { src: masterPhoto, alt: "Award ceremony", category: "Events" },
  { src: heroBg, alt: "Group training", category: "Training" },
  { src: masterPhoto, alt: "Belt ceremony", category: "Events" },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-heading text-primary uppercase tracking-[0.3em] text-sm mb-2">See Us In Action</p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase">
            <span className="text-primary">Gallery</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="image-hover-zoom rounded-lg cursor-pointer relative group"
              onClick={() => setSelected(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 md:h-64 object-cover rounded-lg"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 rounded-lg" />
              <span className="absolute bottom-3 left-3 font-heading text-xs uppercase tracking-wider bg-background/80 px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                {img.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button onClick={() => setSelected(null)} className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors">
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selected}
              alt="Gallery preview"
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
