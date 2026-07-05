import React from "react";
import { motion } from "framer-motion";
import { PageBanner } from "../components/PageBanner";
import { useSEO } from "../hooks/use-seo";
import { Award, GraduationCap, Users, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import clinicImg from "../assets/images/clinic.webp";
import doctorImg from "../assets/images/doctor.webp";

export function AboutUs() {
  useSEO({
    title: "About Us | Dr. Ashish Kakar Dental Clinic Noida",
    description: "Learn about Dr. Ashish Kakar and our mission to provide the best dental care in Noida."
  });

  return (
    <div className="bg-white">
      <PageBanner title="About Us" breadcrumb="About Us" />
      
      {/* Clinic Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-xl aspect-square bg-gray-100"
            >
              <img 
                src={clinicImg} 
                alt="Dr. Ashish Kakar Dental Clinic" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <span className="text-primary font-bold uppercase tracking-wider text-sm">OUR STORY</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Setting the Standard for Dental Excellence in Noida</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                For over two decades, Dr. Ashish Kakar Dental Clinic has been synonymous with premium, painless, and precise dental care. Our facility in Sector 73, Noida, is designed to offer a calming environment equipped with the world's most advanced dental technology.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe that every smile tells a story. Our multidisciplinary team of experts ensures that your treatment is personalized, whether it is a routine checkup or a complex full-mouth rehabilitation.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-4">
                <div className="flex flex-col gap-2">
                  <h4 className="text-4xl font-bold text-primary">20+</h4>
                  <span className="text-gray-600 font-medium">Years Experience</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-4xl font-bold text-accent">15k+</h4>
                  <span className="text-gray-600 font-medium">Happy Smiles</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Bio */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-2 flex flex-col gap-6">
              <span className="text-primary font-bold uppercase tracking-wider text-sm">MEET THE FOUNDER</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Dr. Ashish Kakar</h2>
              <h3 className="text-xl text-gray-600 font-medium">BDS, MDS (Prosthodontics) • Implantologist</h3>
              
              <p className="text-gray-600 leading-relaxed">
                Dr. Ashish Kakar is a visionary in the field of modern dentistry. With advanced training in oral implantology and cosmetic dentistry, he has transformed thousands of smiles. His meticulous attention to detail and patient-first approach have made him one of the most trusted dentists in the Delhi NCR region.
              </p>
              
              <ul className="space-y-4 mt-4">
                <li className="flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  <span className="text-gray-700 font-medium">Master of Dental Surgery (MDS)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-primary" />
                  <span className="text-gray-700 font-medium">Fellow, International Congress of Oral Implantologists</span>
                </li>
                <li className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-primary" />
                  <span className="text-gray-700 font-medium">Life Member, Indian Dental Association</span>
                </li>
              </ul>
            </div>
            
            <div className="md:col-span-1">
              <div className="rounded-3xl overflow-hidden shadow-xl aspect-[3/4] bg-gray-200">
                <img 
                  src={doctorImg} 
                  alt="Dr. Ashish Kakar" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">To deliver world-class, ethical, and painless dental care that enhances the quality of life for our patients.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">To be the most trusted and technologically advanced dental healthcare provider in India.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technology</h3>
              <p className="text-gray-600">We employ 3D scanning, digital impressions, and laser dentistry for absolute precision and comfort.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for a Brighter Smile?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-lg">
            Experience the difference of truly personalized, advanced dental care. Schedule your consultation with Dr. Ashish Kakar today.
          </p>
          <Link href="/contact-us" className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg hover:shadow-xl">
            Book an Appointment
          </Link>
        </div>
      </section>

    </div>
  );
}
