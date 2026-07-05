import React from "react";
import { useParams, Link } from "wouter";
import { PageBanner } from "../components/PageBanner";
import { useSEO } from "../hooks/use-seo";
import { servicesData } from "./ServicesIndex";
import NotFound from "./not-found";
import { CheckCircle2 } from "lucide-react";

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find(s => s.id === slug);

  if (!service) {
    return <NotFound />;
  }

  useSEO({
    title: `${service.title} | Dr. Ashish Kakar Dental Clinic`,
    description: `Learn all about our ${service.title} treatments at Dr. Ashish Kakar Dental Clinic in Noida.`
  });

  return (
    <div className="bg-white">
      <PageBanner title={service.title} breadcrumb={`Services / ${service.title}`} />
      
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 flex flex-col gap-10">
              <div className="rounded-3xl overflow-hidden aspect-[21/9] bg-gray-100 border border-gray-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What is {service.title}?</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  {service.title} is an advanced dental procedure that helps restore the function and aesthetics of your smile. At our clinic, we use the latest technology and techniques to ensure this treatment is virtually painless, highly effective, and long-lasting.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Every patient is unique, which is why Dr. Ashish Kakar carefully evaluates your oral health before recommending the best course of action.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Restores natural function and aesthetics",
                    "Prevents further dental complications",
                    "Long-lasting and durable results",
                    "Boosts confidence and self-esteem",
                    "Minimally invasive with modern tech",
                    "Customized to your unique smile"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-2xl">
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                      <span className="text-gray-800 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Procedure</h3>
                <ol className="relative border-l border-primary/30 ml-3 space-y-6">
                  <li className="pl-6 relative">
                    <span className="absolute w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold -left-3 top-0 ring-4 ring-white">1</span>
                    <h4 className="font-bold text-gray-900 mb-1">Consultation & Planning</h4>
                    <p className="text-gray-600 text-sm">Comprehensive examination using 3D imaging to plan the exact treatment.</p>
                  </li>
                  <li className="pl-6 relative">
                    <span className="absolute w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold -left-3 top-0 ring-4 ring-white">2</span>
                    <h4 className="font-bold text-gray-900 mb-1">Preparation</h4>
                    <p className="text-gray-600 text-sm">Preparing the site with local anesthesia to ensure a painless experience.</p>
                  </li>
                  <li className="pl-6 relative">
                    <span className="absolute w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold -left-3 top-0 ring-4 ring-white">3</span>
                    <h4 className="font-bold text-gray-900 mb-1">Execution</h4>
                    <p className="text-gray-600 text-sm">Performing the actual procedure with precision and care.</p>
                  </li>
                  <li className="pl-6 relative">
                    <span className="absolute w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold -left-3 top-0 ring-4 ring-white">4</span>
                    <h4 className="font-bold text-gray-900 mb-1">Aftercare</h4>
                    <p className="text-gray-600 text-sm">Detailed instructions for a swift and smooth recovery.</p>
                  </li>
                </ol>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 flex flex-col gap-8">
                
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Book This Treatment</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Get in touch with our experts to schedule your consultation for {service.title}.
                  </p>
                  <Link href="/contact-us" className="block w-full bg-accent hover:bg-accent/90 text-white text-center py-4 rounded-xl font-bold transition-all shadow-md">
                    Schedule Consultation
                  </Link>
                  <a href="tel:+918092150012" className="block w-full mt-3 bg-white border border-primary text-primary hover:bg-primary hover:text-white text-center py-3.5 rounded-xl font-bold transition-all">
                    Call +91 80921 50012
                  </a>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Other Services</h3>
                  <ul className="space-y-3">
                    {servicesData.filter(s => s.id !== slug).slice(0, 5).map(s => (
                      <li key={s.id}>
                        <Link href={`/services/${s.id}`} className="text-gray-600 hover:text-primary font-medium flex items-center justify-between group transition-colors">
                          <span>{s.title}</span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
