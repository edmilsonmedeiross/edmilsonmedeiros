import ApresentationCard from "@/components/ApresentationCard";
import Header from "../components/Header";
import MyTechStacks from "@/components/MyTechStacks";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ApresentationCard />
        <MyTechStacks />
      </main>
    </>
  );
}
