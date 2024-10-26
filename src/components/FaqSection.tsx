// import { AccordionContent } from "@radix-ui/react-accordion";
import Link from "next/link";
import { AccordionContent } from "./utils/AccordionContent";
// import { AccordionContent } from "./ui/accordion";
// import { AccordionContent } from "../utils/AccordionContent";

export const FaqSection = () => {
  const faqs = [
    {
      question: "Is there a fee for students to participate in the mentorship program?",
      answer: "No, our mentorship program is completely free for all students. We believe in providing equal opportunities and access to guidance without any cost."
    },
    {
      question: "How are mentors selected for students?",
      answer: "We match students with mentors based on their areas of interest, career goals, and the mentor’s expertise. Our goal is to ensure students get the most relevant advice and guidance."
    },
    {
      question: "Can I request a specific mentor?",
      answer: "While we do our best to match students with suitable mentors, we cannot guarantee specific mentor requests. However, you can mention preferences when filling out the form, and we will try to accommodate them."
    },
    {
      question: "How long does it take to get matched with a mentor?",
      answer: "The matching process typically takes 3-5 business days, depending on the availability of mentors and the specific guidance required."
    }
  ];
  

  return (
    <section id="faq" className="flex min-h-[80vh] md:min-h-[60vh] flex-col md:flex-row p-5 py-10 md:px-24 my-5">
      <div className="md:w-1/2 flex flex-col justify-center md:p-24 items-center md:items-start">
        <h3 className="tracking-widest uppercase text-[#AEAEAE]">FAQ&apos;S</h3>
        <h3 className="md:text-5xl text-3xl text-center md:text-left">Find the answer to your common questions</h3>
       <Link href="/contact">
       <button className="border my-5 flex w-fit items-center justify-between px-9 py-3 border-[#AEAEAE] hover:bg-[#c7c7c7] hover:text-black transition rounded-full">
            Connect with Us
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
      <div className="md:w-1/2 flex flex-col md:p-24 space-y-4">
    
          {faqs.map((faq, index) => (
            <AccordionContent key={index} title={faq.question} content={faq.answer} />
          ))
        }
      </div>
    </section>
  );
};

export default FaqSection;