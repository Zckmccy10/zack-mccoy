"use client";
import TechCard from "../components/TechCard";
import BackButton from "../components/BackButton";
import PictureCarousel from "../components/PictureCarousel";

export default function Home() {
  return (
    <div className="container mx-auto pt-8 grid grid-cols-1 lg:grid-cols-[3fr_1fr] lg:divide-x divide-y lg:divide-y-0  gap-4">
      <div className="flex flex-col gap-4 px-8 lg:px-4">
        <BackButton />
        <h2 className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#325682] via-[#325682] to-white to-50%">
          Project: Steelers Club Of Memphis
        </h2>
        <p className="text-md lg:text-lg">
          Designed and created by me as a replacement for the current Steelers
          Club of Memphis site. This site leverages ESPN API data to get the
          team&apos;s schedule and depth chart automatically instead of that
          data having to be uploaded manually on the old site.
        </p>
        <p className="text-md lg:text-lg">
          This is one of the simpler sites I&apos;ve built. The great thing
          about this one is it&apos;s capability to pull information directly
          from ESPN APIs.
        </p>
        <PictureCarousel
          images={[
            "/images/steelersclubofmemphis/home.png",
            "/images/steelersclubofmemphis/roster.png",
            "/images/steelersclubofmemphis/schedule.png",
          ]}
        />
      </div>
      <div className="flex flex-col items-center gap-2 px-4 mb-6 pt-8 mt-8 lg:pt-0 lg:mt-0">
        <h5 className="w-full font-bold opacity-80">Tech:</h5>
        <TechCard title="Next.js" image="nextjs" />
        <TechCard title="Tailwind CSS" image="tailwind" />
      </div>
    </div>
  );
}
