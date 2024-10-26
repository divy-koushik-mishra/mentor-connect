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
      name: 'Shubh Gupta',
      profession: 'AI Engineer',
      experience: 2,
      description:
        'Hi! I’m an AI Engineer based in Houston, Texas, United States. I graduated with a degree in Mathematics and Computing from IIT Delhi in 2022. Since then, I’ve worked on a diverse range of projects, including Self-Driving cars, LLMs, Distributed Training, and Agentic workflows for LLMs. Currently, I’m part of the team at ThirdAI, where I design high-throughput and low-latency systems at scale for retrieval-augmented generation (RAG). Additionally, I serve as a Lead Engineer part-time at a stealth startup, focusing on designing scalable search and recommender systems.',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQHIiw6mXJWe7A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719018958103?e=1734566400&v=beta&t=GnkDFZIMuwTn3w19_zUgkzlX9Qfr-SvL6QPp-XlKVEc',
    },
    {
      name: 'Kanishka Manderna',
      profession: 'Operations Manager',
      experience: 4,
      description: 'I am an Operations Manager at ITC Limited, a multinational conglomerate in India, where I manage operations and drive product innovation and launches for Sunbean Coffee and Fabelle Exquisite Chocolates, two of the premium brands of ITC. I have a Bachelor of Technology in Chemical Engineering and a Minor degree in Business Administration and Management from Indian Institute of Technology, Delhi. I did my research entern from ETH Zurich in my 2nd year',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQHFDEI6w5xxGg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719125682986?e=1734566400&v=beta&t=6RurfhtrBidiNcwcp5L52RsAfYERKVE8rqz2AgSyFl4',
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
      name: 'Shorya Jain',
      profession: 'Private Equity Analyst',
      experience: 4,
      description: 'Hi! I am Shorya Jain, a Private Equity Analyst currently based in Mumbai, India. I began my career in strategy consulting before transitioning to private equity, where I have developed expertise in areas such as strategy, post merger integration, and data analysis. I was seconded to Amsterdam to set up cross sell for an IT services portfolio company for 6 months. I enjoy working at the intersection of finance, strategy, and data-driven insights. Outside of work, I spend my time reading, swimming, and playing guitar.',
      image: 'https://media.licdn.com/dms/image/v2/C4E03AQH8oXZ3Wh6Xow/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1623861823485?e=1734566400&v=beta&t=xqDtlZ95RGJe1XiE0obtxeBHWSZwUdU5KUl5HJvBj5c',
    },
    {
      name: 'Valaya Ramchandani',
      profession: 'Quantitative Researcher',
      experience: 4,
      description: 'Hi! I am Valaya Ramchandani, a Quantitative Researcher at JPMC, currently based in Mumbai, India. In my role, I specialize in quantitative analysis within the housing securities sector in the US, focusing on building models for risk assessment, forecasting, and stress testing. My work involves creating robust risk models to help analyze market trends and evaluate potential impacts on housing securities portfolios. Outside of work, I enjoy painting, playing guitar, and hiking.',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQH6oFleXJgX_A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1679672645762?e=1734566400&v=beta&t=_q90yuTpN6UtzbiuzDdcDH2mVGMD95jb2GNegibSLH0',
    },
    {
      name: 'Raghav Chaturvedi',
      profession: 'Quantitative Researcher',
      experience: 4,
      description: 'Hi! I’m a graduate student in applied physics at Cornell University. My research falls broadly in the regime of experimental condensed matter physics. I use the platform of van der Waals materials to discover, manipulate, and probe novel quantum states of matter. So far in my PhD, I’ve employed advanced quantum transport and optical techniques to study the physics of exciton condensation, Bose-Fermi mixtures and strongly correlated electronic phases in moire materials down to milliKelvin temperatures. Before this, I completed my bachelors degree in engineering physics from IIT Delhi in 2021.',
      image: 'https://media.licdn.com/dms/image/v2/C4E03AQHrKDag8hbExQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1624466599149?e=1735171200&v=beta&t=u5SxGfgkEf0tL9YnxpviBWV3JBiM-qUD0SRlx8m-H_M',
    },
    {
      name: 'Surbhi Agrawal',
      profession: 'Quantitative Researcher',
      experience: 5,
      description: 'Hey, I’m Surbhi Agrawal, an engineer at heart and more specifically roboticist currently based out of New York. I’ve had the  chance to tinker all around the globe. My previous experiences include working at EPFL Switzerland, Honda R&D, Tokyo and at my Alma mater IIT Delhi. You can now a days find me trying to obtain a graduate degree at Columbia University with robotics concentration.',
      image: 'https://media.licdn.com/dms/image/v2/C4E03AQFgXs5XDbsREA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1522311043140?e=1735171200&v=beta&t=ZOc0DSakldTS5kRY-BbKo4vP79WbQjSubcNNPpYu1eM',
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
      className="p-4 min-h-screen md:min-h-[60vh] flex flex-col items-center md:py-24 mb-10"
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
