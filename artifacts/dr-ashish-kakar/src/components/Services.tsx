import React from "react";
import { motion } from "framer-motion";
import implantsImg from "../assets/services/service-dental-implants.webp";
import rctImg from "../assets/services/service-root-canal.webp";
import bracesImg from "../assets/services/service-braces-aligners.webp";
import whiteningImg from "../assets/services/service-teeth-whitening.webp";
import crownsImg from "../assets/services/service-bridges-crowns.webp";
import extractionImg from "../assets/services/service-teeth-extraction.webp";
import denturesImg from "../assets/services/service-dentures.webp";
import checkupImg from "../assets/services/service-routine-checkup.webp";

export function Services() {
  const services = [
    {
      title: "Dental Implants",
      desc: "Permanent, natural-looking tooth replacements that restore function and aesthetics perfectly.",
      img: implantsImg,
    },
    {
      title: "Root Canal Treatment",
      desc: "Painless single-sitting RCT to save infected teeth and relieve severe toothache instantly.",
      img: rctImg,
    },
    {
      title: "Braces & Aligners",
      desc: "Straighten your teeth with traditional braces or invisible clear aligners for a perfect smile.",
      img: bracesImg,
    },
    {
      title: "Teeth Whitening",
      desc: "Professional bleaching treatments for a brighter, whiter, and more confident smile.",
      img: whiteningImg,
    },
    {
      title: "Bridges & Crowns",
      desc: "High-quality ceramic and zirconia crowns to protect and cover damaged or weak teeth.",
      img: crownsImg,
    },
    {
      title: "Teeth Extraction",
      desc: "Safe and painless surgical removal of impacted wisdom teeth or severely damaged teeth.",
      img: extractionImg,
    },
    {
      title: "Dentures",
      desc: "Comfortable, custom-fitted complete or partial dentures to replace missing teeth.",
      img: denturesImg,
    },
    {
      title: "Routine Checkups",
      desc: "Comprehensive dental exams, cleanings, and digital X-rays to maintain optimal oral health.",
      img: checkupImg,
    },
  ];

  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            OUR TREATMENTS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Comprehensive Dental Services
          </h2>
          <p className="text-gray-600">
            From routine checkups to complex full-mouth rehabilitations, we offer a complete range
            of dental treatments under one roof.
          </p>
        </div>

        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVars}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all group relative overflow-hidden flex flex-col"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>

              <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
