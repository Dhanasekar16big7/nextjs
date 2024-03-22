import { db } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const request = await req.json();
    try{
        const client = await db.connect();
        const response = await client.query(`INSERT INTO 
        Pets (Name, Owner) 
      VALUES 
        ('data1', 'Kannu'),
        ('data2', 'Ammu'),
        ('data3', 'Ammu'),
        ('data4', 'Harish'),
      `);
      console.log(response);
    }catch(err){
        console.log(err);
    }
    return NextResponse.json(request);
}