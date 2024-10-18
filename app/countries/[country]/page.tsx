import CountryData from '@/app/(data)/CountryData';
import CountryCard from '@/components/custom/CountryCard';
import Link from 'next/link'

interface Params {
  params:{
    country:string
  }
}


interface CountryData {
  country:string,
  capital:string,
  population:number,
  region:string,
}

export default  function CountryPage({params}:Params) {

  const selectedCountry: string = params.country;

  const selectedCountryData: CountryData[] = CountryData.filter((item: CountryData) => (
    selectedCountry.toLowerCase() === item.country.toLowerCase()
  ))

  const [{ country , population , capital , region }] = selectedCountryData;

  console.log(selectedCountryData)

  return (
    <CountryCard country={country} population={population} region={region} capital={capital} />
  );
}
