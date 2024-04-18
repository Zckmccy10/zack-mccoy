import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="mt-20 lg:mt-80 mb-20">
      <div className="container mx-auto">
        <p className="ml-4 text-4xl  lg:text-7xl font-extrabold tracking-widest  uppercase text-transparent bg-clip-text bg-gradient-to-r from-brand via-brand to-white to-35%">
          Projects
        </p>
        <ProjectCard
          title="Salary Cap Auction"
          image="/images/salarycapauction/auction-player-nominated.png"
          link="/salarycapauction"
          tech={[
            {
              name: "Next.js",
              url: "nextjs",
            },
            {
              name: "Supabase",
              url: "supabase",
            },
            {
              name: "Redux",
              url: "redux",
            },
            {
              name: "Chakra UI",
              url: "chakraui",
            },
          ]}
        >
          Designed and developed by me, this project was created during COVID
          (2020) as an alternative for my fantasy football league&apos;s normal
          operation of auctioning in person (via google sheets). Still used
          today.
        </ProjectCard>
        <ProjectCard
          title="Southwind Golf League"
          image="/images/southwindgolfleague/home.png"
          link="southwindgolfleague"
          tech={[
            {
              name: "Next.js",
              url: "nextjs",
            },
            {
              name: "Supabase",
              url: "supabase",
            },
            {
              name: "Zustand",
              url: "programming",
            },
            {
              name: "Mantine UI",
              url: "mantine",
            },
          ]}
        >
          Built as a replacement for an outdated golf league website to keep the
          league updated with information about matches, champions, dues, rules,
          and more.
        </ProjectCard>
        <ProjectCard
          title="Steelers Club Of Memphis"
          image="/images/steelersclubofmemphis/home.png"
          link="steelersclubofmemphis"
          tech={[
            {
              name: "Next.js",
              url: "nextjs",
            },
            {
              name: "Tailwind CSS",
              url: "tailwind",
            },
          ]}
        >
          Designed and created by me as a replacement for the current Steelers
          Club of Memphis site. This site leverages ESPN API data to get the
          team&apos;s schedule and depth chart automatically instead of that
          data having to be uploaded manually on the old site.
        </ProjectCard>
        <ProjectCard
          title="Fantasy Football League Record Site"
          image="/images/mffl/home-top.png"
          link="fantasyfootballleague"
          tech={[
            {
              name: "Next.js",
              url: "nextjs",
            },
            {
              name: "Sanity CMS",
              url: "sanity",
            },
            {
              name: "Typescript",
              url: "typescript",
            },
            {
              name: "Chakra UI",
              url: "chakraui",
            },
          ]}
        >
          Developed as a site to track historical data for a fantasy football
          league that has been running since 1994! This site has an entire admin
          section for updating data including owners, teams, and matchups.
        </ProjectCard>
        <p className="ml-4 text-2xl  lg:text-5xl font-extrabold tracking-widest  uppercase text-transparent bg-clip-text bg-gradient-to-r from-brand via-brand to-white to-35%">
          Non-dev Projects
        </p>
        <ProjectCard
          title="Fantasy Football League Magazine"
          image="/images/mfflmagazine/1.png"
          link="fantasyfootballmagazine"
          tech={[
            {
              name: "Canva",
              url: "canva",
            },
            {
              name: "Photoshop",
              url: "photoshop",
            },
          ]}
          size="sm"
        >
          Wanted to try and design something non-web related, so I decided to
          see if I could make a decent magazine. Fantasy football seems to be my
          usual outlet for my creative endeavours, therefore I created a
          magazine to recap the most recent year of our league!
        </ProjectCard>
      </div>
    </div>
  );
};

export default Projects;
