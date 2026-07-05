import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How often should I visit the dentist?",
      a: "We recommend visiting the dentist every 6 months for a routine checkup and professional cleaning. However, if you have specific dental issues, we might suggest more frequent visits."
    },
    {
      q: "Is a root canal painful?",
      a: "With modern anesthetics and our advanced techniques, a root canal is no more painful than getting a regular filling. Most patients report feeling immediate relief from the toothache they had prior to the procedure."
    },
    {
      q: "Do you offer invisible braces?",
      a: "Yes, we specialize in clear aligners (like Invisalign). They are virtually invisible, comfortable, and removable, making them a popular choice for both adults and teens."
    },
    {
      q: "How long do dental implants last?",
      a: "With proper care and good oral hygiene, dental implants can last a lifetime. The crown placed on top of the implant usually lasts 10-15 years before needing replacement."
    },
    {
      q: "What should I do in a dental emergency?",
      a: "Call our clinic immediately. We keep specific time slots open every day for emergencies like severe pain, knocked-out teeth, or broken restorations."
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <div>
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 mb-8">
              Find answers to common questions about our dental services, procedures, and clinic policies.
            </p>
            
            <div className="bg-primary/10 rounded-2xl p-8 border border-primary/20">
              <h3 className="font-bold text-gray-900 mb-2">Still have questions?</h3>
              <p className="text-gray-600 text-sm mb-6">Our friendly staff is here to help you understand your treatment options.</p>
              <a href="tel:+919810000000" className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors w-full sm:w-auto">
                Call Us Now
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <span className="font-semibold text-gray-900">{faq.q}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 shrink-0 ${openIndex === idx ? "rotate-180" : ""}`} 
                  />
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-gray-600 border-t border-gray-50 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}