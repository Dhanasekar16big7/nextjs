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
import LoginForm from "./components/LoginForm";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";


export default async function Login ({
    searchParams,
  }: {
    searchParams: { message: string };
  }) {

  return (
    <div>
        <LoginForm message={searchParams.message} />
    </div>
  );
}
