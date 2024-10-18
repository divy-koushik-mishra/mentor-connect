// import Image from "next/image";
  

const Hero = () => {
  
  return (
    <section data-scroll className=" w-full flex flex-col md:justify-between items-center px-5 md:px-0 ">
      <div className="flex flex-col min-h-[70vh] items-center justify-center w-full md:w-1/2 space-y-7 mb-10 mt-0">
        <h2 className="text-[#AEAEAE] tracking-[0.3rem] uppercase">Expert Guidance</h2>
        <h2 className="md:text-5xl text-4xl text-center">
        Unlock Your Future with Expert Guidance
        </h2>
        <p className="text-center text-[#AEAEAE] px-2">
  Launched by <strong>IIT alumni</strong>, our platform is designed to <strong>connect freshers with mentors</strong> who are already excelling in their respective fields—whether it&apos;s UI/UX, coding, higher studies, entrepreneurship, or beyond. Gain insights and guidance directly from industry professionals to kickstart your journey with confidence.
</p>

        {/* <a href="#faq"> */}

        <div className=" w-full flex flex-col md:flex-row justify-center items-center space-y-5 md:space-y-0  md:space-x-5">
        <input
          type="text"
          className="md:w-1/2 w-full px-10 py-3 border md:py-5 rounded-full outline-none"
          placeholder="Email Address..."
        />
        <button className="bg-[#2B2B2B] rounded-full px-9 py-3 md:py-5 text-white ">
          Connect Now!
        </button>
      </div>
      </div>

      {/* <div className="relative flex justify-center items-center mb-0 my-10">
        <Image src="/hero.avif" className="shadow-2xl w-full rounded-t-3xl max-w-4xl" alt="fsda" width={360} height={250}/>
      </div> */}
    </section>
  );
};

export default Hero;
