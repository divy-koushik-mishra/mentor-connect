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
    <section id="faq" className="flex min-h-[80vh] md:min-h-[60vh]  flex-col md:flex-row p-4 py-10 md:px-24">
      <div className="md:w-1/2 flex flex-col justify-center md:p-24 space-y-4 items-center md:items-start">
        <h3 className="tracking-widest uppercase text-[#AEAEAE]">FAQ&apos;S</h3>
        <h3 className="md:text-5xl text-4xl text-center md:text-left">Find the answer to your common questions</h3>
       <Link href="/contact">
        <button className="border w-fit flex  items-center justify-between space-x-5 px-9 py-2 border-[#AEAEAE] hover:bg-[#c7c7c7] hover:text-black transition rounded-full">
          Connect With Us
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