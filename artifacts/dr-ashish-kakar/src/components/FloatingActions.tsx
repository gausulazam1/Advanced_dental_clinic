import React from "react";
import { Phone, MessageCircle } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 sm:hidden">
      <a 
        href="https://wa.me/918092150012" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      <a 
        href="tel:+918092150012" 
        className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
        aria-label="Call Clinic"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}