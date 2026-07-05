import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-gray-800 pb-12">

          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 inline-flex">
              <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                AK
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-none text-white">Dr. Ashish Kakar</span>
                <span className="text-xs text-primary font-medium">Advanced Dental Care</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Delivering premium, painless dental care in Noida. Your trusted destination for a perfect, healthy smile.
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
                <span>1st Floor, A Square Complex, Sector 73, Noida, UP 201307</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+918092150012" className="hover:text-white transition-colors">+91 80921 50012</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:contact@drashishkakar.com" className="hover:text-white transition-colors">contact@drashishkakar.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary mt-1 shrink-0" />
                <span>Mon-Sun: 11:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about-us" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link href="/clinic-gallery" className="hover:text-primary transition-colors">Clinic Gallery</Link></li>
              <li><Link href="/patient-gallery" className="hover:text-primary transition-colors">Patient Gallery</Link></li>
              <li><Link href="/patient-stories" className="hover:text-primary transition-colors">Patient Stories</Link></li>
              <li><Link href="/blogs" className="hover:text-primary transition-colors">Blogs</Link></li>
              <li><Link href="/contact-us" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services/dental-implants" className="hover:text-primary transition-colors">Dental Implants</Link></li>
              <li><Link href="/services/root-canal-treatment" className="hover:text-primary transition-colors">Root Canal Treatment</Link></li>
              <li><Link href="/services/braces-aligners" className="hover:text-primary transition-colors">Braces & Aligners</Link></li>
              <li><Link href="/services/teeth-whitening" className="hover:text-primary transition-colors">Teeth Whitening</Link></li>
              <li><Link href="/services/bridges-crown" className="hover:text-primary transition-colors">Bridges & Crowns</Link></li>
              <li><Link href="/services/dental-fillings" className="hover:text-primary transition-colors">Dental Fillings</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Find Us</h4>
            <div className="rounded-2xl overflow-hidden border border-gray-800 shadow-lg aspect-square bg-gray-800">
              <iframe
                src="https://www.google.com/maps?q=A+Square+Complex+Sector+73+Noida&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dr. Ashish Kakar Dental Clinic Location"
                allowFullScreen
              />
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=A+Square+Complex+Sector+73+Noida"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:text-white transition-colors"
            >
              <MapPin className="w-4 h-4" /> Get Directions
            </a>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Dr. Ashish Kakar Dental Clinic. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
