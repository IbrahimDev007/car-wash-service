import Howedy from "@/Components/Howedy";
import LocationHero from "@/Components/LocationHero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col flex-grow justify-center items-center pb-[1.2rem]  max-h-full text-white "
      >
        <LocationHero className='mt-3'/>
        <Howedy/>
      </main>
    </div>
  );
}
