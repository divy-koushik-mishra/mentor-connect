import AboutSection from "@/components/AboutSection";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OrganizationSection from "@/components/OrganizationSection";
import Sessions from "@/components/Sessions";

export default function Home() {
  return (
    <div className="">
        <Navbar />
        <Hero />
      <CtaSection />
      <AboutSection />
      <Sessions />
      <OrganizationSection />
      <FaqSection />
      <Footer />
    </div>
  );
}
