import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Sharma",
      role: "Business Owner",
      text: "Dr. Kakar is brilliant. I was terrified of dentists, but he made my root canal completely painless. The clinic is incredibly clean and modern.",
      rating: 5,
      initials: "RS",
      color: "bg-blue-100 text-blue-700"
    },
    {
      name: "Priya Patel",
      role: "Teacher",
      text: "Got my Invisalign treatment done here. The results are amazing, and the staff was so supportive throughout the 8-month journey. Highly recommend!",
      rating: 5,
      initials: "PP",
      color: "bg-pink-100 text-pink-700"
    },
    {
      name: "Amit Kumar",
      role: "Software Engineer",
      text: "Very professional setup. They value your time - I have never had to wait more than 5 minutes for my appointment. The implant procedure was flawless.",
      rating: 5,
      initials: "AK",
      color: "bg-green-100 text-green-700"
    }
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">PATIENT STORIES</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">What Our Patients Say</h2>
          <p className="text-gray-600">
            Don't just take our word for it. Read about the experiences of people who trusted us with their smiles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-gray-100" />
              
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-8 relative z-10 italic">
                "{test.text}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${test.color}`}>
                  {test.initials}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{test.name}</h4>
                  <p className="text-sm text-gray-500">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}