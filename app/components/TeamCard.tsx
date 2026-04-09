import React from "react";

export type TeamMember = {
  image: string;
  name: string;
  role: string;
  description: string;
  linkedin?: string;
  email?: string;
};

interface TeamCardProps {
  member: TeamMember;
  imageSize?: "full" | "small";
}

const TeamCard: React.FC<TeamCardProps> = ({
  member,
  imageSize = "full",
}) => {
  return (
    <div className="max-w-[360px] w-full bg-white rounded-xl p-4 shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      
      {/* Image */}
      <div className="flex justify-center">
        <img
          src={member.image}
          alt={member.name}
          className={`mb-3 ${
            imageSize === "full"
              ? "w-full h-full rounded object-cover shadow-md"
              : "w-full h-56 object-cover rounded-xl"
          }`}
        />
      </div>

      {/* Role */}
      <p className="text-sm font-semibold uppercase text-red-900 text-center mb-1">
        {member.role}
      </p>

      {/* Name */}
      <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
        {member.name}
      </h3>

      {/* Divider */}
      <div className="w-10 h-2px bg-gray-300 mx-auto mb-3 rounded-full"></div>

      {/* Description */}
      <p className="text-gray-600 text-sm text-center leading-relaxed mb-4">
        {member.description}
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-3">
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 hover:opacity-60 transition"
            aria-label={`${member.name} LinkedIn`}
          >
            <img src="/linkedin-app-icon.svg" className="w-6 h-6" />
          </a>
        )}

        {member.email && (
          <a
            href={`mailto:${member.email}`}
            className="w-6 h-6 hover:opacity-60 transition"
            aria-label={`Email ${member.name}`}
          >
            <img src="/gmail-icon.svg" className="w-6 h-6" />
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamCard;