import React from "react";
import { motion } from "framer-motion";
import { Shield, Clock, Heart, Award, Microscope, ThumbsUp } from "lucide-react";
import clinicImg from "../assets/images/clinic.webp";

export function WhyUs() {
  const features = [
    {
      title: "Advanced Technology",
      desc: "State-of-the-art equipment including digital X-rays and 3D imaging.",
      icon: <Microscope className="w-6 h-6" />
    },
    {
      title: "20+ Years Experience",
      desc: "Decades of clinical excellence and successful complex cases.",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Painless Treatments",
      desc: "Specialized in delivering comfortable, anxiety-free dental care.",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Strict Sterilization",
      desc: "100% adherence to international hygiene and sterilization protocols.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "No Waiting Time",
      desc: "Efficient scheduling ensures you are seen exactly at your appointment time.",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Patient Satisfaction",
      desc: "Over 10,000 happy patients trust us with their families' smiles.",
      icon: <ThumbsUp className="w-6 h-6" />
    }
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">WHY CHOOSE US</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">World-Class Dental Care in New Delhi</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We don't just treat teeth; we care for people. Our clinic is designed to provide a relaxing environment where you can feel confident in the expertise of our team.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feat, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-secondary shrink-0">
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{feat.title}</h4>
                    <p className="text-sm text-gray-500 leading-snug">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={clinicImg} 
                alt="Modern Dental Clinic Interior" 
                className="w-full h-auto aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </div>
            
            {/* Overlay card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -left-8 md:-left-12 bg-white p-6 rounded-2xl shadow-xl max-w-[280px]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">10k+</div>
                  <div className="text-sm text-gray-500 font-medium">Smiles Restored</div>
                </div>
              </div>
              <p className="text-sm text-gray-600">Join our family of happy patients experiencing painless dentistry.</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}