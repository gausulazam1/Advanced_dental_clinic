import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import doctorImg from "../assets/images/doctor.webp";

export function About() {
  const credentials = [
    "BDS, MDS - Advanced Prosthodontics",
    "Member, Indian Dental Association (IDA)",
    "Fellow, International Congress of Oral Implantologists",
    "20+ Years of Clinical Experience",
    "Specialist in Painless Root Canals",
    "Pioneer in Cosmetic Dentistry"
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={doctorImg} 
                alt="Dr. Ashish Kakar" 
                className="w-full h-auto aspect-[3/4] object-cover"
              />
            </div>
            {/* Decor element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full -z-10"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/20 rounded-full -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 order-1 lg:order-2"
          >
            <div>
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">MEET THE DOCTOR</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Dr. Ashish Kakar</h2>
              <p className="text-accent font-medium mt-1">Senior Dental Surgeon & Implantologist</p>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                With over two decades of dedicated practice, Dr. Ashish Kakar is recognized as one of New Delhi's premier dental specialists. His commitment to bringing world-class dental care to his patients has made the clinic a center of excellence.
              </p>
              <p>
                Dr. Kakar believes in a patient-first approach, combining advanced technology with compassionate care. Whether it's a routine checkup or a complex full-mouth rehabilitation, his meticulous attention to detail ensures superior outcomes and lasting smiles.
              </p>
            </div>

            <ul className="grid sm:grid-cols-2 gap-3 mt-4">
              {credentials.map((cred, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-gray-700">{cred}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-gray-200 mt-2">
              <img src="/signature-placeholder.png" alt="Signature" className="h-12 opacity-50" onError={(e) => e.currentTarget.style.display = 'none'} />
              <p className="font-bold text-gray-900 mt-2">Dr. Ashish Kakar</p>
              <p className="text-sm text-gray-500">Founder & Principal Dentist</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}