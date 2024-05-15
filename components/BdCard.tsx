"use client";
import MobileSvg, { CallSvg, FacebookSvg, HomeOutlineSvg, HomeSvg, InstaSvg, LinkedinSvg, MailSvg, SnapchatSvg, TelegramSvg, TiktokSvg, TwitterSvg, WebOutlineSvg, WebSvg, WhatsappSvg, YoutubeSvg } from "@/assets/svg/page";
import { Button } from "@/components/ui/button";
import { Card, CardHeader} from "@/components/ui/card";
import { Download, Share2 } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import supabase from "@/utils/supabase/client";

interface Props {
  userId: string;
}

interface User {
  id: number;
  first_name: string;
  last_name: string;
  mobile: string;
  address: string;
  email: string;
  designation: string;
  company: string;
  website: string;
  about: string;
  facebook: string;
  instagram: string;
  twitter: string;
  whatsapp: string;
  linkedin: string;
  tiktok: string;
  snapchat: string;
  youtube: string;
  image: string;
  username: string;
}

const BdCard: React.FC<Props> = ({ userId }) => {
  const [fetchUserData, setFetchUserData] = useState<User[]>([]);
  const [filteredData, setFilteredData] = useState<User[]>([]);
  console.log("userId ", userId);
  const getUserData = async () => {
    try{
      const { data, error } = await supabase.from("Users").select("*");
      if(error) throw error;
      setFetchUserData(data);
      console.log("fetchUserData ", data);
    }
    catch(err : any) {
      console.error("Error ", err.message);
  }
}

  useEffect(() => {
    getUserData();
  }, [userId]); // Trigger fetch only when userId changes

  useEffect(() => {
    // Filter data when fetchUserData changes
    const filteredData = fetchUserData.filter((user: any) => {
      const username = user.username;
      return username.toLowerCase() === userId.toLowerCase();
    });
    setFilteredData(filteredData);
  }, [fetchUserData, userId]); // Update filteredData when fetchUserData or userId changes

  return (
    <>
    {
      filteredData && filteredData.length ? (
      filteredData.map((user: any) => (
        <div className="mx-auto" key={user.id}>
        <Card className="md:w-[360px] w-full bg-cardbg pb-3.5 min-h-full">
          <CardHeader className="px-5 py-4 pb-20 space-y-1 card-header text-white rounded-lg pt-14 flex flex-col items-center md:flex-row gap-2">
            <div>
              <img src={user.image} width={140} height={140} className=" rounded-full border-4 border-white" alt={user.username} />
            </div>
          <div>
            <div className="text-center md:text-start">
                <p className="font-bold text-base text-usernamecolor">{`${user.first_name} ${user.last_name}`}</p>
                <span className="block text-xxs text-cardcontentcolor py-0.5">{user.designation}</span>
                <span className="block text-xxs text-cardcontentcolor">{user.company}</span>
            </div>
            <div className="flex gap-2 pt-3.5 justify-center md:justify-start">
                <div className="w-9 h-9 flex text-usernamecolor bg-darkbg rounded text-center justify-center items-center hover:cursor-pointer"><Download className="w-4.5 h-4.5" /></div>
                <div className="w-9 h-9 flex text-usernamecolor bg-darkbg rounded text-center justify-center items-center hover:cursor-pointer"><Share2 className="w-4.5 h-4.5" /></div>
            </div>
          </div>
          </CardHeader>
          <div className="-mt-16">
            <div className="bg-darkbg p-2.5 mx-2.5 rounded-lg">
              <p className="font-bold text-sm text-cardsubtitlecolor text-center md:text-left">Quick Links</p>
              <div className="flex flex-wrap gap-6 md:gap-1.5 justify-center md:justify-between pt-3">
                <div className="w-18 h-14.5 flex text-usernamecolor bg-darkbgicons rounded-lg text-center justify-center items-center hover:cursor-pointer">
                  <MobileSvg />
                </div>
                <div className="w-18 h-14.5 flex text-usernamecolor bg-darkbgicons rounded-lg text-center justify-center items-center hover:cursor-pointer">
                  <a href="mailto:{user.email}"><MailSvg /></a>
                </div>
                <div className="w-18 h-14.5 flex text-usernamecolor bg-darkbgicons rounded-lg text-center justify-center items-center hover:cursor-pointer">
                  <a href={user.website} target="_blank"><WebSvg /></a>
                </div>
                <div className="w-18 h-14.5 flex text-usernamecolor bg-darkbgicons rounded-lg text-center justify-center items-center hover:cursor-pointer">
                  <a href="/"><HomeSvg /></a>
                </div>
              </div>
            </div>
            {/* About us code */}
            <div className="bg-darkbg p-2.5 mx-2.5 rounded-lg mt-3">
              <p className="font-bold text-sm text-cardsubtitlecolor text-center md:text-left">About Me</p>
              <p className="font-normal text-xs text-cardcontentcolor mt-2 leading-5">{user.about}</p>
            </div>
            {/* Info code */}
            <div className="bg-darkbg p-2.5 mx-2.5 rounded-lg mt-3 flex flex-col gap-4">
              <p className="flex gap-1.5 items-center"><span className="inline-block"><CallSvg /></span><span className="font-normal text-xs text-cardcontentcolor">{user.mobile}</span></p>
              <p className="flex gap-1.5 items-center"><span className="inline-block"><HomeOutlineSvg /></span><span className="font-normal text-xs text-cardcontentcolor">{user.address}</span></p>
              <p className="flex gap-1.5 items-center"><span className="inline-block"><TelegramSvg /></span><span className="font-normal text-xs text-cardcontentcolor">{user.email}</span></p>
              <p className="flex gap-1.5 items-center"><span className="inline-block"><WebOutlineSvg /></span><span className="font-normal text-xs text-cardcontentcolor">{user.website}</span></p>
            </div>
            {/* Social links code */}
            <div className="bg-darkbg p-2.5 mx-2.5 rounded-lg mt-3 flex flex-wrap justify-center gap-4">
              <div className="w-8.5 h-8.5 flex text-usernamecolor bg-darkbgicons rounded-13.6 text-center justify-center items-center hover:cursor-pointer">
                <a href={user.facebook} target="_blank"><FacebookSvg /></a>
              </div>
              <div className="w-8.5 h-8.5 flex text-usernamecolor bg-darkbgicons rounded-13.6 text-center justify-center items-center hover:cursor-pointer">
                <a href={user.instagram} target="_blank"><InstaSvg /></a>
              </div>
              <div className="w-8.5 h-8.5 flex text-usernamecolor bg-darkbgicons rounded-13.6 text-center justify-center items-center hover:cursor-pointer">
                <a href={user.twitter} target="_blank"><TwitterSvg /></a>
              </div>
              <div className="w-8.5 h-8.5 flex text-usernamecolor bg-darkbgicons rounded-13.6 text-center justify-center items-center hover:cursor-pointer">
                <a href={user.whatsapp} target="_blank"><WhatsappSvg /></a>
              </div>
              <div className="w-8.5 h-8.5 flex text-usernamecolor bg-darkbgicons rounded-13.6 text-center justify-center items-center hover:cursor-pointer">
                <a href={user.linkedin} target="_blank"><LinkedinSvg /></a>
              </div>
              <div className="w-8.5 h-8.5 flex text-usernamecolor bg-darkbgicons rounded-13.6 text-center justify-center items-center hover:cursor-pointer">
                <a href={user.tiktok} target="_blank"><TiktokSvg /></a>
              </div>
              <div className="w-8.5 h-8.5 flex text-usernamecolor bg-darkbgicons rounded-13.6 text-center justify-center items-center hover:cursor-pointer">
                <a href={user.snapchat} target="_blank"><SnapchatSvg /></a>
              </div>
              <div className="w-8.5 h-8.5 flex text-usernamecolor bg-darkbgicons rounded-13.6 text-center justify-center items-center hover:cursor-pointer">
                <a href={user.youtube} target="_blank"><YoutubeSvg /></a>
              </div>
            </div>
          </div>
          <p className="mt-2.5 font-normal text-xs text-usernamecolor flex justify-center gap-1 items-center">Developed by <span><Image src="/s22logo.png" alt="logo" width={20} height={20} /></span></p>
        </Card>
      </div>
      ))
    )
    : (
      <div className="w-full h-screen flex justify-center items-center font-bold text-3xl">
        <h1>No Data Found</h1>
      </div>
    )
    }
    </>
  );
};

export default BdCard;
