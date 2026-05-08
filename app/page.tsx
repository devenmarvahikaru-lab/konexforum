import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center sm:items-start w-full max-w-3xl">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div className="flex flex-col items-center gap-4 sm:items-start">
          <h1 className="max-w-xs text-3xl font-semibold text-center sm:text-left">
            WELCOME TO KONEX FORUM.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-center text-gray-600 sm:text-left dark:text-gray-400">
            Konex forum adalah forum diskusi bebas dengan keamanan yang terjamin.
          </p>
        </div>
      </main>
    </div>
  );
}

