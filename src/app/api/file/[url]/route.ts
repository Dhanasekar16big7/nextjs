import { del } from '@vercel/blob';
// import { NextRequest } from 'next';
import { NextRequest } from "next/server";
import { NextResponse } from 'next/server';

export async function DELETE(req: NextRequest, context: any) {
    const { params } = context;
    let { url } = params;

    url = decodeURIComponent(url);
    console.log("URL:", url);

    if (!url) {
        return NextResponse.json({ error: "Please provide a valid URL for the file to delete" }, { status: 400 });
    }

    try {
        await del(url);
        console.log("File deleted successfully");
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error deleting file:", error);
        return NextResponse.json({ error: "Failed to delete the file" }, { status: 500 });
    }
}
