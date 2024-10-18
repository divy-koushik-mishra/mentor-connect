'use client';
import React, { useState, useEffect, useRef } from 'react';
import MentorCard from './Card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Mentor {
  name: string;
  profession: string;
  experience: number;
  description: string;
  image?: string;
}

const Sessions: React.FC = () => {
  const mentors: Mentor[] = [
    {
      name: 'Saksham Saxena',
      profession: 'Product Designer',
      experience: 5,
      description:
        'Hi! I am a Product Designer currently based in Seattle, Washington, United States. I have been actively involved in digital product design since 2019 across a range of domains, including web experiences, fintech, productivity, wearables, and IoT. I have previously worked at Adyen, Amsterdam and Microsoft, India. I enjoy working at the crossroads of psychology, technology, and creativity.',
      image: 'https://media.licdn.com/dms/image/v2/C5103AQF291ROcWTnYQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1563447351526?e=1734566400&v=beta&t=VzNJbzQcnECPCAddAbbfCYk6ZR2AJVN7GtuugwKuods',
    },
    {
      name: 'Shaurya Jindal',
      profession: 'Associate Consultant',
      experience: 7,
      description: 'Hi! I am a Product Designer currently based in Seattle, Washington, United States. I have been actively involved in digital product design since 2019 across a range of domains, including web experiences, fintech, productivity, wearables, and IoT. I have previously worked at Adyen, Amsterdam and Microsoft, India. I enjoy working at the crossroads of psychology, technology, and creativity.',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQGYzNgysjhJqg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1695031932874?e=1734566400&v=beta&t=L8vjKNFbsiBPkc0rz87E9c5foxPaKv8-2YT99sj2aHk',
    },
    {
      name: 'Saksham Saxena',
      profession: 'Product Designer',
      experience: 5,
      description:
        'Hi! I am a Product Designer currently based in Seattle, Washington, United States. I have been actively involved in digital product design since 2019 across a range of domains, including web experiences, fintech, productivity, wearables, and IoT. I have previously worked at Adyen, Amsterdam and Microsoft, India. I enjoy working at the crossroads of psychology, technology, and creativity.',
      image: 'https://media.licdn.com/dms/image/v2/C5103AQF291ROcWTnYQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1563447351526?e=1734566400&v=beta&t=VzNJbzQcnECPCAddAbbfCYk6ZR2AJVN7GtuugwKuods',
    },
    {
      name: 'Shaurya Jindal',
      profession: 'Associate Consultant',
      experience: 7,
      description: 'Hi! I am a Product Designer currently based in Seattle, Washington, United States. I have been actively involved in digital product design since 2019 across a range of domains, including web experiences, fintech, productivity, wearables, and IoT. I have previously worked at Adyen, Amsterdam and Microsoft, India. I enjoy working at the crossroads of psychology, technology, and creativity.',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQGYzNgysjhJqg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1695031932874?e=1734566400&v=beta&t=L8vjKNFbsiBPkc0rz87E9c5foxPaKv8-2YT99sj2aHk',
    },
    // Add more mentor objects here to test scrolling
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
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const cardsToShow = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(mentors.length / cardsToShow);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
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
    <section
      data-scroll
      data-scroll-speed="0.8"
      className="p-4 min-h-screen md:min-h-[60vh] flex flex-col items-center md:py-24 my-10"
    >
      <h3 className="uppercase tracking-[0.3rem] text-[#AEAEAE] mb-2">SESSIONS</h3>
      <h2 className="md:text-5xl text-4xl text-center md:text-left mb-4">Meet Our Mentors</h2>
      <p className="text-[#AEAEAE] text-center md:w-2/3 mb-10">
        Get direct, one-on-one mentorship with experienced professionals. Discuss your queries about
        placements, higher studies, and career paths in live, personalized sessions.
      </p>
      <div className="w-full max-w-6xl relative">
        <div
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            ref={containerRef}
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {mentors.map((mentor, index) => (
              <div key={index} className={`w-full flex-shrink-0 ${isMobile ? '' : 'md:w-1/3'} p-2 py-4`}>
                <MentorCard {...mentor} />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full mx-1 ${
                currentIndex === index ? 'bg-[#2B2B2B]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sessions;
