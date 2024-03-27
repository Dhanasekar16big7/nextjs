// app/api/get-pets/route.ts

import { db } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET() {
  const client = await db.connect();
  let pets;
  
  try {
    pets = await client.sql`SELECT * FROM Pets;`;
  } catch (error) {
    return NextResponse.json({ error });
  }
 
  return NextResponse.json({ data: pets });
}

export async function POST(req: Request) {
  const request = await req.json();
  try{
    const client = await db.connect();
    const response = await client.query(`INSERT INTO 
    Pets (Name, Owner) 
  VALUES 
    ('${request.name}', '${request.owner}');`);
  }catch(err){
    console.log(err);
  }
  return NextResponse.json(request);
  
}