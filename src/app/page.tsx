import ApresentationCard from "@/components/ApresentationCard";
import Header from "../components/Header";
import MyTechStacks from "@/components/MyTechStacks";
import Projects from "@/components/Projects";
import ProfessionalSkills from "@/components/ProfessionalExperience";
import { Client } from "../helpers/graphql";
import Education from "@/components/Education";

export default async function Home() {
  const pinnedRepos = await Client.getPinnedRepos();

  return (
    <>
      <Header />
      <main className="flex flex-col w-full h-full items-center">
        <ApresentationCard />
        <MyTechStacks />
        <Education />
        <ProfessionalSkills />
        <Projects projects={pinnedRepos} />
      </main>
    </>
  );
}
