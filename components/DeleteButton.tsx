"use client"
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

type Props = {
    url : string;
}

export default function DeleteButton({url} : Props) {
    const router = useRouter();
    const handleClick = async () => {
        try {
            await fetch("/api/file/" + encodeURIComponent(url), 
            {
                method : "DELETE", 
                headers : {
                    "Content-Type" : "application/json",
                },
            });
            router.refresh();
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <Button
         onClick={handleClick}
         > Delete </Button>
    )
}