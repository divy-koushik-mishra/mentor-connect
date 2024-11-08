import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <section
      data-scroll
      className="w-full flex flex-col pt-10 items-center px-5 md:px-0 hero-bg border"
    >
      <div className="w-full max-w-7xl flex flex-col items-center">
        <div className="w-full flex justify-center">
          <Image
            src="/logo.png"
            alt="Company Logo"
            width={200}
            height={60}
            className="w-60 h-auto mb-4"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full md:w-2/3 lg:w-1/2 space-y-7 mb-10 mt-0">
          <h2 className="text-[#AEAEAE] tracking-[0.3rem] uppercase text-sm md:text-base">
            Expert Guidance
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold">
            Unlock Your Future with Expert Guidance
          </h2>
          <p className="text-center text-[#AEAEAE] text-sm md:text-base">
            Launched by <strong>IIT alumni</strong>, our platform is designed to{" "}
            <strong>connect freshers with mentors</strong> who are already
            excelling in their respective fields—whether it&apos;s UI/UX, coding,
            higher studies, entrepreneurship, or beyond. Gain insights and
            guidance directly from industry professionals to kickstart your
            journey with confidence.
          </p>

          <div className="w-full flex justify-center">
            <Link href="/contact">
              <button className="border flex items-center justify-between px-6 md:px-9 py-2 md:py-3 border-[#AEAEAE] hover:bg-[#c7c7c7] hover:text-black transition rounded-full text-sm md:text-base">
                Connect with Mentor
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 md:w-6 md:h-6 ml-2"
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
      </div>
    </section>
  )
}