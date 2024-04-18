import TechCard from "./TechCard";

const Skills = () => {
  return (
    <div className="bg-brand">
      <div className="container mx-auto py-8">
        <p className="ml-4 text-4xl  lg:text-7xl font-extrabold tracking-widest  uppercase text-transparent bg-clip-text bg-gradient-to-r from-darkGrey to-brand to-95%">
          Skills
        </p>
        <div className="py-16 flex flex-wrap items-center justify-center gap-10">
          <TechCard title="HTML" image="html" />
          <TechCard title="CSS" image="css" />
          <TechCard title="Javascript" image="javascript" />
          <TechCard title="Typescript" image="typescript" />
          <TechCard title="Next.js" image="nextjs" />
          <TechCard title="React" image="react" />
          <TechCard title="Redux" image="redux" />
          <TechCard title="NodeJS" image="nodejs" />
          <TechCard title="Socket IO" image="socketio" />
          <TechCard title="Sanity CMS" image="sanity" />
          <TechCard title="Tailwind CSS" image="tailwind" />
          <TechCard title="Figma" image="figma" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
