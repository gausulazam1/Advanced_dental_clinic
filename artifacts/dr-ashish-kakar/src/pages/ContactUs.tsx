import React from "react";
import { PageBanner } from "../components/PageBanner";
import { useSEO } from "../hooks/use-seo";
import { Contact } from "../components/Contact";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactUs() {
  useSEO({
    title: "Contact Us | Dr. Ashish Kakar Dental Clinic",
    description: "Get in touch with Dr. Ashish Kakar Dental Clinic in Noida. Book an appointment or reach out for inquiries."
  });

  return (
    <div className="bg-white min-h-screen">
      <PageBanner title="Contact Us" breadcrumb="Contact" />
      
      {/* Using the Contact component which handles the form and map beautifully */}
      <div className="pb-10 pt-4">
        <Contact />
      </div>

    </div>
  );
}
