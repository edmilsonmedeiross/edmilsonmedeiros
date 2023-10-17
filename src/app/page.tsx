import ApresentationCard from "@/components/ApresentationCard";
import Header from "../components/Header";
import MyTechStacks from "@/components/MyTechStacks";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full h-full items-center justify-center gap-4">
        <ApresentationCard />
        <MyTechStacks />
      </main>
    </>
  );
}
