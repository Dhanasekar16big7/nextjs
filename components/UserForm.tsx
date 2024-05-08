"use client"
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

interface UserFormProps {
  control: any;
  onSubmit: any;
  // handleFileChange: any;
}

const UserForm: React.FC<UserFormProps> = ({ control, onSubmit }) => {
  const trimAndTypecast = (value: any) => {
    // Trim the value
    const trimmedValue = typeof value === "string" ? value.trim() : value;
    // Typecast the value
    return trimmedValue as string;
  };
  return (
    <Form {...control}>
      <form onSubmit={control.handleSubmit(onSubmit)} className="space-y-8 h-500 overflow-y-scroll add-form p-1.5">
        <FormField
          control={control.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <Input placeholder="Enter your username" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control.control}
          name="mobile"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mobile Number</FormLabel>
              <Input placeholder="Enter your mobile number" {...field} onChange={(e) => field.onChange(trimAndTypecast(e.target.value))} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <Input placeholder="Enter your address" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <Input placeholder="Enter your email" {...field} onChange={(e) => field.onChange(trimAndTypecast(e.target.value))} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
         control={control.control}
         name="position"
         render={({ field }) => (
           <FormItem>
             <FormLabel>Position</FormLabel>
             <Input placeholder="Enter your position" {...field} />
             <FormMessage />
           </FormItem>
         )}
       />
       <FormField
         control={control.control}
         name="company"
         render={({ field }) => (
           <FormItem>
             <FormLabel>Company</FormLabel>
             <Input placeholder="Enter your company" {...field} />
             <FormMessage />
           </FormItem>
         )}
       />
        <FormField
          control={control.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website</FormLabel>
              <Input placeholder="Enter your website" {...field} onChange={(e) => field.onChange(trimAndTypecast(e.target.value))} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control.control}
          name="aboutme"
          render={({ field }) => (
            <FormItem>
              <FormLabel>About Me</FormLabel>
              <Input placeholder="Enter your about me" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control.control}
          name="facebook"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Facebook</FormLabel>
              <Input placeholder="Enter your facebook" {...field} onChange={(e) => field.onChange(trimAndTypecast(e.target.value))} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control.control}
          name="instagram"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Instagram</FormLabel>
              <Input placeholder="Enter your instagram" {...field} onChange={(e) => field.onChange(trimAndTypecast(e.target.value))} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control.control}
          name="twitter"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Twitter</FormLabel>
              <Input placeholder="Enter your twitter" {...field} onChange={(e) => field.onChange(trimAndTypecast(e.target.value))} />
              <FormMessage />
            </FormItem>
          )}          
        />
        <FormField
          control={control.control}
          name="whatsapp"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Whatsapp</FormLabel>
              <Input placeholder="Enter your whatsapp" {...field} onChange={(e) => field.onChange(trimAndTypecast(e.target.value))} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control.control}
          name="linkedin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Linkedin</FormLabel>
              <Input placeholder="Enter your linkedin" {...field} onChange={(e) => field.onChange(trimAndTypecast(e.target.value))} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control.control}
          name="tiktok"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tiktok</FormLabel>
              <Input placeholder="Enter your tiktok" {...field} onChange={(e) => field.onChange(trimAndTypecast(e.target.value))} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control.control}
          name="snapchat"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Snapchat</FormLabel>
              <Input placeholder="Enter your snapchat" {...field} onChange={(e) => field.onChange(trimAndTypecast(e.target.value))} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control.control}
          name="youtube"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Youtube</FormLabel>
              <Input placeholder="Enter your youtube" {...field} onChange={(e) => field.onChange(trimAndTypecast(e.target.value))} />
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <Input
          id="picture"
          type="file"
          accept="image/png"
          onChange={handleFileChange}
          required
        /> */}
        <div className="text-center">
          <Button type="submit" className="btn btn-primary">Submit</Button>
        </div>
      </form>
    </Form>
  );
};

export default UserForm;
