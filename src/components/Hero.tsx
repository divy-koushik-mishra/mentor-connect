// import Image from "next/image";
  

const Hero = () => {
  
  return (
    <section data-scroll className="w-full flex flex-col  justify-center items-center px-5 md:px-0 hero-bg ">
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
        {/* <input
          type="text"
          className="md:w-1/2 w-full px-10 py-3 border md:py-5 rounded-full outline-none"
          placeholder="Email Address..."
        /> */}
        <button className="border flex w-fit items-center justify-between px-9 py-2 border-[#AEAEAE] hover:bg-[#c7c7c7] hover:text-black transition rounded-full">
            Connect with Mentor
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              />
            </svg>
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
