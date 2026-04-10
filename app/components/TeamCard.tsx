import React from "react";

export type TeamMember = {
  image: string;
  name: string;
  role: string;
  description: string;
  linkedin?: string;
};

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div className="h-full w-full bg-white rounded-xl p-5 shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col">
      <div className="flex justify-center shrink-0">
        <img
          src={member.image}
          alt={member.name}
          className="mb-3 w-full h-80 object-cover rounded-lg shadow-md"
        />
      </div>

      <p
        className="text-sm font-semibold uppercase text-red-900 text-center mb-0.5 line-clamp-2 wrap-break-word"
        title={member.role}
      >
        {member.role}
      </p>

      <h3
        className="text-xl font-bold text-gray-900 text-center mb-1 line-clamp-2 wrap-break-word"
        title={member.name}
      >
        {member.name}
      </h3>

      <div className="w-10 h-[2px] bg-gray-300 mx-auto mb-2 rounded-full shrink-0" />

      <div className="flex-1 min-h-0 text-gray-600 text-sm text-center leading-relaxed">
        <p
          className="line-clamp-8 wrap-break-word"
          title={member.description}
        >
          {member.description}
        </p>
      </div>

      <div className="flex justify-end items-center shrink-0 pt-3 mt-auto">
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 hover:opacity-60 transition"
            aria-label={`${member.name} LinkedIn`}
          >
            <img src="/linkedin-app-icon.svg" className="w-7 h-7" alt="" />
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
