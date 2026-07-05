import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageBanner } from "../components/PageBanner";
import { useSEO } from "../hooks/use-seo";
import { ZoomIn, X } from "lucide-react";

import whitening1 from "../assets/images/gallery-whitening-1.webp";
import braces1 from "../assets/images/gallery-braces-1.webp";
import implants1 from "../assets/images/gallery-implants-1.webp";
import veneers1 from "../assets/images/gallery-veneers-1.webp";

type Category = "All" | "Implants" | "Braces" | "Whitening" | "Veneers";

const galleryItems = [
  { id: 1, category: "Whitening", image: whitening1, title: "Laser Teeth Whitening" },
  { id: 2, category: "Braces", image: braces1, title: "Orthodontic Braces" },
  { id: 3, category: "Implants", image: implants1, title: "Single Tooth Implant" },
  { id: 4, category: "Veneers", image: veneers1, title: "Porcelain Veneers" },
  { id: 5, category: "Whitening", image: whitening1, title: "Deep Stain Removal" },
  { id: 6, category: "Braces", image: braces1, title: "Clear Aligners Therapy" },
  { id: 7, category: "Implants", image: implants1, title: "Full Mouth Implants" },
  { id: 8, category: "Veneers", image: veneers1, title: "Smile Makeover" },
];

const categories: Category[] = ["All", "Implants", "Braces", "Whitening", "Veneers"];

export function PatientGallery() {
  useSEO({
    title: "Patient Gallery | Dr. Ashish Kakar Dental Clinic",
    description: "Before and after smile transformations from real patients treated at Dr. Ashish Kakar Dental Clinic in Noida.",
  });

  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = galleryItems.filter(item => 
    activeCategory === "All" || item.category === activeCategory
  );

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <PageBanner title="Patient Gallery" breadcrumb="Smile Gallery / Patient Gallery" />
      
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Real Results, Real Smiles</h2>
            <p className="text-gray-600 text-lg">
              Browse through our gallery of successful dental treatments. Witness the transformative power of modern dentistry and see what we can do for your smile.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                  activeCategory === category 
                    ? "bg-primary text-white shadow-md" 
                    : "bg-white text-gray-600 hover:bg-gray-100 hover:text-primary border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 cursor-pointer"
                  onClick={() => setSelectedImage(item.image)}
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ZoomIn className="w-10 h-10 text-white" />
                    </div>
                    {/* Before/After Labels Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between px-2">
                      <span className="bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">Before</span>
                      <span className="bg-primary/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">After</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-bold text-accent uppercase tracking-wider mb-2 block">{item.category}</span>
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage} 
              alt="Enlarged gallery view" 
              className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
