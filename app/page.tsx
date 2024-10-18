import Link from 'next/link';
export default function Home() {
  return (
    <main className='h-screen w-full bg-slate-250 font-semibold  bg-slate-200 text-black flex flex-col justify-center items-center gap-10'>
      <h1 className="text-6xl text-800 m-5 ">Dynamic Rounting With Components</h1>
      <Link href={'/countries'} className=' border-2 border-black rounded-lg px-4 py-2 text-xl hover:bg-teal-800 hover:border-none hover:text-white font-bold transition-all duration-300 ease-linear'>Navigate to country page</Link>
      
    </main>
  );
}
