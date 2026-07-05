import React from "react";
import { PageBanner } from "../components/PageBanner";
import { useSEO } from "../hooks/use-seo";
import { Link } from "wouter";
import { motion } from "framer-motion";

import implantsImg from "../assets/services/service-dental-implants.webp";
import rctImg from "../assets/services/service-root-canal.webp";
import bracesImg from "../assets/services/service-braces-aligners.webp";
import whiteningImg from "../assets/services/service-teeth-whitening.webp";
import crownsImg from "../assets/services/service-bridges-crowns.webp";
import fillingsImg from "../assets/services/service-dental-fillings.webp";
import extractionImg from "../assets/services/service-teeth-extraction.webp";
import denturesImg from "../assets/services/service-dentures.webp";
import tmjImg from "../assets/services/service-tmj.webp";
import preventiveImg from "../assets/services/service-preventive.webp";
import fullMouthImg from "../assets/services/service-full-mouth-rehab.webp";
import smileMakeoverImg from "../assets/services/service-smile-makeover.webp";
import gumImg from "../assets/services/service-gum-disease.webp";
import clinicImg from "../assets/images/clinic.webp";

export const servicesData = [
  {
    id: "dental-implants",
    title: "Dental Implants",
    shortDesc: "Permanent, natural-looking replacements for missing teeth.",
    icon: "",
    image: implantsImg,
  },
  {
    id: "root-canal-treatment",
    title: "Root Canal Treatment",
    shortDesc: "Painless procedure to save severely decayed or infected teeth.",
    icon: "",
    image: rctImg,
  },
  {
    id: "braces-aligners",
    title: "Braces & Aligners",
    shortDesc: "Straighten your teeth invisibly with modern clear aligners.",
    icon: "",
    image: bracesImg,
  },
  {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    shortDesc: "Professional bleaching for a instantly brighter, whiter smile.",
    icon: "",
    image: whiteningImg,
  },
  {
    id: "bridges-crown",
    title: "Bridges & Crowns",
    shortDesc: "Restore damaged teeth and bridge the gaps with custom crowns.",
    icon: "",
    image: crownsImg,
  },
  {
    id: "dental-fillings",
    title: "Dental Fillings",
    shortDesc: "Tooth-colored composite fillings to treat cavities seamlessly.",
    icon: "",
    image: fillingsImg,
  },
  {
    id: "teeth-extraction",
    title: "Teeth Extraction",
    shortDesc: "Safe and painless removal of problematic or wisdom teeth.",
    icon: "",
    image: extractionImg,
  },
  {
    id: "dentures",
    title: "Dentures",
    shortDesc: "Custom-fitted removable replacements for missing teeth.",
    icon: "",
    image: denturesImg,
  },
  {
    id: "tmj-disorder-relief",
    title: "TMJ Disorder Relief",
    shortDesc: "Diagnosis and treatment for jaw pain and TMJ-related discomfort.",
    icon: "",
    image: tmjImg,
  },
  {
    id: "preventive-dentistry",
    title: "Preventive Dentistry",
    shortDesc: "Cleanings, sealants and check-ups to keep your smile healthy.",
    icon: "",
    image: preventiveImg,
  },
  {
    id: "full-mouth-rehabilitation",
    title: "Full Mouth Rehabilitation",
    shortDesc: "Complete restoration of function and aesthetics across all teeth.",
    icon: "",
    image: fullMouthImg,
  },
  {
    id: "smile-makeover",
    title: "Smile Makeover",
    shortDesc: "Personalised cosmetic treatments to design your dream smile.",
    icon: "",
    image: smileMakeoverImg,
  },
  {
    id: "gum-disease-treatment",
    title: "Gum Disease Treatment",
    shortDesc: "Periodontal therapy to restore healthy, infection-free gums.",
    icon: "",
    image: gumImg,
  },
  {
    id: "dental-clinic-noida",
    title: "Dental Clinic in Noida",
    shortDesc: "Visit our state-of-the-art dental clinic at Sector 73, Noida.",
    icon: "",
    image: clinicImg,
  },
];

export function ServicesIndex() {
  useSEO({
    title: "Our Services | Dr. Ashish Kakar Dental Clinic Noida",
    description:
      "Explore our comprehensive range of advanced dental treatments including implants, root canals, aligners, and more.",
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageBanner title="Our Services" breadcrumb="Services" />

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Dental Care
            </h2>
            <p className="text-gray-600 text-lg">
              From routine checkups to full mouth rehabilitation, we offer state-of-the-art dental
              treatments tailored to your unique needs under one roof.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {servicesData.map((service, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                key={service.id}
              >
                <Link href={`/services/${service.id}`} className="block h-full group">
                  <div className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 h-full flex flex-col overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 w-12 h-12 bg-white/95 backdrop-blur rounded-full flex items-center justify-center text-2xl shadow-md">
                        {service.icon}
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6 flex-1">{service.shortDesc}</p>
                      <span className="text-primary font-bold text-sm inline-flex items-center gap-2 mt-auto">
                        Learn More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
