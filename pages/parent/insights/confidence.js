import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Image from 'next/image';

import { IoChevronBackOutline } from "react-icons/io5";
import { RiHome2Line, RiSearchLine } from "react-icons/ri";
import { FaCircle } from "react-icons/fa";

import ParentNavbar from '@/components/parentNavbar';
import ParentOption from '@/components/parentOption';


export default function Confidence() {
  useEffect(() => {
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#EBF3FA');
  }, []);

  const router = useRouter();

  return (
    <main
      className="relative bg-gray-blue w-screen h-fit pt-4"
    >
        <div className='z-10 flex w-screen pl-6 pr-10'>
            <button onClick={() => router.back()}>
            <IoChevronBackOutline size={22} color="#777777"/>
            </button>
        </div>

        <h5 className='self-start my-4'>Confidence</h5> 

        <div className='w-full mb-7 space-y-1'>
            <div className='flex justify-between w-full px-1'>
                <h2>Progress</h2>
                <h2>1 of 4 badges earned</h2>
            </div>
            <div className='w-full h-6 bg-bar-gray rounded-full flex justify-between items-center'>
                <div className="w-1/4 min-h-full bg-green rounded-l-full"></div> 
            </div>
        </div>

        <div className='flex justify-center items-center space-x-2 bg-white px-4 rounded-lg drop-shadow-md'>
            <div className='flex-col space-y-0.5 py-3'>
                <h5 className='font-semibold text-[16px] text-black'>
                    Learn more on confidence
                </h5>
                <h5 className='font-medium text-[14px] text-black'>
                    Explore more ways on how children can boost their confidence!
                </h5>
                <h5 className='font-semibold text-[14px] text-blue'>
                    Learn More
                </h5>
            </div>

            <FaCircle size={96} color='#777777'/>
        </div>

        <h6 className='self-start my-6'>Top 3 Insights</h6>

        <div className='flex flex-col space-y-5 pb-24'>
            <h7 className="font-medium text-[18px] text-black self-start bg-[#FEC791] w-full rounded-md p-5">
                Your child's insights
            </h7>
            <h7 className="font-medium text-[18px] text-black self-start bg-[#ABD8C9] w-full rounded-md p-5">
                Learning path for confidence
            </h7>
            <h7 className="font-medium text-[18px] text-black self-start bg-[#F9C4BA] w-full rounded-md p-5">
                Talking to a child about this topic
            </h7>
        </div>

        <ParentNavbar home={true} insights={false}/>
    </main>
  )
}