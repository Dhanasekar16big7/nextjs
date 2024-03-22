"use client"
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
import { Input } from "@/components/ui/input";
import axios from "axios";

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
file: z.string().url({
    message: "Please provide a valid URL for the image.",
  }),
});

const Users = () => {

  const control = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      mobile: "",
      address: "",
      file : "",
    //   image: "",
    }
  });

  const onSubmit = async (data : any) => {
    console.log(data);

    // Handle form submission logic here
    const response = await axios.post("/api/user", data);
    // console.log("Response:", response.data);

    // Reset the form after successful submission
    control.reset();
  };

  return (
    <>
    <main className="flex min-h-screen flex-col items-center gap-12 p-24">
      <h1>Form</h1>
      <Form {...control}>
        <form onSubmit={control.handleSubmit(onSubmit)} className="space-y-8">
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
                    <Input placeholder="Enter your mobile number" {...field} />
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
              name="file"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image URL</FormLabel>
                  <FormControl>
                    <Input type="file" placeholder="Enter the URL of your image" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
        </form>
      </Form>
    </main>
    </>
  );
};

export default Users;
