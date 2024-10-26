"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  review: string;
}

interface TestimonialCardProps {
  name: string;
  role: string;
  review: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  review,
}) => (
  <div className="bg-white shadow-lg p-6 flex flex-col h-full rounded-xl">
    <div className="flex items-center mb-4">
      {/* <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" /> */}
      <div>
        <h4 className="font-semibold text-lg">{name}</h4>
        <p className="text-gray-600 text-sm">{role}</p>
      </div>
    </div>
    <p className="text-gray-700 mb-4 flex-grow">{review}</p>
    {/* <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
          }`}
        />
      ))}
    </div> */}
  </div>
);

const TestimonialSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
        name: "Rohit Sharma",
        role: "B.Tech Student, Computer Science",
        review:
          "The mentorship program gave me the confidence to apply for internships. The mock interviews and resume guidance were a huge help!",
      },
      {
        name: "Anjali Verma",
        role: "MBA Student, Marketing",
        review:
          "The guidance I received from my mentor was exceptional. It helped me navigate through the career choices I had and land a great opportunity.",
      },
      {
        name: "Vikram Singh",
        role: "B.Sc Student, Physics",
        review:
          "My mentor’s advice and suggestions were instrumental in helping me secure my research internship. Highly recommend this program.",
        
      },
      {
        name: "Sakshi Mehra",
        role: "B.Com Student, Finance",
        review:
          "This mentorship program really helped me understand how to build my career. My mentor was always available for questions and gave practical advice.",
      },
    ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const cardsToShow = isMobile ? 1 : 2;
  const totalSlides = Math.ceil(testimonials.length / cardsToShow);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart && touchEnd) {
      const distance = touchStart - touchEnd;

      if (distance > 50) {
        nextSlide(); // Swipe left, go to the next slide
      }

      if (distance < -50) {
        prevSlide(); // Swipe right, go to the previous slide
      }
    }

    // Reset touch positions
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-4">
          What Our Mentees Say
        </h2>
        <p className="text-gray-600 text-center mb-12 md:w-2/3 mx-auto">
          Hear from our mentees about their experiences and how our mentorship
          program has impacted their careers.
        </p>
        <div className="relative">
          <div className="overflow-hidden" onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd} >
            <div
              className="flex transition-transform duration-300 ease-in-out"
              ref={containerRef}
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / cardsToShow)
                }%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`w-full flex-shrink-0 ${
                    isMobile ? "" : "md:w-1/2"
                  } p-4`}
                >
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <div className="flex justify-center mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full mx-2 ${
                currentIndex === index ? 'bg-[#2B2B2B]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
