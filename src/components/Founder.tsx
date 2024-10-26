import Image from 'next/image';
import React from 'react';

const AboutFounder = () => {
  return (
    <section className="bg-white min-h-[80vh] text-gray-800 py-12 border-b flex items-center px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <Image
          src="/founder.png" // Replace with actual image path
          alt="Founder"
          className="w-80 h-80 object-contain border-4 border-primary"
          height={500}
          width={500}
        />
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-primary mb-4">About the Founder</h2>
          <p className="text-gray-700 mb-4">
            Hi! I am a graduate of IIT Delhi, 2021 batch with a B.Tech in Textile Technology. 
            I currently work as an associate consultant at IQVIA, with over three years of 
            experience in the European pharmaceutical industry. I specialize in go-to-market 
            strategy, due diligence, revenue forecasting, and product landscaping, working with 
            Fortune 500 companies to help them achieve their business goals.
          </p>
          <p className="text-gray-700">
            I am starting this venture to help guide you, my fellow juniors through their best, 
            but also most crucial years. The aim is to provide mentorship on the do’s and don’ts 
            we learned the hard way, so you can avoid the mistakes I made and work towards your 
            future goals more effectively.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
