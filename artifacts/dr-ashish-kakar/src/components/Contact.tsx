import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const service = formData.get("service");
    const date = formData.get("date");
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Option 1: Open WhatsApp
      const text = `Hi, I would like to book an appointment.\nName: ${name}\nPhone: ${phone}\nService: ${service}\nPreferred Date: ${date}`;
      const encodedText = encodeURIComponent(text);
      window.open(`https://wa.me/918092150012?text=${encodedText}`, '_blank');
      
      // Option 2: Show Toast
      toast({
        title: "Appointment Request Sent!",
        description: "We will contact you shortly to confirm your slot.",
      });
      
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-primary/5 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">BOOK APPOINTMENT</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Get in Touch With Us</h2>
          <p className="text-gray-600">
            Ready for a brighter smile? Schedule your visit today or contact us for any inquiries.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          <div className="lg:col-span-1 flex flex-col gap-6">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Clinic Info</h3>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Location</h4>
                    <p className="text-gray-600 mt-1">1st Floor, A Square Complex, Sector 73, Noida, UP 201307</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Phone</h4>
                    <p className="text-gray-600 mt-1">+91 80921 50012</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Email</h4>
                    <p className="text-gray-600 mt-1">contact@drashishkakar.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Working Hours</h4>
                    <p className="text-gray-600 mt-1">Mon–Sun: 11:00 AM – 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xl h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request an Appointment</h3>
              
              <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                  <input required type="text" id="name" name="name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50/50" placeholder="John Doe" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                  <input required type="tel" id="phone" name="phone" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50/50" placeholder="+91 XXXXX XXXXX" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-gray-700">Service Required</label>
                  <select required id="service" name="service" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50/50">
                    <option value="">Select a service</option>
                    <option value="General Checkup">General Checkup</option>
                    <option value="Root Canal">Root Canal Treatment</option>
                    <option value="Dental Implants">Dental Implants</option>
                    <option value="Braces / Aligners">Braces & Aligners</option>
                    <option value="Teeth Whitening">Teeth Whitening</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="date" className="text-sm font-medium text-gray-700">Preferred Date</label>
                  <input required type="date" id="date" name="date" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50/50" />
                </div>
                
                <div className="space-y-2 sm:col-span-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Additional Message (Optional)</label>
                  <textarea id="message" name="message" rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50/50 resize-none" placeholder="Briefly describe your dental issue..."></textarea>
                </div>
                
                <div className="sm:col-span-2 mt-2">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent/90 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending Request..." : "Book via WhatsApp"}
                  </button>
                  <p className="text-center text-xs text-gray-500 mt-4">We'll confirm your exact appointment time via call or message.</p>
                </div>
              </form>
            </div>
          </div>

        </div>
        
        {/* Map iframe */}
        <div className="mt-16 rounded-3xl overflow-hidden shadow-xl border border-gray-100 h-[400px]">
          <iframe 
            src="https://www.google.com/maps?q=A+Square+Complex+Sector+73+Noida&output=embed"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Clinic Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
}