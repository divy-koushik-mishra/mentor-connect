import React from 'react';
import { GraduationCap, Briefcase, Target, Users } from 'lucide-react';
import Image from 'next/image';

const AboutFounder = () => {
  const stats = [
    { icon: GraduationCap, label: "IIT Delhi", subtext: "B.Tech 2021" },
    { icon: Briefcase, label: "IQVIA", subtext: "Associate Consultant" },
    { icon: Target, label: "Experience", subtext: "3+ Years" },
    { icon: Users, label: "Clients", subtext: "Fortune 500" },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Image & Stats */}
          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-black rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative h-full bg-white rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/founder.jpeg"
                  alt="Founder"
                  height={400}
                  width={600}
                  className="w-full h-[400px] object-cover transform group-hover:scale-105 transition duration-700"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={index} 
                    className="group hover:bg-gray-900 transition-colors duration-300 bg-white rounded-xl shadow-md p-4"
                  >
                    <div className="text-center">
                      <Icon className="w-6 h-6 mx-auto mb-2 group-hover:text-white" />
                      <h3 className="font-semibold group-hover:text-white">{stat.label}</h3>
                      <p className="text-sm text-gray-600 group-hover:text-gray-300">{stat.subtext}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                About the Founder
              </h2>
              <div className="h-1 w-20 bg-gray-900 rounded-full"></div>
            </div>

            <div className="bg-white/80 backdrop-blur rounded-xl shadow-lg p-6 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Hi! I am a graduate of IIT Delhi, 2021 batch with a B.Tech in Textile Technology. 
                I currently work as an associate consultant at IQVIA, with over three years of 
                experience in the European pharmaceutical industry. I specialize in go-to-market 
                strategy, due diligence, revenue forecasting, and product landscaping, working with 
                Fortune 500 companies to help them achieve their business goals.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I am starting this venture to help guide you, my fellow juniors through their best, 
                but also most crucial years. The aim is to provide mentorship on the do&apos;s and don&apos;ts 
                we learned the hard way, so you can avoid the mistakes I made and work towards your 
                future goals more effectively.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {['Strategy', 'Due Diligence', 'Forecasting', 'Product Analysis'].map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gray-300 text-gray-900 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;