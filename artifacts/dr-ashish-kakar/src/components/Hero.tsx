import React from "react";
import { motion } from "framer-motion";
import { Phone, Calendar, Star } from "lucide-react";
import heroImg from "../assets/images/hero.webp";

export function Hero() {
  return (
    <section id="home" className="relative pt-12 pb-16 md:pt-20 md:pb-24 lg:pt-28 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full w-max text-sm font-medium">
              <Star className="w-4 h-4 fill-primary" />
              <span>Noida's Trusted Dental Care</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Premium Dental Care You Can <span className="text-primary">Trust</span>.
            </h1>
            
            <p className="text-base md:text-lg text-gray-600 max-w-lg">
              Led by Dr. Ashish Kakar with over 20 years of experience, we provide advanced, painless treatments in a state-of-the-art facility. Your perfect smile starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-3.5 rounded-full font-semibold text-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5" />
                Book an Appointment
              </a>
              <a
                href="tel:+918092150012"
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-200 hover:border-primary hover:text-primary text-gray-700 px-8 py-3.5 rounded-full font-semibold text-lg transition-all"
              >
                <Phone className="w-5 h-5" />
                +91 80921 50012
              </a>
            </div>
            
            <div className="flex items-center gap-6 mt-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${i}&backgroundColor=e2e8f0`} alt="Patient" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-accent">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-600 mt-1">10,000+ Happy Patients</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-square">
              <img
                src={heroImg}
                alt="Modern Dental Clinic with Doctor and Patient"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 max-w-xs"
            >
              <div className="bg-green-100 p-3 rounded-full text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-gray-900">20+ Years</p>
                <p className="text-sm text-gray-500">Clinical Excellence</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}