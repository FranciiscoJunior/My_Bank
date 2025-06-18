import { Header } from "@/components/Header";
import { Search } from "@/components/Search";
import { SectionHero } from "@/components/SectionHero";
import { SectionServices } from "@/components/SectionService";
export default function Home() {
  return (
    <>
      <Header/>
      <Search/>
      <SectionHero/>
      <SectionServices/>
    </>
  );
}