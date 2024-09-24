// import { AccordionContent } from "@radix-ui/react-accordion";
import Link from "next/link";
import { AccordionContent } from "./utils/AccordionContent";
// import { AccordionContent } from "./ui/accordion";
// import { AccordionContent } from "../utils/AccordionContent";

export const FaqSection = () => {
  const faqs = [
    {
      question: "How can my institution organize a workshop with your team?",
      answer: "To organize a workshop, please contact us through our website’s contact form or email us at your-dk@campusofai.in. Provide details about your institution, preferred workshop topics, and potential dates. Our team will get back to you to discuss the specifics and finalize the arrangements."
    },
    {
      question: "What types of workshops do you offer?",
      answer: "We offer a range of workshops focusing on various aspects of programming, software development, and emerging technologies. Our topics include but are not limited to web development, data science, machine learning. We also offer workshops on soft skills and career development. If you have a specific topic in mind, feel free to reach out to us to discuss the possibilities."
    },
    {
      question: "What are the technical requirements for hosting a workshop?",
      answer: "The technical requirements may vary depending on the workshop topic. Generally, we need a classroom or auditorium with internet access, and power outlets. Participants should bring their own laptops. We will provide any additional materials or tools needed for the workshop."
    },
    {
      question: "How far in advance should we book a workshop?",
      answer: "We recommend booking workshops at least 4-6 weeks in advance to ensure availability and adequate preparation time."
    },
    
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
      <div className="md:w-1/2 flex flex-col justify-center md:p-24 space-y-4">
    
          {faqs.map((faq, index) => (
            <AccordionContent key={index} title={faq.question} content={faq.answer} />
          ))
        }
      </div>
    </section>
  );
};

export default FaqSection;