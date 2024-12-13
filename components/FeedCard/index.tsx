import React from 'react';
import Image from 'next/image';
import { BiMessageRounded } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";

const FeedCard: React.FC= () =>{
    return <div className=" border-r-0 border-l-0 border-b-2 border-gray-600 p-5 hover:bg-slate-300 transition-all">
        <div className=' grid grid-cols-12 gap-3'>
            <div className='col-span-1'>
                <Image src="https://avatars.githubusercontent.com/u/44976328?v=4" alt="user-image" height={100} width={100}/>
            </div>
            <div className='col-span-11'>
                <h5>Azeem Mohd</h5>
                <p> hello i am Mohd Azeem and I am btech and mtech</p>
            
            <div className='flex justify-between mt-5 text-xl items-center pr-1 w-[90%]'>
                <div>
                   <BiMessageRounded />
                </div>
                <div>
                  <FaRetweet />
                  
                </div>
                <div>
                <FaRegHeart />
                </div>
                <div>
                <MdOutlineFileUpload />
                </div>
            </div>
        
           </div>
            
        </div>
    </div>
};

export default FeedCard;  