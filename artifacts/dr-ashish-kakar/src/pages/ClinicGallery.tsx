import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageBanner } from "../components/PageBanner";
import { useSEO } from "../hooks/use-seo";
import { ZoomIn, X } from "lucide-react";

import clinic from "../assets/images/clinic.webp";
import hero from "../assets/images/hero.webp";
import doctor from "../assets/images/doctor.webp";
import portrait1 from "../assets/images/portrait-1.webp";
import portrait2 from "../assets/images/portrait-2.webp";

const galleryItems = [
  { id: 1, image: clinic, title: "Reception & Waiting Lounge", caption: "A calm, welcoming entrance designed to put you at ease." },
  { id: 2, image: hero, title: "Modern Treatment Suite", caption: "State-of-the-art chairs with overhead diagnostic imaging." },
  { id: 3, image: doctor, title: "Sterilization Bay", caption: "Hospital-grade autoclave sterilization for every instrument." },
  { id: 4, image: portrait1, title: "Consultation Room", caption: "Private space for treatment planning and second opinions." },
  { id: 5, image: portrait2, title: "Digital Imaging Lab", caption: "On-site OPG, intraoral scanners and digital X-ray." },
  { id: 6, image: clinic, title: "Pediatric Corner", caption: "A bright, friendly area dedicated to our youngest patients." },
  { id: 7, image: hero, title: "Implant & Surgery Suite", caption: "Dedicated suite equipped for advanced surgical procedures." },
  { id: 8, image: doctor, title: "Recovery & Care Lounge", caption: "Comfortable post-treatment recovery for every patient." },
];

export function ClinicGallery() {
  useSEO({
    title: "Clinic Gallery | Dr. Ashish Kakar Dental Clinic",
    description: "Take a virtual tour of Dr. Ashish Kakar's modern dental clinic in Sector 73, Noida — equipped with the latest technology for safe, comfortable care.",
  });

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <PageBanner title="Clinic Gallery" breadcrumb="Smile Gallery / Clinic Gallery" />

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Step Inside Our Clinic
            </h2>
            <p className="text-gray-600 text-lg">
              From the reception lounge to our advanced surgical suites, every space at Dr. Ashish Kakar Dental Clinic is designed for safety, comfort, and clinical excellence.
            </p>
          </div>

          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {galleryItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
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
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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
              alt="Enlarged clinic view"
              className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
