import { db } from '@vercel/postgres';
import { revalidatePath, revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';
 
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
    users (username, mobile, address, email, position, company, website, aboutme, facebook, instagram, twitter, whatsapp, linkedin, tiktok, snapchat, youtube) 
  VALUES 
    ('${request.username}', '${request.mobile}', '${request.address}', '${request.email}', '${request.position}', '${request.company}', '${request.website}', '${request.aboutme}', '${request.facebook}', '${request.instagram}', '${request.twitter}', '${request.whatsapp}', '${request.linkedin}', '${request.tiktok}', '${request.snapchat}', '${request.youtube}';`);
    revalidateTag('users');
  }catch(err){
    console.log(err);
  }
  return NextResponse.json(request);
  
}

export async function DELETE(req: NextRequest) {
  try{
    const request = req.nextUrl.searchParams;
    const username = request.get('id');
    const client = await db.connect();
    const response = await client.query(`DELETE FROM users WHERE id = '${username}';`);
    console.log("response ",response);
    revalidateTag('users');
    revalidatePath('/users');
  }catch(err){
    console.log("error ",err);
  }
  return NextResponse.json("Deleted successfully !");
}

export async function PUT(req: NextRequest) {
  const request = await req.json();
  try{
    const client = await db.connect();
    const response = await client.query(`
      UPDATE users 
      SET username = '${request.username}', mobile = '${request.mobile}', address = '${request.address}', email = '${request.email}', position = '${request.position}', company = '${request.company}', website = '${request.website}', aboutme = '${request.aboutme}', facebook = '${request.facebook}', instagram = '${request.instagram}', twitter = '${request.twitter}', whatsapp = '${request.whatsapp}', linkedin = '${request.linkedin}', tiktok = '${request.tiktok}', snapchat = '${request.snapchat}', youtube = '${request.youtube}' 
      WHERE id = '${request.id}';
    `);
    revalidateTag('users');
    revalidatePath('/users');
  }catch(err){
    console.log(err);
  }
  return NextResponse.json("Data updated successfully !");

  // try {
  //   const request = req.nextUrl.searchParams;
  //   const id = request.get('id');
  //   const username = request.get('username');
  //   const mobile = request.get('mobile');
  //   const address = request.get('address');
  //   const image = request.get('image');
  //   const client = await db.connect();
  //   const response = await client.query(`
  //     UPDATE users 
  //     SET username = '${username}', mobile = '${mobile}', address = '${address}', image = '${image}' 
  //     WHERE id = '${id}';
  //   `);
  // } catch (err) {
  //   console.error(err);
  // }
  // return NextResponse.json("Data updated successfully !");
}


// export async function PUT(req: NextRequest) {
//   try {
//     const request = req.nextUrl.searchParams;
//     const username = request.get('username');
//     const mobile = request.get('mobile');
//     const address = request.get('address');
//     const image = request.get('image');
//     const client = await db.connect();
//     const response = await client.query(`
//       UPDATE users 
//       SET mobile = '${mobile}', address = '${address}', image = '${image}' 
//       WHERE username = '${username}';
//     `);
//     revalidateTag('users');
//     return NextResponse.json("Data updated successfully !");
//   } catch (err) {
//     console.log(err);
//   }
//   return NextResponse.json("Failed to update data");
// }



