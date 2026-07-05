import React from "react";
import { Hero } from "../components/Hero";
import { Stats } from "../components/Stats";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { WhyUs } from "../components/WhyUs";
import { Testimonials } from "../components/Testimonials";
import { FAQ } from "../components/FAQ";
import { Contact } from "../components/Contact";

export function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
