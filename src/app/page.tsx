import AboutSection from "@/components/AboutSection";
// import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import AboutFounder from "@/components/Founder";
import Hero from "@/components/Hero";
// import OrganizationSection from "@/components/OrganizationSection";
import Sessions from "@/components/Sessions";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <div className="">
        <Hero />
      {/* <CtaSection /> */}
      <AboutSection />
      <Sessions />
      <TestimonialSection />
      <AboutFounder />
      {/* <OrganizationSection /> */}
      <FaqSection />
    </div>
  );
}
