import React from "react";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { FaTwitter } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaHashtag } from "react-icons/fa6";
import { BsBell } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import FeedCard from "@/components/FeedCard";
import { CiMoneyCheck1 } from "react-icons/ci";
import { SlOptions } from "react-icons/sl";

interface TwitterSideButton{
  title: string;
  icon: React.ReactNode;
}
const sidebarMenuItems: TwitterSideButton[]=[
  {
    title:"Home",
    icon:<IoMdHome />
  },
  {
    title:"Explore",
    icon:<FaHashtag />
  },
  {
    title:"Notifications",
    icon:<BsBell />
  },
  {
    title:"Messages",
    icon:<BsEnvelope />
  },
  {
    title:"Bookmarks",
    icon:<BsBookmark />
  },
  {
    title:"Twitter money",
    icon:<CiMoneyCheck1 />
  },
  {
    title:"Profile",
    icon:<CiUser />
  },
  {
    title:"More Options",
    icon:<SlOptions />
  }
]

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div> 
      <div className="grid grid-cols-12 h-screen w-screen px-56">
         
         <div className=" col-span-3  pt-2 ml-30">
          <div className="text-2xl h-fit w-fit hover:bg-slate-300 rounded-full p-1 transition-all">
          <FaTwitter />
          </div>
          <div className="mt-4 text-1xl font-bold pr-4">
            <ul>
              {sidebarMenuItems.map(item=><li className="flex justify-start items-center gap-4 hover:bg-slate-300 rounded-full px-4 py-2 w-fit cursor-pointer mt-2" key={item.title}><span>{item.icon}</span><span>{item.title}</span></li>)}
            </ul>
            <button className="bg-[#1d9bf0] p-4 rounded-full w-full mt-5 ">Tweet</button>
          </div>
        
         </div>
         
         <div className="col-span-5 border-r-[1px] border-l-[1px] border-gray-600 h-screen overflow-scroll">
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
         </div>
         <div className="col-span-3"></div>
      </div>
    </div>
  );
}
