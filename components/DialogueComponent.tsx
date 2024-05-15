"use client"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import UserForm from "@/components/UserForm";

interface DialogComponentProps {
  control: any;
  onSubmit: any;
  handleFileChange: any;
  open : any;
  setOpen : any
}

const DialogComponent: React.FC<DialogComponentProps> = ({ control, onSubmit, open, setOpen, handleFileChange }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-primary text-white w-fit ml-auto mr-10 hover:bg-slate-700 hover:text-white" variant="outline">
          Add new user
        </Button>
      </DialogTrigger>
      <DialogContent className="min-[0px]:max-w-sm min-[0px]:rounded-lg">
        {/* <UserForm control={control} onSubmit={onSubmit} /> */}
        <UserForm control={control} onSubmit={onSubmit} handleFileChange={handleFileChange} />
      </DialogContent>
    </Dialog>
  );
};

export default DialogComponent;
