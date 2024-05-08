import { del } from '@vercel/blob';
import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

export async function DELETE(req: NextApiRequest, context: any) {
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
