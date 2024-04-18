"use client";
import TechCard from "../components/TechCard";
import BackButton from "../components/BackButton";
import PictureCarousel from "../components/PictureCarousel";

export default function Home() {
  return (
    <div className="container mx-auto py-8 gap-4">
      <div className="flex flex-col gap-4 px-8 lg:px-4">
        <BackButton />

        <div className="py-6">
          <h2 className="font-bold text-4xl text-transparent pb-4 bg-clip-text bg-gradient-to-r from-[#325682] via-[#325682] to-white to-50%">
            Fantasy Football League Record
          </h2>
          <a
            href="https://memffl.com"
            target="_blank"
            className="text-xl hover:text-[#325682]"
          >
            https://memffl.com
          </a>
        </div>
        <div className="flex flex-wrap gap-8">
          <TechCard title="Next.js" image="nextjs" />
          <TechCard title="Sanity CMS" image="sanity" />
          <TechCard title="Typescript" image="typescript" />
          <TechCard title="Chakra UI" image="chakraui" />
        </div>
        <p className="text-md lg:text-lg">
          Developed as a site to track historical data for a fantasy football
          league that has been running since 1994! This site has an entire admin
          section for updating data including owners, teams, and matchups.
        </p>
        <p className="text-md lg:text-lg">
          Being in a fantasy football league that has been around since 1994, it
          just made sense to try and honor its history. That&apos;s where this
          project comes in! This site provides the capability to see an owners
          success (or lack thereof) throughout their journey within the league.
          It is somewhat normal for an owner to change their team name in this
          league, so capability was added for owners to be able to see their
          overall data as well as a breakdown of each team they&apos;ve had.
        </p>

        <PictureCarousel
          images={[
            "/images/mffl/home-top-dark.png",
            "/images/mffl/home-bottom-dark.png",
            "/images/mffl/team-purple-cobras-dark.png",
            "/images/mffl/team-black-mambas-dark.png",
            "/images/mffl/recap-dark.png",
            "/images/mffl/home-top-light.png",
            "/images/mffl/home-bottom-light.png",
            "/images/mffl/team-purple-cobras-light.png",
            "/images/mffl/team-black-mambas-light.png",
            "/images/mffl/recap-light.png",
          ]}
        />
        <h5 className="w-full my-10 font-bold opacity-80">
          Tech Used In Previous Iterations:
        </h5>
        <div className="flex flex-wrap gap-8">
          <TechCard title="Supabase" image="supabase" />
          <TechCard title="Redux" image="redux" />
        </div>
      </div>
    </div>
  );
}
