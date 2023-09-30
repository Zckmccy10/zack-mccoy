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
          Project: Salary Cap Auction
        </h2>
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
      </div>
      <div className="flex flex-col items-center gap-2 px-4 mb-6 pt-8 mt-8 lg:pt-0 lg:mt-0">
        <h5 className="w-full font-bold opacity-80">Current Tech:</h5>
        <TechCard title="Next.js" image="nextjs" />
        <TechCard title="Supabase" image="supabase" />
        <TechCard title="Zustand" image="zustand" />
        <TechCard title="Chakra UI" image="chakraui" />
        <h5 className="w-full mt-10 font-bold opacity-80">Previous Tech:</h5>
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
  );
}
