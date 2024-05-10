import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pencil } from "lucide-react";

interface EditDialogComponentProps {
  user: any;
  getUserData: () => void;
}

const EditDialogueComponent: React.FC<EditDialogComponentProps> = ({ user, getUserData }) => {
  const [editedUser, setEditedUser] = useState(user || {});
  const [open, setOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedUser((prevUser: any) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      const res = await fetch("/api/user", {
        method: "PUT",
        body: JSON.stringify(editedUser),
        cache: "no-store",
      });
      const responseData = await res.json();
      console.log("responseData edit ", responseData);
        getUserData(); // Reload user data after successful update
        setOpen(false);
    } catch (error) {
      console.error("edit page error ", error);
    }
  };

  // const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];
  //   try {
  //     const res = await fetch(`/api/file?filename=${file!.name}`, {
  //       method: 'POST',
  //       body: file!,
  //     });
  //     const newBlob = await res.json();
  //     const url = newBlob.url;
  //     console.log("responseData upload edit ", url);
  //     setEditedUser((prevUser: any) => ({
  //       ...prevUser,
  //       image: url,
  //     }))
  //   } catch (error) {
  //     console.error("upload error ", error);
  //   }
  // };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="px-2 py-2 w-8 h-8"><Pencil className="w-5 h-5" /></Button>
      </DialogTrigger>
      <DialogContent className="min-[0px]:max-w-sm min-[0px]:rounded-lg h-500 overflow-y-scroll border-0 edit-form">
        <DialogHeader>
          <DialogTitle className="text-center mb-1">Edit profile</DialogTitle>
        </DialogHeader>
        <div>
          <Label className="block mb-2">First name</Label>
          <Input name="fname" value={editedUser.fname} onChange={handleChange} />
        </div>
        <div>
          <Label className="block mb-2">Last name</Label>
          <Input name="lname" value={editedUser.lname} onChange={handleChange} />
        </div>
        <div>
          <Label className="block mb-2">Mobile</Label>
          <Input name="mobile" value={editedUser.mobile} onChange={handleChange} />
        </div>
        <div>
          <Label className="block mb-2">Address</Label>
          <Input name="address" value={editedUser.address} onChange={handleChange} />
        </div>
        <div>
          <Label className="block mb-2">Email</Label>
          <Input name="email" value={editedUser.email} onChange={handleChange} />
        </div>
        <div>
          <Label className="block mb-2">Position</Label>
          <Input name="position" value={editedUser.position} onChange={handleChange} />
        </div>
        <div>
          <Label className="block mb-2">Company</Label>
          <Input name="company" value={editedUser.company} onChange={handleChange} />
        </div>
        <div>
          <Label className="block mb-2">Website</Label>
          <Input name="website" value={editedUser.website} onChange={handleChange} />
        </div>
        <div>
          <Label className="block mb-2">About me</Label>
          <Input name="aboutme" value={editedUser.aboutme} onChange={handleChange} />
        </div>
        <div>
          <Label className="block mb-2">Facebook</Label>
          <Input name="facebook" value={editedUser.facebook} onChange={handleChange} />
        </div>
        <div>
          <Label className="block mb-2">Instagram</Label>
          <Input name="instagram" value={editedUser.instagram} onChange={handleChange} />
        </div>
        <div>
          <Label className="block mb-2">Twitter</Label>
          <Input name="twitter" value={editedUser.twitter} onChange={handleChange} />
        </div>
        <div>
          <Label className="block mb-2">Whatsapp</Label>
          <Input name="whatsapp" value={editedUser.whatsapp} onChange={handleChange} />
        </div>
        <div>
          <Label className="block mb-2">LinkedIn</Label>
          <Input name="linkedin" value={editedUser.linkedin} onChange={handleChange} />
        </div>
        <div>
          <Label className="block mb-2">Tiktok</Label>
          <Input name="tiktok" value={editedUser.tiktok} onChange={handleChange} />
        </div>
        <div>
          <Label className="block mb-2">Snapchat</Label>
          <Input name="snapchat" value={editedUser.snapchat} onChange={handleChange} />
        </div>
        <div>
          <Label className="block mb-2">Youtube</Label>
          <Input name="youtube" value={editedUser.youtube} onChange={handleChange} />
        </div>
        {/* <div>
          <Label>Image</Label>
          {editedUser.image && (
            <img src={editedUser.image} className="rounded-full mt-2" alt="User Image" style={{ maxWidth: "110px", height: "110px", objectFit: "cover" }} />
          )}
          <Input id="picture" className="mt-2" type="file" accept="image/png" onChange={handleFileChange} />
        </div> */}
        <DialogFooter className="flex md:justify-center">
          <div className="text-center">
            <Button onClick={handleSave}>Save changes</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditDialogueComponent;
