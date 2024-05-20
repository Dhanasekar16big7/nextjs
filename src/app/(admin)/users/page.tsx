"use client";
import { useState, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DialogComponent from "@/components/DialogueComponent";
import PageTitle from "@/components/PageTitle";
import DeleteButton from "@/components/DeleteButton";
// import list from "@vercel/blob";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import EditDialogueComponent from "@/components/EditDialogueComponent";
import { Eye, Trash2 } from "lucide-react";
import supabase from "@/utils/supabase/client";
import { Span } from "next/dist/trace";
import { profile } from "console";
import Link from "next/link";

const formSchema = z.object({
  first_name : z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  last_name: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  mobile: z.string().min(10, {
    message: "Mobile number must be at least 10 characters.",
  }).max(12, {
    message: "Mobile number must be at most 10 characters.",
  }),
  address: z.string().min(10, {
    message: "Address must be at least 10 characters.",
  }),
  email : z.string().email({
    message: "Please provide a valid email address.",
  }),
  designation : z.string().min(2, {
    message: "Designation must be at least 2 characters.",
  }),
  company : z.string().min(2, {
    message: "Company must be at least 2 characters.",
  }),
  website : z.string().url({
    message: "Please provide a valid URL for the website.",
  }),
  about : z.string().min(10, {
    message: "About me must be at least 10 characters.",
  }),
  facebook : z.string().optional(),
  instagram : z.string().optional(),
  twitter : z.string().optional(),
  whatsapp : z.string().optional(),
  linkedin : z.string().optional(),
  tiktok : z.string().optional(),
  snapchat : z.string().optional(),
  youtube : z.string().optional(),
  image: z.string().url({
    message: "Please provide a valid URL for the image.",
  }),
});

interface User {
  id: number;
  first_name: string;
  last_name: string;
  mobile: string;
  address: string;
  email: string;
  designation: string;
  company: string;
  website: string;
  about: string;
  facebook: string;
  instagram: string;
  twitter: string;
  whatsapp: string;
  linkedin: string;
  tiktok: string;
  snapchat: string;
  youtube: string;
  image: string;
  username: string;
}

const Users = () => {
  const [fetchUserData, setFetchUserData] = useState<User[]>([]);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const control = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name : "",
      mobile: "",
      address: "",
      email: "",
      designation: "",
      company: "",
      website: "",
      about: "",
      facebook: "",
      instagram: "",
      twitter: "",
      whatsapp: "",
      linkedin: "",
      tiktok: "",
      snapchat: "",
      youtube: "",
      image: "",
      username: "",
    },
  });


  const getUserData = async () => {
    try{
      const { data, error } = await supabase.from("Users").select("*");
      if(error) throw error;
      setFetchUserData(data);
      console.log("fetchUserData ", data);
    }
    catch(err : any) {
      console.error("Error ", err.message);
  }
}

  useEffect(() => {
    getUserData();
  }, []);


  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
  
    try {
      const { data, error } = await supabase.storage.from("Avatars").upload(file.name, file, { cacheControl: '3600', upsert: true });
      if (error) throw error;
      console.log("Uploaded file data:", data);
      const { data: url } = supabase.storage.from("Avatars").getPublicUrl(data.path);
      console.log("url ", url.publicUrl);
      // Assuming data contains the URL to access the uploaded image, set it in the form
      control.setValue('image', url.publicUrl);
    } 
    catch (error :any) {
      console.error("Error uploading file:", error.message);
      alert('Image already uploaded. Please try to upload another image');
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const { data, error } = await supabase.from("Users").insert([values]).select().single();
      const username = values.first_name.toLowerCase() + values.last_name.toLowerCase() + Math.floor(Math.random() * 10000);
      const { data: userData, error: userError } = await supabase.from("Users").update({ username: username }).eq("id", data.id);
      if(error) throw error;
      console.log("data ", data);
      getUserData();
      control.reset();
      setOpen(false);
    }
    catch(err : any) {
      console.error("Error ", err.message);
    }
  };

  const deleteUser = async (id: number) => {
    console.log("ID:", id);
    const confirmed = confirm('Are you sure you want to delete this user?');
    if (confirmed) {
      try {
        const {data , error} = await supabase.from("Users").delete().eq("id", id);
        console.log("data ", data);
        if(error) throw error;
        getUserData(); // Reload user data after successful deletion
      }
      catch(err : any) {
        console.error("Error ", err.message);
      }
    }
  };

  return (
    <div className="flex min-h-screen flex-col gap-5 p-0 w-full">
      <PageTitle title="Users" />
      <DialogComponent open={open} setOpen={setOpen} control={control} onSubmit={onSubmit} handleFileChange={handleFileChange}/>
      <div className="container px-5 user-table overflow-x-scroll">
          {/* <DataTable columns={columns} data={fetchUserData} /> */}
          <Table>
            <TableHeader>
              <TableRow>
                {/* <TableHead>First name</TableHead> */}
                <TableHead>Name</TableHead>
                <TableHead>Mobile</TableHead>
                <TableHead className="w-64">Address</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Image</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
            {fetchUserData.map((user, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  {`${user?.first_name} ${user?.last_name}`}
                </TableCell>
                <TableCell>{user?.mobile}</TableCell>
                <TableCell>{user?.address}</TableCell>
                <TableCell>{user?.email}</TableCell>
                <TableCell>
                  {user?.image && (
                      <div className="relative h-20 w-20 rounded-full" style={{backgroundImage: `url(${user?.image})`, backgroundPosition: 'top', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                        {/* <img src={user?.image} className="rounded-full object-cover w-full h-full" alt="User Image" /> */}
                      </div>
                    )}
                </TableCell>
                {/* <TableCell>
                  {user?.image && (
                    <div className="relative h-20 w-20">
                      <Image src={user?.image} layout="fill" className="rounded-full" objectFit="cover"  alt="User Image" />
                    </div>
                  )}
                </TableCell> */}
                <TableCell className="flex gap-2 justify-center items-center lg:mt-6 md:mt-6 mt-5">
                <Link className="cursor-pointer" href={`/${user?.username}/profile`} target="_blank">
                  <Button className=" px-1.5 py-1.5 w-8 h-8"><Eye className="w-5 h-5"/></Button>
                </Link>
                  <EditDialogueComponent user={user} getUserData={getUserData} setOpen={setOpen} open={open} />
                  <Button className=" px-1.5 py-1.5 w-8 h-8" onClick={() => deleteUser(user?.id)}>
                  <Trash2 className="w-5 h-5" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          </Table>
        </div>
    </div>
  );
};

export default Users;