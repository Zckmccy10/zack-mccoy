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
          Project: Southwind Golf League
        </h2>
        <div className="flex flex-wrap gap-8">
          <TechCard title="Next.js" image="nextjs" />
          <TechCard title="Supabase" image="supabase" />
          <TechCard title="Zustand" image="zustand" />
          <TechCard title="Mantine UI" image="mantine" />
        </div>
        <p className="text-md lg:text-lg">
          Built as a replacement for an outdated golf league website to keep the
          league updated with information about matches, champions, dues, rules,
          and more.
        </p>
        <p className="text-md lg:text-lg">
          The feature I&apos;m most excited about on this site is the
          &quot;Scorecard&quot; (picture 3 below) feature. You enter each
          players hole by hole score and based on each players handicap it
          calculates how many holes a player gets strokes on and highlights
          those holes in blue on the handicap row. From there, it will calculate
          who won the hole by the green shadow that appears. Based on the total
          holes won/drawed, your total points gets calculated.
        </p>
        <p className="text-md lg:text-lg">
          The scorecard also has other features like using a substitute&apos;s
          information if someone wasn&apos;t able to make it in a given week. It
          also does some of your &quot;normal&quot; capabilities like showing
          which holes you birdied, bogeyed, etc...
        </p>
        <PictureCarousel
          images={[
            "/images/southwindgolfleague/home.png",
            "/images/southwindgolfleague/event-no-details.png",
            "/images/southwindgolfleague/event.png",
            "/images/southwindgolfleague/champions.png",
            "/images/southwindgolfleague/rules.png",
            "/images/southwindgolfleague/admin.png",
          ]}
        />
      </div>
    </div>
  );
}
