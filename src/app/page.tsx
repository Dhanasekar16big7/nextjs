"use client"

import PageTitle from "@/components/PageTitle";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react"

export default function Home() {
  // const [pets, setPets] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [name , setName] = useState("")
  // const [owner, setOwner] = useState("")

  // const getData = async () => {
  //   await fetch('/api/get-pets')
  //   .then( res => res.json() )
  //   .then( data => {
  //     setPets(data.data.rows);
  //     setLoading(false);
  //     console.log(data.data.rows);
  //   })
  //   .catch( err => console.log(err) )
  //   .finally( () => {
  //     // set loading to false
  //   })
  // }

  // const submitData = async () => {
  //   await fetch('/api/get-pets', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({name, owner}),
  //   })
  //   .then( res => res.json() )
  //   .then( data => {
  //     setPets(data.data.rows);
  //     setLoading(false);
  //     console.log(data.data.rows);
  //   })
  //   .catch( err => console.log(err) )
  //   .finally( () => {
  //     // set loading to false
  //   })
  // }

  // useEffect(() => {
  //   getData();
  // }, [])

  const router = useRouter();


  return (
    <main className="flex min-h-screen flex-col gap-5 p-0 w-full">
      <PageTitle title="Dashboard" />
      <div className="w-full container px-5">
      A business card makes it easy to pass on important contact details like name, job title, contact number, email address and website of the company. The recipient of the business card can easily store it in a wallet or card folder for future reference. These cards come in very handy while finding company details.
      Every business card should include your name, the company name and contact information. The primary purpose of your business card is to help people remember you and to be able to contact you when needed. Contact information can include your phone number, mailing address, physical address and email address.
        <div className="text-center mt-6">
          <Button onClick={()=>{router.push("/users")}}>User Page</Button>
        </div>
      </div>
    </main>
  );
}
