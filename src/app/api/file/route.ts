// import { db } from '@vercel/postgres';
// import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';
import {put} from "@vercel/blob"

export async function POST(req: Request) {
    const form = await req.formData();
    const file = form.get("file") as File;
  
    if(!file.name){
      return NextResponse.json({ error: "Please select a file" }, { status: 400 });
    }
    const blob = await put(file.name, file,{
      access : "public",
  
    });
    return NextResponse.json(blob);
    
  }