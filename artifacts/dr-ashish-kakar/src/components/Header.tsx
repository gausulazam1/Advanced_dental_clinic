import React from "react";
import { Link, useLocation } from "wouter";
import { ChevronDown } from "lucide-react";

type NavChild = { name: string; href: string; icon?: string };
type NavItem =
  | { name: string; href: string; children?: undefined; columns?: undefined }
  | { name: string; href: string; children: NavChild[]; columns?: 1 | 2 };

const servicesMenu: NavChild[] = [
  { name: "Dental Fillings", href: "/services/dental-fillings", icon: "🛡️" },
  { name: "Root Canal Treatment", href: "/services/root-canal-treatment", icon: "🩻" },
  { name: "Teeth Extraction", href: "/services/teeth-extraction", icon: "🏥" },
  { name: "Braces & Aligners", href: "/services/braces-aligners", icon: "😁" },
  { name: "Dental Implants", href: "/services/dental-implants", icon: "🦷" },
  { name: "Dentures", href: "/services/dentures", icon: "👄" },
  { name: "Teeth Whitening", href: "/services/teeth-whitening", icon: "✨" },
  { name: "Bridges & Crown", href: "/services/bridges-crown", icon: "👑" },
  { name: "TMJ Disorder Relief", href: "/services/tmj-disorder-relief", icon: "🦴" },
  { name: "Preventive Dentistry", href: "/services/preventive-dentistry", icon: "🪥" },
  { name: "Full Mouth Rehabilitation", href: "/services/full-mouth-rehabilitation", icon: "🦷" },
  { name: "Smile Makeover", href: "/services/smile-makeover", icon: "💎" },
  { name: "Gum Disease Treatment", href: "/services/gum-disease-treatment", icon: "🌿" },
  { name: "Dental Clinic in Noida", href: "/services/dental-clinic-noida", icon: "🏥" },
];

const navLinks: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Our Services", href: "/services", children: servicesMenu, columns: 2 },
  {
    name: "Smile Gallery",
    href: "/smile-gallery",
    children: [
      { name: "Clinic Gallery", href: "/clinic-gallery" },
      { name: "Patient Gallery", href: "/patient-gallery" },
    ],
  },
  { name: "Patient Stories", href: "/patient-stories" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact Us", href: "/contact-us" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);
  const [mobileSubOpen, setMobileSubOpen] = React.useState<string | null>(null);
  const [location] = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (item: NavItem) => {
    if (item.children) {
      return item.children.some((c) => c.href === location) || location === item.href;
    }
    return location === item.href;
  };

  return (
    <header
      className={`absolute w-full z-50 transition-all duration-300 ${
        isScrolled ? "fixed top-0 bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-white py-5 relative"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
            AK
          </div>
          <div className="flex flex-col whitespace-nowrap">
            <span className="font-bold text-lg xl:text-xl leading-none text-gray-900">Dr. Ashish Kakar</span>
            <span className="text-[11px] xl:text-xs text-primary font-medium">Advanced Dental Care</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-3 xl:gap-8">
          <ul className="flex items-center gap-4 xl:gap-6 whitespace-nowrap">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="relative"
                onMouseEnter={() => link.children && setOpenDropdown(link.name)}
                onMouseLeave={() => link.children && setOpenDropdown(null)}
              >
                {link.children ? (
                  <button
                    type="button"
                    className={`text-[13px] xl:text-sm font-medium transition-colors flex items-center gap-1 ${
                      isActive(link) ? "text-primary" : "text-gray-600 hover:text-primary"
                    }`}
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={`text-[13px] xl:text-sm font-medium transition-colors ${
                      isActive(link) ? "text-primary" : "text-gray-600 hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}

                {link.children && openDropdown === link.name && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50">
                    <div
                      className={`bg-white rounded-2xl shadow-xl border border-gray-100 py-3 ${
                        link.columns === 2
                          ? "grid grid-cols-2 gap-x-2 min-w-[480px]"
                          : "min-w-[220px]"
                      }`}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className={`flex items-center gap-3 px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap rounded-lg mx-1 ${
                            location === child.href
                              ? "text-primary bg-primary/5"
                              : "text-gray-700 hover:text-primary hover:bg-gray-50"
                          }`}
                        >
                          {child.icon && (
                            <span className="text-base w-6 h-6 flex items-center justify-center shrink-0">
                              {child.icon}
                            </span>
                          )}
                          <span>{child.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <Link
            href="/contact-us"
            className="bg-accent hover:bg-accent/90 text-white px-4 xl:px-6 py-2.5 rounded-full text-[13px] xl:text-sm font-medium transition-all shadow-sm hover:shadow whitespace-nowrap"
          >
            Book Appointment
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-gray-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg py-4 px-4 flex flex-col gap-2">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.name} className="border-b border-gray-50 last:border-b-0">
                {link.children ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setMobileSubOpen(mobileSubOpen === link.name ? null : link.name)
                      }
                      className={`w-full text-left py-3 font-medium flex items-center justify-between ${
                        isActive(link) ? "text-primary" : "text-gray-800"
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          mobileSubOpen === link.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileSubOpen === link.name && (
                      <div className="pl-2 pb-3 flex flex-col">
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setMobileSubOpen(null);
                            }}
                            className={`flex items-center gap-3 py-2 px-2 text-sm ${
                              location === child.href ? "text-primary font-semibold" : "text-gray-700"
                            }`}
                          >
                            {child.icon && (
                              <span className="w-5 h-5 flex items-center justify-center text-base shrink-0">
                                {child.icon}
                              </span>
                            )}
                            <span>{child.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={`block py-3 font-medium ${
                      isActive(link) ? "text-primary" : "text-gray-800"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <Link
            href="/contact-us"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-accent text-white text-center px-6 py-3 rounded-full font-medium mt-2"
          >
            Book Appointment
          </Link>
        </div>
      )}
    </header>
  );
}
