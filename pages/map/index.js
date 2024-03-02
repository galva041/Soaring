import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { IoChevronBackOutline } from "react-icons/io5";
import { RiShieldStarLine } from "react-icons/ri";
import CloudButton from '@/components/cloudButton';

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
      className="relative bg-gradient-to-b from-[#89C7FA] via-[#B1DAFC] to-[#D8ECFD] h-screen w-screen pt-4"
    >
        <div className='flex justify-between w-screen pl-6 pr-10'>
          <button className="btn-nav" 
          onClick={() => router.back()}>
              <IoChevronBackOutline size={22} color="#0978D5"/>
          </button>

          <div className='flex justify-center items-center'>
            <RiShieldStarLine size={22} color="#313131"/>
            <h1 className='text-black ml-2'>{totalBadges}</h1>
          </div>
        </div>

        <h5 className='z-11'>
          Kono's Journey
        </h5>

        {/* <div className='relative h-1/4'> */}
          <CloudButton lesson="Our Positivity" t='top-[18%]' l='left-[62%]'/>
          <CloudButton lesson="My Hero" t='top-[35%]' l='left-[24%]'/>
          <CloudButton lesson="My Amazing Mind" route="map?cloud=1" locked={nextLessonLocked} t='top-[50%]' l='left-[59%]'/>

          <CloudButton lesson="Positivity" route="connie00" locked={false} t='top-[66%]' l='left-[22%]'/>
        {/* </div> */}

        {/* <div className='relative animate-bounce top-72 -left-20'>
          <h4 className='text-white bg-green mt-12 px-3 py-1.5 rounded-md'>
            Start Here
          </h4>

          <div className="absolute top-8 left-8 
              border-l-[12px] border-l-transparent
              border-b-[18px] border-b-green
              border-r-[12px] border-r-transparent">
          </div>
        </div> */}
        
    </main>
  )
}
