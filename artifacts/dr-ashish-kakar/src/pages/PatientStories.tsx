import React from "react";
import { motion } from "framer-motion";
import { PageBanner } from "../components/PageBanner";
import { useSEO } from "../hooks/use-seo";
import { Star, Quote, PlayCircle } from "lucide-react";

import portrait1 from "../assets/images/portrait-1.webp";
import portrait2 from "../assets/images/portrait-2.webp";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    age: 34,
    treatment: "Dental Implants",
    rating: 5,
    text: "Getting implants was a big decision, but Dr. Ashish made it completely painless. The advanced 3D scanning helped me understand the process, and the final results look entirely natural. I can finally smile with confidence again.",
    avatar: portrait1
  },
  {
    id: 2,
    name: "Rahul Verma",
    age: 28,
    treatment: "Clear Aligners",
    rating: 5,
    text: "I was hesitant about getting braces at my age. The clear aligners recommended by the clinic were perfect. The staff is highly professional, and the clinic's hygiene standards are exceptional.",
    avatar: portrait2
  },
  {
    id: 3,
    name: "Anita Desai",
    age: 45,
    treatment: "Root Canal Treatment",
    rating: 5,
    text: "I had severe pain and dreaded the root canal. Surprisingly, it was a smooth, painless experience. The technology they use is top-notch, and Dr. Kakar is incredibly patient.",
    avatar: portrait1
  },
  {
    id: 4,
    name: "Vikram Singh",
    age: 52,
    treatment: "Full Mouth Rehabilitation",
    rating: 5,
    text: "A life-changing experience. After years of dental issues, the full mouth rehabilitation restored not just my teeth but my overall health. The team's expertise is unmatched in Noida.",
    avatar: portrait2
  },
  {
    id: 5,
    name: "Neha Gupta",
    age: 29,
    treatment: "Teeth Whitening",
    rating: 5,
    text: "Got laser whitening done before my wedding. The results were instant and stunning! The clinic ambiance is so calming, it doesn't feel like a typical hospital.",
    avatar: portrait1
  },
  {
    id: 6,
    name: "Sanjay Kapoor",
    age: 41,
    treatment: "Porcelain Veneers",
    rating: 5,
    text: "My chipped front teeth were always a source of embarrassment. The veneers look so perfect and natural. Thank you to the entire team for their meticulous work.",
    avatar: portrait2
  },
  {
    id: 7,
    name: "Meera Reddy",
    age: 36,
    treatment: "Dental Crowns",
    rating: 5,
    text: "The precision with which my crown was fitted was amazing. No discomfort, no multiple visits. The digital impression technology they use is fantastic.",
    avatar: portrait1
  },
  {
    id: 8,
    name: "Arun Patel",
    age: 60,
    treatment: "Dentures",
    rating: 4,
    text: "Very satisfied with my new dentures. The fit is perfect and comfortable. The doctors take time to explain everything and ensure you are happy with the results.",
    avatar: portrait2
  }
];

export function PatientStories() {
  useSEO({
    title: "Patient Stories | Dr. Ashish Kakar Dental Clinic",
    description: "Read reviews and testimonials from our happy patients. See why we are the preferred dental clinic in Noida."
  });

  return (
    <div className="bg-white min-h-screen pb-20">
      <PageBanner title="Patient Stories" breadcrumb="Patient Stories" />
      
      {/* Featured Story */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-primary/10 relative overflow-hidden">
            <Quote className="absolute top-8 right-8 w-32 h-32 text-primary/5 rotate-180" />
            <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
              <div>
                <span className="text-accent font-bold uppercase tracking-wider text-sm mb-4 block">Featured Story</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">"They gave me my confidence back."</h2>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                  "I had avoided the dentist for years due to a bad childhood experience. By the time I came to Dr. Ashish, I needed extensive work including multiple implants. His calming demeanor, the painless procedures, and the incredible final result completely changed my view on dentistry. I can eat, speak, and smile with absolute confidence now."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                    <img src={portrait1} alt="Priya Sharma" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Priya Sharma</h4>
                    <p className="text-gray-500">Full Mouth Rehabilitation • Age 45</p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg group cursor-pointer">
                <img src={portrait1} alt="Patient Video Placeholder" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-colors group-hover:bg-black/50">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white shadow-xl transform transition-transform group-hover:scale-110">
                    <PlayCircle className="w-10 h-10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Video Testimonials</h2>
            <p className="text-gray-600">Hear directly from our patients about their experiences.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-100 rounded-3xl overflow-hidden aspect-video relative group cursor-pointer shadow-md hover:shadow-xl transition-all">
                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                  <span className="text-gray-400">Video {i}</span>
                </div>
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-colors group-hover:bg-black/40">
                  <PlayCircle className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-110 duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">More Patient Reviews</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col h-full"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < testimonial.rating ? "fill-accent text-accent" : "fill-gray-200 text-gray-200"}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-1 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-50">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/10 shrink-0">
                    {testimonial.avatar ? (
                      <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-bold text-primary">
                        {testimonial.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500">{testimonial.treatment}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
