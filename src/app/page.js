import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-12 p-24">
      <h1 className="text-5xl font-bold">Home page</h1>
      <Image src="/user-image.png" alt="Vercel Logo" width={150} height={150} />
      <p className="text-3xl font-bold">Hello world!</p>
    </main>
  );
}
