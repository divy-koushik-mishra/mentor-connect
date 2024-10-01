import AboutSection from "@/components/AboutSection";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import Hero from "@/components/Hero";
// import OrganizationSection from "@/components/OrganizationSection";
import Sessions from "@/components/Sessions";

export default function Home() {
  return (
    <div className="">
        <Hero />
      <CtaSection />
      <AboutSection />
      <Sessions />
      {/* <OrganizationSection /> */}
      <FaqSection />
    </div>
  );
}
