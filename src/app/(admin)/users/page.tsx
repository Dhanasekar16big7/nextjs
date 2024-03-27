"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import PageTitle from "@/components/PageTitle";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  mobile: z.string().min(10, {
    message: "Mobile number must be at least 10 characters.",
  }),
  address: z.string().min(10, {
    message: "Address must be at least 10 characters.",
  }),
  //   file: z.string(),
  image: z.string().url({
    message: "Please provide a valid URL for the image.",
  }),
});

interface User {
  username: string;
  mobile: string;
  address: string;
  image: string;
}

const Users = () => {
  const [userData, setUserData] = useState([]);
  const [fetchUserData, setFetchUserData] = useState<User[]>([]);
  console.log("fetchUserData", fetchUserData);

  const control = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      mobile: "",
      address: "",
      image: "",
    },
  });

  const getUserData = async () => {
    await fetch("/api/user", {
      next: {
        tags: ["users"],
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setFetchUserData(data.data.rows);
        // setLoading(false);
        console.log("getUserdata ", data.data.rows);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        // set loading to false
      });
  };

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("mobile", data.mobile);
    formData.append("address", data.address);
    formData.append("image", data.image as Blob); // Assuming image is uploaded as a single file

    try {
      const res = await fetch("/api/user", {
        method: "POST",
        body: formData,
      });
      const responseData = await res.json();
      console.log(responseData.data.rows);
      setUserData(responseData.data.rows);
      getUserData();
      control.reset();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <main className="flex min-h-screen flex-col gap-5 p-0 w-full">
        <PageTitle title="Users" />
        <Dialog>
          <DialogTrigger asChild>
            <Button
              className="bg-primary text-white w-fit ml-auto mr-10 hover:bg-slate-700 hover:text-white"
              variant="outline"
            >
              Add new user
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <Form {...control}>
              <form
                onSubmit={control.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={control.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your username" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control.control}
                  name="mobile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mobile Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your mobile number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Image URL</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          placeholder="Enter the URL of your image"
                          {...field}
                          // onChange={(e) => {
                          //  const file = e.target.files?.[0];
                          //  if (file) {
                          //    field.onChange(file);
                          //  }
                          // }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="text-center">
                  <Button type="submit">Submit</Button>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>

        <div className="container w-full px-5">
          {/* <DataTable columns={columns} data={fetchUserData} /> */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Username</TableHead>
                <TableHead>Mobile</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Image</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {
                fetchUserData.map((user,i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">{user.username!}</TableCell>
                    <TableCell>{user.mobile}</TableCell>
                    <TableCell>{user.address}</TableCell>
                    <TableCell>{user.image}</TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </div>
      </main>
    </>
  );
};

// type Payment = {
//   username : string;
//   mobile : string;
//   address : string;
//   image : string;
// }

// export const columns: ColumnDef<Payment>[] = [
//   {
//     accessorKey: "username",
//     header: "Username",
//   },
//   {
//     accessorKey: "mobile",
//     header: "Mobile",
//   },
//   {
//     accessorKey: "address",
//     header: "Address",
//   },
//   {
//     accessorKey: "image",
//     header: "Image",
//   },
// ]

export default Users;
