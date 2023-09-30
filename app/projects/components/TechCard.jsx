import React from "react";

const TechCard = ({ title, image }) => {
  return (
    <div className="p-4 w-full grid grid-cols-[30px_1fr] items-center gap-6 bg-darkGrey border-solid border border-white/20 rounded-2xl overflow-hidden hover:scale-105 transition-all">
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
