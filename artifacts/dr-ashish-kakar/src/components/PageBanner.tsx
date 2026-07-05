import React from "react";
import { Link } from "wouter";

interface PageBannerProps {
  title: string;
  breadcrumb: string;
}

export function PageBanner({ title, breadcrumb }: PageBannerProps) {
  return (
    <div className="bg-primary/5 py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
        <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="text-gray-400">/</span>
          <span className="text-primary">{breadcrumb}</span>
        </div>
      </div>
    </div>
  );
}
