import React from 'react';
import { GraduationCap, Briefcase, Target, Users, Code, Brain, Coffee, Book } from 'lucide-react';
import Image from 'next/image';

const AboutFounders = () => {
  const founders = [
    {
      title: "Founder",
      image: "founder-2.jpeg",
      stats: [
        { icon: GraduationCap, label: "IIT Delhi", subtext: "B.Tech 2021" },
        { icon: Briefcase, label: "IQVIA", subtext: "Associate Consultant" },
        { icon: Target, label: "Experience", subtext: "3+ Years" },
        { icon: Users, label: "Clients", subtext: "Fortune 500" },
      ],
      skills: ['Strategy', 'Due Diligence', 'Forecasting', 'Product Analysis'],
      bio: {
        education: "IIT Delhi, B.Tech in Textile Technology (2021)",
        current: "Currently an associate consultant at IQVIA with over three years of experience in the European pharmaceutical industry.",
        expertise: "Specializing in go-to-market strategy, due diligence, revenue forecasting, and product landscaping for Fortune 500 companies.",
        mission: "Dedicated to guiding juniors through their crucial years, sharing insights to help avoid common pitfalls and achieve career goals effectively."
      }
    },
    {
      title: "Co-founder",
      image: "kaniska.jpeg",
      stats: [
        { icon: Code, label: "IIT Bombay", subtext: "B.Tech 2021" },
        { icon: Brain, label: "Microsoft", subtext: "Software Engineer" },
        { icon: Coffee, label: "Experience", subtext: "3+ Years" },
        { icon: Book, label: "Projects", subtext: "50+" },
      ],
      skills: ['Full Stack', 'System Design', 'ML/AI', 'Cloud Architecture'],
      bio: {
        education: "IIT Bombay, B.Tech in Computer Science (2021)",
        current: "Currently a Software Engineer at Microsoft, focusing on cloud infrastructure and distributed systems.",
        expertise: "Leading high-impact projects and developing scalable solutions used by millions of users worldwide.",
        mission: "Passionate about bridging the gap between theoretical knowledge and practical implementation in tech."
      }
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Meet Our Founders</h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {founders.map((founder, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Header with Image */}
              <div className="relative h-64 group">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 group-hover:to-black/70 transition-all duration-300"></div>
                <Image
                  src={`/${founder.image}`}
                  alt={founder.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">{founder.title}</h3>
                  <p className="text-gray-200">{founder.bio.education}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {founder.stats.map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                      <div 
                        key={idx}
                        className="group hover:bg-gray-900 transition-colors duration-300 bg-gray-50 rounded-xl p-3"
                      >
                        <div className="text-center">
                          <Icon className="w-5 h-5 mx-auto mb-1 group-hover:text-white" />
                          <h4 className="font-medium text-sm group-hover:text-white">{stat.label}</h4>
                          <p className="text-xs text-gray-600 group-hover:text-gray-300">{stat.subtext}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Bio */}
                <div className="space-y-3 text-sm text-gray-600">
                  <p>{founder.bio.current}</p>
                  <p>{founder.bio.expertise}</p>
                  <p>{founder.bio.mission}</p>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {founder.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutFounders;