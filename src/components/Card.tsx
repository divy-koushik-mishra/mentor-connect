import React from 'react';
import { User, Briefcase, Clock } from 'lucide-react';

interface MentorCardProps {
  name: string;
  profession: string;
  experience: number;
  description: string;
  image?: string;
}

const MentorCard: React.FC<MentorCardProps> = ({ name, profession, experience, description, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300">
      <div className="relative h-48">
        <img
          src={image || "/placeholder-mentor.jpg"}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h3 className="text-white text-xl font-bold">{name}</h3>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center mb-2">
          <Briefcase className="w-5 h-5 text-gray-500 mr-2" />
          <p className="text-gray-700">{profession}</p>
        </div>
        <div className="flex items-center mb-3">
          <Clock className="w-5 h-5 text-gray-500 mr-2" />
          <p className="text-gray-700">{experience} years experience</p>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center w-full">
          Book a Session
          <User className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default MentorCard;
