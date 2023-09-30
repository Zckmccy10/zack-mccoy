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
          Project: Fantasy Football League Magazine
        </h2>
        <p className="text-md lg:text-lg">
          Got an itch to try and design something, so I decided to see if I
          could make a decent magazine. Fantasy football seems to be my usual
          outlet for my creative endeavours, therefore I created a magazine to
          recap the most recent year of our league! We even printed these off
          and presented them at our annual auction!
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
            "/images/mfflmagazine/1.png",
            "/images/mfflmagazine/2.png",
            "/images/mfflmagazine/3.png",
            "/images/mfflmagazine/4.png",
            "/images/mfflmagazine/5.png",
            "/images/mfflmagazine/6.png",
            "/images/mfflmagazine/7.png",
            "/images/mfflmagazine/8.png",
            "/images/mfflmagazine/9.png",
            "/images/mfflmagazine/10.png",
            "/images/mfflmagazine/11.png",
            "/images/mfflmagazine/12.png",
            "/images/mfflmagazine/13.png",
            "/images/mfflmagazine/14.png",
            "/images/mfflmagazine/15.png",
            "/images/mfflmagazine/16.png",
            "/images/mfflmagazine/17.png",
            "/images/mfflmagazine/18.png",
            "/images/mfflmagazine/19.png",
            "/images/mfflmagazine/20.png",
            "/images/mfflmagazine/21.png",
            "/images/mfflmagazine/22.png",
            "/images/mfflmagazine/23.png",
            "/images/mfflmagazine/24.png",
          ]}
          landscape="portrait"
        />
      </div>
      <div className="flex flex-col items-center gap-2 px-4 mb-6 pt-8 mt-8 lg:pt-0 lg:mt-0">
        <h5 className="w-full font-bold opacity-80">Tech:</h5>
        <TechCard title="Canva" image="canva" />
        <TechCard title="Photoshop" image="photoshop" />
      </div>
    </div>
  );
}
