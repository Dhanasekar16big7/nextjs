"use client";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { signIn } from "../Action";

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6,{
        message: "Password must be 6 letters"
    }),
});

export interface LoginFormProps {
    message?: string;
}

export default function LoginForm (props: LoginFormProps) {

    const [isLoading, setisLoading] = useState<boolean>(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) { 
        setisLoading(true); 
        signIn(
            values.email, 
            values.password
        ).then((res)=> {
            setisLoading(false);
        });
    }

  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <Card className="w-4/12 my-2">
            <CardHeader>
            <CardTitle>
                <div className="flex justify-center">
                    <span>Login</span>
                </div>
            </CardTitle>
            </CardHeader>
            <CardContent>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                {props?.message && (
                    <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
                        {props.message}
                    </p>
                )}
                <div className="">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username / Email</FormLabel>
                                    <FormControl>
                                    <Input placeholder="mail@mail.com" type="email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="mb-5 mt-4">
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                    <FormControl>
                                    <Input placeholder="*********" type="password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <br/>
                <Button
                    className="w-full bg-black "
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? "Loading..." : "Login"}
                </Button>
                </form>
            </Form>
            </CardContent>
        </Card>
        </div>
    </div>
  );
}
