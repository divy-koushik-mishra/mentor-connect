import {  RiArrowRightDownLine } from "@remixicon/react";
  

const Hero = () => {
  
  return (
    <section data-scroll className="min-h-screen w-full flex flex-col md:justify-between items-center px-4 md:px-0">
      <div className="flex flex-col items-center justify-center w-full md:w-1/2 space-y-7 mb-10 mt-0">
        <h2 className="text-[#AEAEAE] tracking-[0.3rem] uppercase">Expert Guidance</h2>
        <h2 className="md:text-5xl text-4xl text-center">
        Unlock Your Future with Expert Guidance
        </h2>
        <p className="text-center text-[#AEAEAE] px-2">
        Whether you&apos;re preparing for placements, pursuing higher education, or navigating career options, our platform connects you with the right mentors to guide you at every step.
        </p>
        <a href="#faq">

        <button className="border flex  items-center justify-between space-x-5 px-9 py-2 border-[#AEAEAE] hover:bg-[#c7c7c7] hover:text-black transition rounded-full">
          Get Started <RiArrowRightDownLine />{" "}
        </button>
        </a>
        {/* <button className="border flex  items-center justify-between space-x-5 px-9 py-2 border-[#AEAEAE] hover:bg-[#c7c7c7] hover:text-black transition rounded-full">
          Explore More <RiArrowRightUpLine />{" "}
        </button> */}
      </div>

      <div className=" flex justify-center items-center mb-0 my-10">
        <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="shadow-2xl rounded-t-3xl max-w-4xl" />
        {/* <img src="/hero-image.png" className="shadow-2xl rounded-t-3xl" /> */}
      </div>
    </section>
  );
};

export default Hero;
