import ApresentationCard from "@/components/ApresentationCard";
import Header from "../components/Header";
import MyTechStacks from "@/components/MyTechStacks";
import Projects from "@/components/Projects";
import ProfessionalSkills from "@/components/ProfessionalExperience";
import { Client } from "../helpers/graphql";

export default async function Home() {
  // Client.setToken(process.env.GITHUB_TOKEN || "");
  const pinnedRepos = await Client.getPinnedRepos();

  console.log(pinnedRepos);

  return (
    <>
      <Header />
      <main className="flex flex-col w-full h-full">
        <ApresentationCard />
        <MyTechStacks />
        <ProfessionalSkills />
        <Projects />
      </main>
    </>
  );
}
