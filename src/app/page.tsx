import ApresentationCard from "@/components/ApresentationCard";
import Header from "../components/Header";
import MyTechStacks from "@/components/MyTechStacks";
import Projects from "@/components/Projects";
import ProfessionalSkills from "@/components/ProfessionalExperience";
import { Client } from "../helpers/graphql";
import Education from "@/components/Education";
import { Divider } from "antd";

export default async function Home() {
  const pinnedRepos = await Client.getPinnedRepos();

  return (
    <>
      <Header />
      <Divider />
      <main className="flex flex-col w-full h-full">
        <ApresentationCard />
        <Divider />
        <MyTechStacks />
        <Divider />
        <Education />
        <Divider />
        <ProfessionalSkills />
        <Divider />
        <Projects projects={pinnedRepos} />
      </main>
    </>
  );
}
