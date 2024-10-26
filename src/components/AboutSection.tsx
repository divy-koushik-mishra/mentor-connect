import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="min-h-screen md:min-h-[60vh]  flex flex-col-reverse md:flex-row items-center justify-center p-5 md:pt-24 mt-5">
      <div className="md:w-1/2 w-full flex justify-center mt-5 md:px-24">
        <Image height={376} width={564} src="/about-us.jpg" alt="" className="rounded-3xl w-full" />
      </div>
      <div className="md:w-1/2">
        <div className="flex flex-col justify-between items-center md:items-start md:w-3/4 space-y-5">
          <h3 className="text-[#AEAEAE] uppercase tracking-[0.3rem]  my-5 text-center md:text-left">
            Next Gen Guidance
          </h3>
          <h2 className="md:text-5xl text-4xl text-center md:text-left">Our Mission: Empowering Your Journey</h2>
          <p className="text-[#AEAEAE] text-center md:text-left">
          We believe every student deserves access to the best guidance. Our platform connects you with experienced mentors to help you make informed decisions about placements, higher studies, and beyond—completely free of cost.
          </p>
          <Link href="/contact">
          
          <button className="bg-[#2B2B2B] my-5  rounded-full px-9 py-3 md:py-5 text-white ">
          Connect Now!
        </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
