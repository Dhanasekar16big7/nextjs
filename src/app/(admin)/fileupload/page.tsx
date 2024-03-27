"use client"
import { useState } from "react";

export default function FileUpload() {
    const [file, setFile] = useState<File | null>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formdata = new FormData();
        formdata.append("file", file as Blob);

        const response = await fetch("/api/file", {
            method: "POST",
            body: formdata,
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={(event) => setFile(event.target.files?.item(0) || null)} />
            <button type="submit">Upload</button>
        </form>
    )

}