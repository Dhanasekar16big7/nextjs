'use server';

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signIn(email: string, password: string) {
    const supabase = createClient();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
        return redirect(`/login?message=${error.message}`);
    }
    const userId = data.user.id
    if(data) {
        revalidatePath('/', 'layout');
        return redirect(`/`);
    }
}