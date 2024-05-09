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
import { Trash2 } from "lucide-react";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
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
  position : z.string().min(2, {
    message: "Position must be at least 2 characters.",
  }),
  company : z.string().min(2, {
    message: "Company must be at least 2 characters.",
  }),
  website : z.string().url({
    message: "Please provide a valid URL for the website.",
  }),
  aboutme : z.string().min(10, {
    message: "About me must be at least 10 characters.",
  }),
  facebook : z.string().url({
    message: "Please provide a valid URL for the facebook.",
  }),
  instagram : z.string().url({
    message: "Please provide a valid URL for the instagram.",
  }),
  twitter : z.string().url({
    message: "Please provide a valid URL for the twitter.",
  }),
  whatsapp : z.string().url({
    message: "Please provide a valid URL for the whatsapp.",
  }),
  linkedin : z.string().url({
    message: "Please provide a valid URL for the linkedin.",
  }),
  tiktok : z.string().url({
    message: "Please provide a valid URL for the tiktok.",
  }),
  snapchat : z.string().url({
    message: "Please provide a valid URL for the instagram.",
  }),
  youtube : z.string().url({
    message: "Please provide a valid URL for the youtube.",
  }),
  // image: z.string().url({
  //   message: "Please provide a valid URL for the image.",
  // }),
});

interface User {
  id: number;
  username: string;
  mobile: string;
  address: string;
  email: string;
  position: string;
  company: string;
  website: string;
  aboutme: string;
  facebook: string;
  instagram: string;
  twitter: string;
  whatsapp: string;
  linkedin: string;
  tiktok: string;
  snapchat: string;
  youtube: string;
  // image: string;
}

const Users = () => {
  const [fetchUserData, setFetchUserData] = useState<User[]>([]);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const control = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      mobile: "",
      address: "",
      email: "",
      position: "",
      company: "",
      website: "",
      aboutme: "",
      facebook: "",
      instagram: "",
      twitter: "",
      whatsapp: "",
      linkedin: "",
      tiktok: "",
      snapchat: "",
      youtube: "",
      // image: "",
    },
  });

  const getUserData = async () => {
    try {
      const res = await fetch("/api/user", {
        next: {
          tags: ["users"],
        },
      });
      const data = await res.json();
      if (data && data.data && data.data.rows) {
        setFetchUserData(data.data.rows);
        console.log("data.data.rows ", data.data.rows);
      } 
      // else {
      //   console.error("Unexpected API response format: ", data);
      // }
      // setFetchUserData(data.data.rows);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("values ", values);
    try {
      const res = await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify(values),
      });
      const responseData = await res.json();

      console.log("API Response Data:", responseData);

      if (responseData && responseData.data && responseData.data.rows) {
        setFetchUserData(responseData.data.rows);
      } 
      // else {
      //   console.error("Unexpected API response format:", responseData);
      // }
      getUserData();
      control.reset();
      setOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  // const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];
  //   const response = await fetch(`/api/file?filename=${file!.name}`, {
  //     method: 'POST',
  //     body: file!,
  //   });
  //   const newBlob = await response.json();
  //   const url = newBlob.url;
  //   console.log("responseData upload add ", url);
  //   control.setValue('image', url);
  // };

  const deleteUser = async (id: number) => {
    console.log("ID:", id);
    const confirmed = confirm('Are you sure you want to delete this user?');
    if (confirmed) {
      try {
        const res = await axios.delete(`/api/user`, {
          params: {
            id: id
          }
        });
        getUserData(); // Reload user data after successful deletion
        if(res.status === 200) {
          router.refresh();
        }
      } catch (error) {
        console.error("page error ",error);
      }
    }
  };

  // const editData = async (user : any) => {
  //   console.log("Username:", user);
  //   try{
  //     const res = await fetch("/api/user",{
  //       method: "PUT",
  //       body: JSON.stringify(user),
  //     });
  //     const responseData = await res.json();
  //     console.log("responseData edit ",responseData);
  //     if (responseData && responseData.data && responseData.data.rows) {
  //       setFetchUserData(responseData.data.rows);
  //     } else {
  //       console.error("Unexpected API response format:", responseData);
  //     }
  //     control.reset();
  //   }
  //   catch(error){
  //     console.error("edit page error ",error);
  //   }

  // } 

  return (
    <main className="flex min-h-screen flex-col gap-5 p-0 w-full">
      <PageTitle title="Users" />
      <DialogComponent open={open} setOpen={setOpen} control={control} onSubmit={onSubmit}/>
      <div className="container px-5 user-table overflow-x-scroll">
          {/* <DataTable columns={columns} data={fetchUserData} /> */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Username</TableHead>
                <TableHead>Mobile</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Email</TableHead>
                {/* <TableHead>Position</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Website</TableHead>
                <TableHead>About Me</TableHead> */}
                {/* <TableHead>Facebook</TableHead>
                <TableHead>Instagram</TableHead>
                <TableHead>Twitter</TableHead>
                <TableHead>Whatsapp</TableHead>
                <TableHead>Linkedin</TableHead>
                <TableHead>Tiktok</TableHead>
                <TableHead>Snapchat</TableHead>
                <TableHead>Youtube</TableHead> */}
                {/* <TableHead>Image</TableHead> */}
              </TableRow>
            </TableHeader>
            <TableBody>
            {fetchUserData.map((user, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{user?.username}</TableCell>
                <TableCell>{user?.mobile}</TableCell>
                <TableCell>{user?.address}</TableCell>
                <TableCell>{user?.email}</TableCell>
                {/* <TableCell>{user?.position}</TableCell>
                <TableCell>{user?.company}</TableCell>
                <TableCell>{user?.website}</TableCell>
                <TableCell>{user?.aboutme}</TableCell> */}
                {/* <TableCell>{user?.facebook}</TableCell>
                <TableCell>{user?.instagram}</TableCell>
                <TableCell>{user?.twitter}</TableCell>
                <TableCell>{user?.whatsapp}</TableCell>
                <TableCell>{user?.linkedin}</TableCell>
                <TableCell>{user?.tiktok}</TableCell>
                <TableCell>{user?.snapchat}</TableCell>
                <TableCell>{user?.youtube}</TableCell> */}
                {/* <TableCell>{user?.image}</TableCell> */}
                {/* <TableCell><img src={user?.image} alt="img" /></TableCell> */}
                {/* <TableCell>
                  {user?.image && (
                    <div className="relative h-20 w-20">
                      <Image src={user?.image} layout="fill" className="rounded-full" objectFit="cover"  alt="User Image" />
                    </div>
                  )}
                </TableCell> */}
                <TableCell className="flex gap-2">
                  <EditDialogueComponent user={user} getUserData={getUserData} />
                  <Button className=" px-1.5 py-1.5 w-8 h-8" onClick={() => deleteUser(user?.id)}>
                  <Trash2 className="w-5 h-5" />
                    {/* <DeleteButton url={user?.image} /> */}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          </Table>
        </div>
    </main>
  );
};

export default Users;