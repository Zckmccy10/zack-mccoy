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
            Salary Cap Auction
          </h2>
          <a
            href="https://salarycapauction.com"
            target="_blank"
            className="text-xl hover:text-[#325682]"
          >
            https://salarycapauction.com
          </a>
        </div>
        <div className="flex flex-wrap gap-8">
          <TechCard title="Next.js" image="nextjs" />
          <TechCard title="Supabase" image="supabase" />
          <TechCard title="Zustand" image="programming" />
          <TechCard title="Chakra UI" image="chakraui" />
        </div>
        <p className="text-md lg:text-lg">
          Designed and developed by me, this project was created during COVID
          (2020) as an alternative for my fantasy football league&apos;s normal
          operation of auctioning in person (via google sheets). This
          application is still used today despite returning back to normal in
          person auctions.
        </p>
        <p className="text-md lg:text-lg">
          Initially this project started in a very simplistic form with no auth
          and leveraging Bootstrap alongside NodeJS, Express, and MongoDB for
          the backend. One iteration later, moved over to React and Redux while
          still leveraging the same backend system. The latest iteration has
          adopted Supabase to take care of the backend and NextJS with Zustand
          for state management. ChakraUI was leveraged to help keep the design
          system more consistent while implementing branding colors into the
          site.
        </p>

        <PictureCarousel
          images={[
            "/images/salarycapauction/homepage.png",
            "/images/salarycapauction/dashboard.png",
            "/images/salarycapauction/league-dashboard.png",
            "/images/salarycapauction/auction-await-nominate.png",
            "/images/salarycapauction/auction-player-nominated.png",
            "/images/salarycapauction/auction-analytics.png",
          ]}
        />
        <h5 className="w-full my-10 font-bold opacity-80">
          Tech Used In Previous Iterations:
        </h5>
        <div className="flex flex-wrap gap-8">
          <TechCard title="HTML" image="html" />
          <TechCard title="CSS" image="css" />
          <TechCard title="Javascript" image="javascript" />
          <TechCard title="Bootstrap" image="bootstrap" />
          <TechCard title="NodeJS" image="nodejs" />
          <TechCard title="Socket IO" image="socketio" />
          <TechCard title="MongoDB" image="mongodb" />
          <TechCard title="React" image="react" />
          <TechCard title="Redux" image="redux" />
        </div>
      </div>
    </div>
  );
}
