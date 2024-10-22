import Image from "next/image";


export default function Home() {
  return (
    <div

    >
      <main className="flex flex-col gap-8 justify-center items-center py-[1.2rem] xl:items-center">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />



      </main>

    </div>
  );
}
