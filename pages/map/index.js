import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { IoChevronBackOutline } from "react-icons/io5";
import { RiShieldStarLine } from "react-icons/ri";
import CloudButton from '@/components/cloudButton';
import DecorativeClouds from '@/components/decorativeClouds';

export default function Map() {
  const router = useRouter();

  var { cloud } = router.query;

  var totalBadges = 0;
  var nextLessonLocked = true;

  switch (cloud) {
    case "0":
      totalBadges = 0;
      nextLessonLocked = true;
      break;
    case "1": 
      totalBadges = 1;
      nextLessonLocked = false;
      break;
  }

  useEffect(() => {
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#89C7FA');
  }, []);

  return (
    <main
      className=" overflow-hidden bg-gradient-to-b from-[#89C7FA] via-[#B1DAFC] to-[#D8ECFD] h-screen w-screen pt-4"
    >
      <DecorativeClouds />
      
      <div className='z-10 flex justify-between w-screen pl-6 pr-10'>
        <button className="btn-nav" onClick={() => router.back()}>
          <IoChevronBackOutline size={22} color="#0978D5"/>
        </button>

        <div className='flex justify-center items-center'>
          <RiShieldStarLine size={22} color="#313131"/>
          <h1 className='text-black ml-2'>{totalBadges}</h1>
        </div>
      </div>

      <h5 className='z-10 self-center'>
        Kono's Journey
      </h5>

      <CloudButton lesson="Our Positivity" t='top-[0%]' l='left-[20%]'/>
      
      <CloudButton lesson="My Hero" t='-top-[7%]' l='right-[20%]'/>
      <CloudButton lesson="My Amazing Mind" route="map?cloud=1" locked={nextLessonLocked} t='-top-[15%]' l='left-[20%]'/>

      <CloudButton lesson="Positivity" route="connie00" locked={false} t='-top-[22%]' l='right-[20%]'/>
        

      <div className='relative -top-[27%] right-[20%] z-10 animate-bounce'>
        <h4 className='text-white bg-green mt-12 px-3 py-1.5 rounded-md'>
          Start Here
        </h4>

        <div className="absolute top-8 left-8 
          border-l-[12px] border-l-transparent
          border-b-[18px] border-b-green
          border-r-[12px] border-r-transparent">
        </div>
      </div>
        {/* </div> */}
        
    </main>
  )
}
