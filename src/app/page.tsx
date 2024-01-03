import ApresentationCard from "@/components/ApresentationCard";

import MyTechStacks from "@/components/MyTechStacks";
import Projects from "@/components/Projects";
import ProfessionalSkills from "@/components/ProfessionalExperience";
import { Client } from "../helpers/graphql";
import Education from "@/components/Education";

export default async function Home() {
  const pinnedRepos = await Client.getPinnedRepos();

  return (
    <>
      <main className="flex flex-col w-full h-full" id="blur1">
        <ApresentationCard />
        <MyTechStacks />
        <Education />
        <ProfessionalSkills />
        <Projects projects={pinnedRepos} />
      </main>
    </>
  );
}
