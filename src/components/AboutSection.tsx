import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="min-h-[80vh] md:min-h-[60vh]  flex flex-col md:flex-row items-center justify-center px-4 py-10 md:py-24">
      <div className="md:w-1/2 w-full flex justify-center md:px-24">
        <img src="/about-cloud.webp" alt="" className="rounded-3xl w-full" />
      </div>
      <div className="md:w-1/2">
        <div className="flex flex-col justify-between items-center md:items-start md:w-3/4 space-y-4">
          <h3 className="text-[#AEAEAE] uppercase tracking-[0.3rem]  my-5 text-center md:text-left">
            Next Gen Guidance
          </h3>
          <h2 className="md:text-5xl text-4xl text-center md:text-left">Our Mission: Empowering Your Journey</h2>
          <p className="text-[#AEAEAE] text-center md:text-left">
          We believe every student deserves access to the best guidance. Our platform connects you with experienced mentors to help you make informed decisions about placements, higher studies, and beyond—completely free of cost.
          </p>
          <Link href="/contact">
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
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
