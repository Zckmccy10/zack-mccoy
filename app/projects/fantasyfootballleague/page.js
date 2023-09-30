"use client";
import TechCard from "../components/TechCard";
import BackButton from "../components/BackButton";
import PictureCarousel from "../components/PictureCarousel";

export default function Home() {
  return (
    <div className="container mx-auto pt-8 gap-4">
      <div className="flex flex-col gap-4 px-8 lg:px-4">
        <BackButton />
        <h2 className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#325682] via-[#325682] to-white to-50%">
          Project: Fantasy Football League Record
        </h2>
        <div className="flex flex-wrap gap-8">
          <TechCard title="Next.js" image="nextjs" />
          <TechCard title="Supabase" image="supabase" />
          <TechCard title="Redux" image="redux" />
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
            "/images/mffl/home-top.png",
            "/images/mffl/home-bottom.png",
            "/images/mffl/team-purple-cobras.png",
            "/images/mffl/team-black-mamba.png",
            "/images/mffl/recaps-top.png",
            "/images/mffl/recaps-bottom.png",
          ]}
        />
      </div>
    </div>
  );
}
