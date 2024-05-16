"use client"
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import axios from "axios";
import { useEffect, useState } from "react";

interface UserFormProps {
  control: any;
  onSubmit: any;
  handleFileChange: any;
}

const UserForm: React.FC<UserFormProps> = ({ control, onSubmit , handleFileChange }) => {
  const [userData, setUserData] = useState([]);
  const [username, setUsername] = useState('');
  const [usernameExists, setUsernameExists] = useState(false);
  const [error, setError] = useState('');

  const trimAndTypecast = (value: any) => {
    // Trim the value
    const trimmedValue = typeof value === "string" ? value.trim() : value;
    // Typecast the value
    return trimmedValue as string;
  };

  // const fetchUserData = async () => {
  //   try {
  //     const response = await axios.get(`/api/user`);
  //     // Check if fetched data is different before updating state
  //     if (JSON.stringify(response.data.data.rows) !== JSON.stringify(fetchUserData)) {
  //       setUserData(response.data.data.rows);
  //     }
  //     // const res = await axios.get("/api/user", {
  //     //   params: {
  //     //     tags: ["users"],
  //     //   },
  //     // });
  //     // if (res.data && res.data.data && res.data.data.rows) {
  //     //   setUserData(res.data.data.rows);
  //     // }
  //   } catch (error) {
  //     console.error("Error fetching user data:", error);
  //   }
  // };

  // const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const newUsername = event.target.value;
  //   setUsername(newUsername);
  //   if (userData.some((user : any) => user.fname.toLowerCase() === newUsername.toLowerCase() || user.lname.toLowerCase() === newUsername.toLowerCase())) {
  //     setUsernameExists(true);
  //     setError('Username already exists.');
  //   } else {
  //     setUsernameExists(false);
  //     setError('');
  //   }
  // };

  useEffect(() => {
    // fetchUserData();
  }, []);

  return (
    <>
      <Form {...control}>
        <form onSubmit={control.handleSubmit(onSubmit)} className="space-y-8 h-500 overflow-y-scroll add-form p-1.5">
          <FormField
            control={control.control}
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name <span className="text-red-500">*</span></FormLabel>
                <Input placeholder="Enter your first name" {...field} 
                onChange={(e) => field.onChange(trimAndTypecast(e.target.value))}
                 />
                <FormMessage>{error}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={control.control}
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name <span className="text-red-500">*</span></FormLabel>
                <Input placeholder="Enter your last name" {...field} 
                onChange={(e) => field.onChange(trimAndTypecast(e.target.value))}
                 />
                <FormMessage>{error}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={control.control}
            name="mobile"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mobile Number <span className="text-red-500">*</span></FormLabel>
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
                <FormLabel>Address <span className="text-red-500">*</span></FormLabel>
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
                <FormLabel>Email <span className="text-red-500">*</span></FormLabel>
                <Input placeholder="Enter your email" {...field} onChange={(e) => field.onChange(trimAndTypecast(e.target.value))} />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
          control={control.control}
          name="designation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Designation<span className="text-red-500">*</span></FormLabel>
              <Input placeholder="Enter your designation" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company<span className="text-red-500">*</span></FormLabel>
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
                <FormLabel>Website <span className="text-red-500">*</span></FormLabel>
                <Input placeholder="Enter your website" {...field} onChange={(e) => field.onChange(trimAndTypecast(e.target.value))} />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control.control}
            name="about"
            render={({ field }) => (
              <FormItem>
                <FormLabel>About <span className="text-red-500">*</span></FormLabel>
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
          <Input
            id="picture"
            type="file"
            accept="image/png"
            onChange={handleFileChange}
            required
          />
          <div className="text-center">
            <Button type="submit" className="btn btn-primary">Submit</Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default UserForm;
