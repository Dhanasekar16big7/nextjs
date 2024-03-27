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
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus itaque officia placeat expedita assumenda, libero asperiores suscipit, animi labore error sunt officiis eveniet deserunt. Neque, velit quia maiores illo iste voluptatum corrupti tempora consectetur quae facilis ratione praesentium quasi ad, eveniet quas nisi odit id consequuntur provident voluptas quisquam necessitatibus explicabo? Rem quaerat quos vero quo optio cupiditate cum unde impedit, facere saepe error, a sint nam, ab consectetur officiis. Eaque fuga quibusdam optio, laborum molestias dolores laudantium nihil adipisci consequuntur doloremque necessitatibus alias cumque, libero nemo fugiat eligendi facilis voluptatibus nostrum natus, sunt voluptatum quos ratione. Sint corrupti sit obcaecati enim totam facilis aperiam optio et dicta labore, quisquam odio ex possimus. Dicta hic obcaecati sit molestiae praesentium harum voluptas ab deserunt consectetur mollitia ea, quibusdam incidunt nihil enim porro placeat adipisci eveniet quam maiores. Perspiciatis harum suscipit voluptatum enim ut, quo unde placeat debitis quaerat, ad reiciendis nostrum aspernatur at vero esse repellat iusto adipisci qui hic accusantium! Beatae facilis aut quia fugit, quidem magni, fugiat eaque vel et expedita nihil amet possimus omnis asperiores officiis recusandae autem porro ea, ullam reprehenderit dolores. Deleniti iste accusamus eaque quos architecto et aspernatur expedita perspiciatis repellendus! Suscipit quo amet aliquid.
        <div className="text-center mt-6">
          <Button onClick={()=>{router.push("/users")}}>User Page</Button>
        </div>
      </div>
    </main>
  );
}
