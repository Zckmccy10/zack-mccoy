"use client";
import { useRouter } from "next/navigation";

const ProjectCard = ({ title, image, tech, link, size, children }) => {
  const router = useRouter();

  return (
    <div
      className={`my-10 mx-10 grid ${
        size === "sm" ? "grid-cols-[1fr_6fr]" : "grid-cols-[1fr_3fr]"
      } bg-darkGrey z-10 border-solid border border-white/20 rounded-2xl overflow-hidden hover:shadow-brand hover:cursor-pointer hover:scale-105 transition-all`}
      onClick={() => router.push(`/projects/${link}`)}
    >
      <div>
        <img src={image} alt="project thumbnail" className="object-cover" />
      </div>
      <div className="flex flex-col justify-evenly px-8 ">
        <h4 className="text-md md:text-xl lg:text-2xl xl:text-3xl font-bold">
          {title}
        </h4>
        <p className="hidden md:block text-sm lg:text-md xl:text-lg">
          {children}
        </p>
        <div className="gap-8 hidden lg:flex">
          {tech &&
            tech.length > 0 &&
            tech.map((t, idx) => {
              return (
                <div key={idx} className="flex items-center gap-2">
                  <img
                    src={`/images/tech/${t.url}.svg`}
                    alt="tech icon"
                    className="max-w-[25px]"
                  />
                  <p className="whitespace-nowrap opacity-60">{t.name}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
