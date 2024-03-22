"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react"

export default function Home() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    await fetch('/api/get-pets')
    .then( res => res.json() )
    .then( data => {
      setPets(data.data.rows);
      setLoading(false);
      console.log(data.data.rows);
    })
    .catch( err => console.log(err) )
    .finally( () => {
      // set loading to false
    })
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center gap-12 p-24">
      <h1 className="text-4xl font-bold text-center">Home page</h1>
      <div className="card_data flex flex-col items-center gap-5 shadow-md p-4 rounded w-1/2 text-center bg-white">
        <Image src="/user-image.png" alt="User Image" width={150} height={150} />
        <p className="text-2xl font-bold">Hello world!</p>
        <Link href="/users"><Button>User details</Button></Link>
      </div>
      
      {
        // loading ?  {
        //   <p>Loading...</p>
        // }
        // pets &&(
        //   pets.map( (pet,i) => <p key={i}>{pet.name}</p> )
        // )
        // loading ? <p>Loading...</p> : pets && pets.map( (pet,i) => <p key={i}>{pet.name}</p> )
      }
    </main>
  );
}
