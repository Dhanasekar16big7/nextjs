"use client";
import MobileSvg, { CallSvg, FacebookSvg, HomeOutlineSvg, HomeSvg, InstaSvg, LinkedinSvg, MailSvg, SnapchatSvg, TelegramSvg, TiktokSvg, TwitterSvg, WebOutlineSvg, WebSvg, WhatsappSvg, YoutubeSvg } from "@/assets/svg/page";
import { Button } from "@/components/ui/button";
import { Card, CardHeader} from "@/components/ui/card";
import { Download, Share2 } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import supabase from "@/utils/supabase/client";
// import vCardsJS from "vcards-js";
import { RWebShare } from "react-web-share";
// import { Base64 } from 'js-base64';

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

  const downloadToFile = (content: string, filename: string, contentType: string) => {
    const a = document.createElement('a');
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = filename;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const getBase64Image = (url: string): Promise<string> => {
    return fetch(url)
      .then(response => response.blob())
      .then(blob => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            resolve(reader.result as string);
          };
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        });
      });
  };

  const makeVCard = async (user: User) => {
    const imageBase64 = await getBase64Image(user.image);

    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${user.first_name}
LN:${user.last_name}
N:${user.first_name} ${user.last_name}
ORG:${user.company}
TITLE:${user.designation}
TEL;TYPE=WORK,VOICE:${user.mobile}
ADR;TYPE=WORK,PREF:;;${user.address}
EMAIL:${user.email}
URL:${user.website}
PHOTO;ENCODING=b:${imageBase64.split(",")[1]}
NOTES:${user.about}
X-SOCIALPROFILE;TYPE=facebook:${user.facebook}
X-SOCIALPROFILE;TYPE=instagram:${user.instagram}
X-SOCIALPROFILE;TYPE=twitter:${user.twitter}
X-SOCIALPROFILE;TYPE=whatsapp:${user.whatsapp}
X-SOCIALPROFILE;TYPE=linkedin:${user.linkedin}
X-SOCIALPROFILE;TYPE=tiktok:${user.tiktok}
X-SOCIALPROFILE;TYPE=snapchat:${user.snapchat}
X-SOCIALPROFILE;TYPE=youtube:${user.youtube}
REV:${new Date().toISOString()}
END:VCARD`;
    downloadToFile(vcard, 'vcard.vcf', 'text/vcard');
  };


  return (
    <>
    {     
      filteredData.map((user: any) => (
        <div className="mx-auto" key={user.id}>
          <Card className="md:w-[360px] w-full bg-cardbg pb-3.5 min-h-full border-none rounded-none user-profile-card">
            <CardHeader className="px-5 py-4 pb-20 space-y-1 card-header text-white pt-8 flex flex-col items-center md:flex-row gap-2 w-full">
              <div className="md:w-1/2">
                <div className="relative rounded-full border-4 border-white h-[140px] w-[140px]" style={{backgroundImage: `url(${user?.image})`, backgroundPosition: 'top', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                {/* <img src="/s22logo.png" width={140} height={140} className="d-none rounded-full border-4 border-white" alt={user.username} /> */}
                </div>
              {/* <div>
              <img src={user.image} width={140} height={140} className=" rounded-full border-4 border-white" alt={user.username} />
            </div> */}
              </div>
              
            <div className="md:w-1/2">
              <div className="text-center md:text-start">
                  <p className="font-bold text-base text-usernamecolor">{`${user.first_name} ${user.last_name}`}</p>
                  <span className="block text-sm text-cardcontentcolor py-0.5">{user.designation}</span>
                  <span className="block text-sm text-cardcontentcolor">{user.company}</span>
              </div>
              <div className="flex gap-2 pt-3.5 justify-center md:justify-start">
                  <div className="w-14 h-14 md:w-12 md:h-12 flex text-usernamecolor bg-darkbg rounded text-center justify-center items-center hover:cursor-pointer" onClick={() => makeVCard(user)}><Download /></div>
                  {/* <div className="w-14 h-14 md:w-12 md:h-12 flex text-usernamecolor bg-darkbg rounded text-center justify-center items-center hover:cursor-pointer"><Share2 /></div> */}
                  <RWebShare
                    data={{
                      text: `Check out ${user.first_name} ${user.last_name}'s profile!`,
                      url: `${window.location.origin}/${user.username}/profile`,
                      title: `${user.first_name} ${user.last_name}`,
                    }}
                    onClick={() => console.log("Shared successfully!")}
                  >
                    <div className="w-14 h-14 md:w-12 md:h-12 flex text-usernamecolor bg-darkbg rounded text-center justify-center items-center hover:cursor-pointer">
                      <Share2 />
                    </div>
                  </RWebShare>
              </div>
            </div>
            </CardHeader>
            <div className="-mt-16">
              <div className="bg-darkbg p-2.5 mx-2.5 rounded-lg">
                {/* <p className="font-bold text-sm text-cardsubtitlecolor text-center md:text-left">Quick Links</p> */}
                <div className="flex flex-wrap gap-6 justify-center pt-1">
                  <div className="w-18 h-14.5 flex text-usernamecolor bg-darkbgicons rounded-lg text-center justify-center items-center hover:cursor-pointer">
                    <a href={`tel:${user.mobile}`}><MobileSvg /></a>
                  </div>
                  <div className="w-18 h-14.5 flex text-usernamecolor bg-darkbgicons rounded-lg text-center justify-center items-center hover:cursor-pointer">
                    <a href={`mailto:${user.email}`}><MailSvg /></a>
                  </div>
                  <div className="w-18 h-14.5 flex text-usernamecolor bg-darkbgicons rounded-lg text-center justify-center items-center hover:cursor-pointer">
                    <a href="https://www.solution22.com.au/" target="_blank"><WebSvg /></a>
                  </div>
                  {/* <div className="w-18 h-14.5 flex text-usernamecolor bg-darkbgicons rounded-lg text-center justify-center items-center hover:cursor-pointer">
                    <a href="/"><HomeSvg /></a>
                  </div> */}
                </div>
              </div>
              {/* About us code */}
              <div className="bg-darkbg p-2.5 mx-2.5 rounded-lg mt-3">
                <p className="font-bold text-sm text-cardsubtitlecolor text-center md:text-left">About Me</p>
                <p className="font-normal text-sm text-cardcontentcolor mt-2">{user.about}</p>
              </div>
              {/* Info code */}
              <div className="bg-darkbg p-2.5 mx-2.5 rounded-lg mt-3 flex flex-col gap-4">
                <p className="flex gap-1.5 items-center"><span className="inline-block"><CallSvg /></span><span className="font-normal text-sm text-cardcontentcolor"><a href={`tel:${user.mobile}`}>{user.mobile}</a></span></p>
                <p className="flex gap-1.5 items-center"><span className="inline-block"><HomeOutlineSvg /></span><span className="font-normal text-sm text-cardcontentcolor">{user.address}</span></p>
                <p className="flex gap-1.5 items-center"><span className="inline-block"><TelegramSvg /></span><span className="font-normal text-sm text-cardcontentcolor"><a href={`mailto:${user.email}`}>{user.email}</a></span></p>
                <p className="flex gap-1.5 items-center"><span className="inline-block"><WebOutlineSvg /></span><span className="font-normal text-sm text-cardcontentcolor"><a href={user.website} target="_blank">{user.website}</a></span></p>
              </div>
              {/* Social links code */}
              {
                <div className="bg-darkbg p-2.5 mx-2.5 rounded-lg mt-3 flex flex-wrap justify-center gap-4">
                  {user.facebook && (
                    <div className="w-8.5 h-8.5 flex text-usernamecolor bg-darkbgicons rounded-13.6 text-center justify-center items-center hover:cursor-pointer">
                    <a href={user.facebook} target="_blank"><FacebookSvg /></a>
                  </div>
                  )}
                  {user.instagram && (
                    <div className="w-8.5 h-8.5 flex text-usernamecolor bg-darkbgicons rounded-13.6 text-center justify-center items-center hover:cursor-pointer">
                    <a href={user.instagram} target="_blank"><InstaSvg /></a>
                  </div>
                  )}
                  {user.twitter && (
                    <div className="w-8.5 h-8.5 flex text-usernamecolor bg-darkbgicons rounded-13.6 text-center justify-center items-center hover:cursor-pointer">
                    <a href={user.twitter} target="_blank"><TwitterSvg /></a>
                  </div>
                  )}
                  {user.whatsapp && (
                    <div className="w-8.5 h-8.5 flex text-usernamecolor bg-darkbgicons rounded-13.6 text-center justify-center items-center hover:cursor-pointer">
                    <a href={user.whatsapp} target="_blank"><WhatsappSvg /></a>
                  </div>
                  )}
                  {user.linkedin && (
                    <div className="w-8.5 h-8.5 flex text-usernamecolor bg-darkbgicons rounded-13.6 text-center justify-center items-center hover:cursor-pointer">
                    <a href={user.linkedin} target="_blank"><LinkedinSvg /></a>
                  </div>
                  )}
                  {user.tiktok && (
                    <div className="w-8.5 h-8.5 flex text-usernamecolor bg-darkbgicons rounded-13.6 text-center justify-center items-center hover:cursor-pointer">
                    <a href={user.tiktok} target="_blank"><TiktokSvg /></a>
                  </div>
                  )}
                  {user.snapchat && (
                    <div className="w-8.5 h-8.5 flex text-usernamecolor bg-darkbgicons rounded-13.6 text-center justify-center items-center hover:cursor-pointer">
                    <a href={user.snapchat} target="_blank"><SnapchatSvg /></a>
                  </div>
                  )}
                  {user.youtube && (
                  <div className="w-8.5 h-8.5 flex text-usernamecolor bg-darkbgicons rounded-13.6 text-center justify-center items-center hover:cursor-pointer">
                  <a href={user.youtube} target="_blank"><YoutubeSvg /></a>
                </div>
                  )}
                </div>
              }
            </div>
            <a href="https://www.solution22.com.au/" target="_blank"><p className="mt-2.5 font-normal text-xs text-usernamecolor flex justify-center gap-1 items-center">Developed by <span><Image src="/s22logo.png" alt="logo" width={20} height={20} /></span></p></a>
          </Card>
        </div>
      ))
    }
    </>
  );
};

export default BdCard;