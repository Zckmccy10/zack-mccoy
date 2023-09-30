import React from "react";

const TechCard = ({ title, image }) => {
  return (
    <div className="p-4 grid grid-cols-[30px_1fr] whitespace-nowrap items-center gap-6 w-min overflow-hidden hover:scale-105 transition-all">
      <img
        src={`/images/tech/${image}.svg`}
        className="max-h-[30px]"
        alt="tech icon"
      />
      <p className="font-semibold text-xl opacity-80">{title}</p>
    </div>
  );
};

export default TechCard;
