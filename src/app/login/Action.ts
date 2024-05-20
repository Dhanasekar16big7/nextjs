'use server';

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
// import { NextRequest, NextResponse } from "next/server";

export async function signIn(email: string, password: string) {
    const supabase = createClient();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    // if(user.role !== 'admin') {
    //     return redirect(`/login?message=You are not authorized to access this page`);
    // }
    if (error) {
        return redirect(`/login?message=${error.message}`);
    }
    const userId = data.user.id
    if(data) {
        revalidatePath('/', 'layout');
        return redirect(`/`);
    }
}

// Middleware to handle public and private routes
// export async function middleware(req : NextRequest) {
//     const publicRoutes = [`${window.location.origin}/user/profile`];
//     const supabase = createClient();
//     const { data: { user } } = await supabase.auth.getUser();

//     if (!user && !publicRoutes.includes(req.nextUrl.pathname)) {
//         return redirect(`/login?message=You need to be logged in to access this page`);
//     }

//     return NextResponse.next();
// }