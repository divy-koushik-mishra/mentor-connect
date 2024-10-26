import React from 'react';
import { Briefcase, Clock } from 'lucide-react';
import Image from 'next/image';
import { RiGraduationCapFill } from '@remixicon/react';

interface MentorProps {
  name: string;
  college: string;
  profession: string;
  company: string;
  experience: number;
  description: string;
  image?: string;
}


const MentorCard: React.FC<MentorProps> = ({ name,
  college,
  profession,
  company,
  experience,
  description,
  image, }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden ">
      <div className="relative h-56">
        <Image
          src={image || "/placeholder-mentor.jpg"}
          alt={name}
          className="w-full h-full object-cover object-[100% 55%]"
          height={192}
          width={288}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h3 className="text-white text-xl font-bold">{name}</h3>
        </div>
      </div>
      <div className="p-4 min-h-[480px] flex flex-col justify-between">
        <div className="">
        <div className="flex items-center mb-2">
          <RiGraduationCapFill className="w-5 h-5 text-gray-500 mr-2" />
          <p className="text-gray-700">{college}</p>
        </div>
        <div className="flex items-center mb-2">
          <Briefcase className="w-5 h-5 text-gray-500 mr-2" />
          <p className="text-gray-700">{profession}, {company }</p>
        </div>
        <div className="flex items-center mb-3">
          <Clock className="w-5 h-5 text-gray-500 mr-2" />
          <p className="text-gray-700">{experience} years experience</p>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        </div>

        {/* <button className="bg-[#2B2B2B] text-white px-4 py-2 rounded-full  flex items-center justify-center w-full">
          Book a Session
          <User className="w-5 h-5 ml-2" />
        </button> */}
      </div>
    </div>
  );
};

export default MentorCard;
