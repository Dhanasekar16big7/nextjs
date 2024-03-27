"use client";
import MobileSvg, { CallSvg, FacebookSvg, HomeOutlineSvg, HomeSvg, InstaSvg, LinkedinSvg, MailSvg, SnapchatSvg, TelegramSvg, TiktokSvg, TwitterSvg, WebOutlineSvg, WebSvg, WhatsappSvg, YoutubeSvg } from "@/assets/svg/page";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Download, Share2 } from "lucide-react";
import Image from "next/image";
const BdCard = () => {
  return (
    <>
      <div className="mx-auto">
        <Card className="md:w-[360px] w-full bg-cardbg pb-3.5">
          <CardHeader className="px-5 py-4 pb-20 space-y-1 card-header text-white rounded-lg pt-14 flex flex-col items-center md:flex-row gap-2">
            <div>
              <Image
                src="/profile-1.png"
                alt="profile"
                width={140}
                height={140}
              />
            </div>
          <div>
            <div className="text-center md:text-start">
                <p className="font-bold text-base text-usernamecolor">Alexander Theodore</p>
                <span className="block text-xxs text-cardcontentcolor py-0.5">Senior Designer</span>
                <span className="block text-xxs text-cardcontentcolor">Solution22</span>
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
                  <MailSvg />
                </div>
                <div className="w-18 h-14.5 flex text-usernamecolor bg-darkbgicons rounded-lg text-center justify-center items-center hover:cursor-pointer">
                  <WebSvg />
                </div>
                <div className="w-18 h-14.5 flex text-usernamecolor bg-darkbgicons rounded-lg text-center justify-center items-center hover:cursor-pointer">
                  <HomeSvg />
                </div>
              </div>
            </div>
            {/* About us code */}
            <div className="bg-darkbg p-2.5 mx-2.5 rounded-lg mt-3">
              <p className="font-bold text-sm text-cardsubtitlecolor text-center md:text-left">About Me</p>
              <p className="font-normal text-xs text-cardcontentcolor mt-2 leading-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsum quis illo officia temporibus adipisci aperiam, pariatur maiores, incidunt totam corrupti excepturi dolor distinctio expedita qui, illum consequuntur aliquid quam?</p>
            </div>
            {/* Info code */}
            <div className="bg-darkbg p-2.5 mx-2.5 rounded-lg mt-3 flex flex-col gap-4">
              <p className="flex gap-1.5 items-center"><span className="inline-block"><CallSvg /></span><span className="font-normal text-xs text-cardcontentcolor">0401 275 545</span></p>
              <p className="flex gap-1.5 items-center"><span className="inline-block"><HomeOutlineSvg /></span><span className="font-normal text-xs text-cardcontentcolor">5/2 John st, Dandenong, VIC - 3175</span></p>
              <p className="flex gap-1.5 items-center"><span className="inline-block"><TelegramSvg /></span><span className="font-normal text-xs text-cardcontentcolor">maddy@solution22.com.au</span></p>
              <p className="flex gap-1.5 items-center"><span className="inline-block"><WebOutlineSvg /></span><span className="font-normal text-xs text-cardcontentcolor">www.solution22.com.au</span></p>
            </div>
            {/* Social links code */}
            <div className="bg-darkbg p-2.5 mx-2.5 rounded-lg mt-3 flex flex-wrap justify-center gap-4">
              <div className="w-8.5 h-8.5 flex text-usernamecolor bg-darkbgicons rounded-13.6 text-center justify-center items-center hover:cursor-pointer">
                <FacebookSvg />
              </div>
              <div className="w-8.5 h-8.5 flex text-usernamecolor bg-darkbgicons rounded-13.6 text-center justify-center items-center hover:cursor-pointer">
                <InstaSvg />
              </div>
              <div className="w-8.5 h-8.5 flex text-usernamecolor bg-darkbgicons rounded-13.6 text-center justify-center items-center hover:cursor-pointer">
                <TwitterSvg />
              </div>
              <div className="w-8.5 h-8.5 flex text-usernamecolor bg-darkbgicons rounded-13.6 text-center justify-center items-center hover:cursor-pointer">
                <WhatsappSvg />
              </div>
              <div className="w-8.5 h-8.5 flex text-usernamecolor bg-darkbgicons rounded-13.6 text-center justify-center items-center hover:cursor-pointer">
                <LinkedinSvg />
              </div>
              <div className="w-8.5 h-8.5 flex text-usernamecolor bg-darkbgicons rounded-13.6 text-center justify-center items-center hover:cursor-pointer">
                <TiktokSvg />
              </div>
              <div className="w-8.5 h-8.5 flex text-usernamecolor bg-darkbgicons rounded-13.6 text-center justify-center items-center hover:cursor-pointer">
                <SnapchatSvg />
              </div>
              <div className="w-8.5 h-8.5 flex text-usernamecolor bg-darkbgicons rounded-13.6 text-center justify-center items-center hover:cursor-pointer">
                <YoutubeSvg />
              </div>
            </div>
          </div>
          <p className="mt-2.5 font-normal text-xs text-usernamecolor flex justify-center gap-1 items-center">Developed by <span><Image src="/s22logo.png" alt="logo" width={20} height={20} /></span></p>
        </Card>
      </div>
    </>
  );
};

export default BdCard;
