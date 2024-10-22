import LocationHero from "@/Components/LocationHero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col flex-grow justify-center items-center pb-[1.2rem] xl:items-center   max-h-full text-white "
      
      >
        <LocationHero className='mt-3'/>
        <div className="card glass w-96">
          <figure>
            <Image
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="car"
              width={400}
              height={250}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
