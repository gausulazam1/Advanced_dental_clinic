import React from "react";
import { Phone, MapPin } from "lucide-react";

export function UtilityBar() {
  return (
    <div className="bg-gradient-to-r from-secondary to-primary text-white py-2 px-4 md:px-6 text-sm font-medium">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <a href="tel:+918092150012" className="flex items-center gap-2 hover:text-white/80 transition-colors">
          <Phone className="w-4 h-4" />
          <span>Emergency Helpline: +91 8092150012</span>
        </a>
        <div className="flex items-center gap-2 text-center sm:text-left hidden sm:flex">
          <MapPin className="w-4 h-4" />
          <span>1st Floor, A Square Complex, Sector 73, Noida</span>
        </div>
      </div>
    </div>
  );
}
