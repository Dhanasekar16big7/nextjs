"use client";
import MobileSvg, { CallSvg, FacebookSvg, HomeOutlineSvg, HomeSvg, InstaSvg, LinkedinSvg, MailSvg, SnapchatSvg, TelegramSvg, TiktokSvg, TwitterSvg, WebOutlineSvg, WebSvg, WhatsappSvg, YoutubeSvg } from "@/assets/svg/page";
import { Button } from "@/components/ui/button";
import { Card, CardHeader} from "@/components/ui/card";
import { Download, Share2 } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

interface Props {
  userId: string;
}

// interface User {
//   id: number;
//   username: string;
//   mobile: string;
//   address: string;
//   email: string;
//   website: string;
//   aboutme: string;
//   facebook: string;
//   instagram: string;
//   twitter: string;
//   whatsapp: string;
//   linkedin: string;
//   tiktok: string;
//   snapchat: string;
//   youtube: string;
//   image: string;
// }

const BdCard: React.FC<Props> = ({ userId }) => {
  const [fetchUserData, setFetchUserData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  console.log("userId ", userId);
  const getUserData = async () => { 
    try {
      // const response = await axios.get(`/api/user`);
      const response = await axios.get(`/api/user?username=${userId}`);
      // Check if fetched data is different before updating state
      if (JSON.stringify(response.data.data.rows) !== JSON.stringify(fetchUserData)) {
        setFetchUserData(response.data.data.rows);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    getUserData();
  }, [userId]); // Trigger fetch only when userId changes

  const nameConversion = (name: string) => {
    return name.split(" ").join("_").toLowerCase();
  }

  useEffect(() => {
    // Filter data when fetchUserData changes
    const filteredData = fetchUserData.filter((user: any) => {
      return nameConversion(user.username) === userId.toLowerCase(); 
    });
    setFilteredData(filteredData);
  }, [fetchUserData, userId]); // Update filteredData when fetchUserData or userId changes

  return (
    <>
    {
      filteredData && filteredData.length ? (
      filteredData.map((user: any) => (
        <div className="mx-auto" key={user.id}>
        <Card className="md:w-[360px] w-full bg-cardbg pb-3.5">
          <CardHeader className="px-5 py-4 pb-20 space-y-1 card-header text-white rounded-lg pt-14 flex flex-col items-center md:flex-row gap-2">
            <div>
              <Image
                src="/man.png"
                alt="profile"
                width={140}
                height={140}
                className="w-28 h-28 rounded-full border-4 border-white"
              />
            </div>
          <div>
            <div className="text-center md:text-start">
                <p className="font-bold text-base text-usernamecolor">{user.username}</p>
                <span className="block text-xxs text-cardcontentcolor py-0.5">{user.position}</span>
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
              <p className="font-normal text-xs text-cardcontentcolor mt-2 leading-5">{user.aboutme}</p>
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
      // <h3>No Data Found</h3>
    )
    }
    </>
  );
};

export default BdCard;
