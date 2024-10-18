import Link from 'next/link'

interface PROPS {
    country: string,
    population:number,
    region:string,
    capital:string,
}

export default function CountryCard({country , population , region , capital }: PROPS) {
    return (
        <div className="h-screen w-full py-10 bg-slate-200 text-5xl gap-6 flex flex-col justify-center
         items-center  ">
          <h1>Country Name : {country}</h1>
          <h2 className="text-4xl">Capital city : {capital}</h2>
          <h2 className="text-4xl">Population : {population}</h2>
          <h2 className="text-4xl">Region : {region}</h2>
          <Link href={'/countries'} className=' border-2 border-black rounded-lg px-4 py-2 text-xl hover:bg-teal-800 hover:border-none hover:text-white font-bold transition-all duration-300 ease-linear'>Back to country page</Link>
          
        </div>
      );
}
