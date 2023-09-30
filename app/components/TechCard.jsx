import React from "react";

const TechCard = ({ title, image }) => {
  return (
    <div className="p-4 min-h-[50px] min-w-[250px] flex items-center gap-6 bg-darkGrey border-solid border border-white/20 rounded-2xl overflow-hidden hover:shadow-brand hover:scale-105 transition-all">
      <img
        src={`/images/tech/${image}.svg`}
        alt="tech logo"
        className="max-h-[30px]"
      />
      <p className="font-semibold text-xl">{title}</p>
    </div>
  );
};

export default TechCard;
