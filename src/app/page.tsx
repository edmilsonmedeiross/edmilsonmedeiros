import ApresentationCard from "@/components/ApresentationCard";
import Header from "../components/Header";
import MyTechStacks from "@/components/MyTechStacks";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full h-full">
        <ApresentationCard />
        <MyTechStacks />
        <Projects />
      </main>
    </>
  );
}
