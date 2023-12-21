import Image from 'next/image';

export default function Home() {
  return (
    <main className="w-10/12 max-w-7xl mx-auto my-3 p-3 h-[calc(100vh-1.5rem)] shadow-dark-gray shadow grid grid-cols-main gap-3">
      <div className="bg-gray">Find a Pokemon</div>
      <div className="">Pokemon Content</div>
    </main>
  );
}
