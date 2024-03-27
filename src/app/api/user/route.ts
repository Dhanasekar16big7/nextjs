import { db } from '@vercel/postgres';
import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';
 
export async function GET() {
  const client = await db.connect();
  let users;
  
  try {
    users = await client.sql`SELECT * FROM Users;`;
  } catch (error) {
    return NextResponse.json({ error });
  }
 
  return NextResponse.json({ data: users });
}

export async function POST(req: Request) {
  const request = await req.json();
  try{
    const client = await db.connect();
    const response = await client.query(`INSERT INTO 
    Users (username, mobile, address, image) 
  VALUES 
    ('${request.username}', '${request.mobile}', '${request.address}', '${request.image}');`);
    revalidateTag('users');
  }catch(err){
    console.log(err);
  }
  return NextResponse.json(request);
  
}
