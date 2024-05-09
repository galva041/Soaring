import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { RiLightbulbLine, RiArrowDownSLine } from "react-icons/ri";

import ParentNavbar from '@/components/parentNavbar';
import Topic from '@/components/topic';

import badge from '@/public/badges/Badge.png'


export default function ParentInsights() {
  useEffect(() => {
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#EBF3FA');
  }, []);

//   const router = useRouter();

//   const handleClick = () => {
//     router.push('/map?cloud=0');
//   };

  return (
    <main
      className="relative bg-gray-blue h-fit w-screen pt-4 flex-col space-y-5"
    >
        <h5 className='self-start'>Child's Dashboard</h5> 

        <div className='flex justify-center items-center space-x-3 bg-white p-4 rounded-lg drop-shadow-md'>
            <RiLightbulbLine size={24} color="#F0B23E"/> 
            <h7 className="text-black text-[14px] font-medium" >
                The last activity your child completed was on <span className='font-semibold'>Confidence</span>.
            </h7>
        </div>

        <h6 className='self-start'>This Week's Progress</h6>

        <div className='mt-5 h-min w-3/5 sm:w-1/2 md:w-1/3 xl:w-1/4 animate-grow-shrink'>
          <Image
          src={badge}
          alt="badge"
          className="object-contain"
          />
        </div>

        <h2 className="text-black text-[14px] font-medium">
          This week's earned badge was the Affirmation Badge. This activity was focus on... 
          <span className='text-blue'>Show more</span>
        </h2>

        <div className='flex justify-center items-center w-full space-x-3 bg-white p-4 rounded-lg drop-shadow-md'>
            <RiLightbulbLine size={24} color="#F0B23E"/> 
            <h2>
                Read about next week's activity
            </h2>
        </div>

        {/* <div className='grid grid-cols-2 justify-items-start gap-2'>
            <div className='flex space-x-4 justify-center items-center'>
                <div className='h-[32px] w-[32px] bg-pink rounded-lg'></div>
                <h2>Confidence</h2>
            </div>
            <div className='flex space-x-4 justify-center items-center'>
                <div className='h-[32px] w-[32px] bg-purple rounded-lg'></div>
                <h2>Leadership</h2>
            </div>
            <div className='flex space-x-4 justify-center items-center'>
                <div className='h-[32px] w-[32px] bg-leaf-green rounded-lg'></div>
                <h2>Resilience</h2>
            </div>
            <div className='flex justify-center items-center'>
                  <div className='h-[32px] w-[32px] bg-outline-gray rounded-lg'></div>
                  <h2 className='ml-4'>Not Started</h2>
                <RiArrowDownSLine size={20} color="#313131"/>
            </div>
        </div> */}

        <h6 className='self-start'>Topics</h6>

        <div className='w-full space-y-4 pb-24'>
          <Topic title="Confidence" started={true} route='/parent/insights/confidence'/>
          <div className="w-full border-t-2 border-[#D2D2D2]"></div>
          <Topic title="Resilience" started={false}/>
          <div className="w-full border-t-2 border-[#D2D2D2]"></div>
          <Topic title="Leadership" started={false}/>
          <div className="w-full border-t-2 border-[#D2D2D2]"></div>
          <Topic title="Communication" started={false}/>
          <div className="w-full border-t-2 border-[#D2D2D2]"></div>
          <Topic title="Empathy" started={false}/>
          <div className="w-full border-t-2 border-[#D2D2D2]"></div>
          <Topic title="Adaptability" started={false}/>
          <div className="w-full border-t-2 border-[#D2D2D2]"></div>
          <Topic title="Decision Making" started={false}/>
          <div className="w-full border-t-2 border-[#D2D2D2]"></div>
          <Topic title="Problem Solving" started={false}/>
          <div className="w-full border-t-2 border-[#D2D2D2]"></div>
          <Topic title="Teamwork" started={false}/>
          <div className="w-full border-t-2 border-[#D2D2D2]"></div>
          <Topic title="Conflict Resolution" started={false}/>
        </div>

        <ParentNavbar home={false} insights={true} />
    </main>
  )
}