import Branding from "@/components/branding";
import ContentBlock from "@/components/content-block";
import PetDetails from "@/components/pet-details";
import PetList from "@/components/pet-list";
import SearchForm from "@/components/search-form";
import Stats from "@/components/stats";
import { TPet } from "@/lib/types";

export default async function Dashboard() {
  const res = await fetch("https://bytegrad.com/course-assets/projects/petsoft/api/pets");
  if (!res.ok) throw new Error('Could not fetch pets')
  const pets: TPet[] = await res.json();
  console.log(pets)
  return (
    <main>
      <div className="flex justify-between items-center py-8">
        <Branding />
        <Stats />
      </div>
      <div className="grid md:grid-cols-3 grid-rows-[45px_300px_500px] md:grid-rows-[45px_1fr] md:h-[600px] gap-4">
        <div className="md:row-start-1 md:row-span-1 md:col-start-1 md:col-span-1">
          <SearchForm />
        </div>
        <ContentBlock className="md:row-start-2 md:row-span-full md:col-start-1 md:col-span-1">
          <PetList pets={pets}/>
        </ContentBlock>
        <ContentBlock className="md:row-start-1 md:row-span-full md:col-start-2 md:col-span-full">
          <PetDetails />
        </ContentBlock>
      </div>
    </main>
  );
}
