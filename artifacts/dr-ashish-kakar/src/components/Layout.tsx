import React, { useEffect } from "react";
import { Link, useLocation } from "wouter";
import { UtilityBar } from "./UtilityBar";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-50">
        <UtilityBar />
        <Header />
      </div>
      <main className="flex-1 pt-[120px]">
        {children}
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
