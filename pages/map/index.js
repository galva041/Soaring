import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { IoChevronBackOutline } from "react-icons/io5";
import { RiShieldStarLine, RiHome2Line } from "react-icons/ri";
import CloudButton from '@/components/cloudButton';
import DecorativeClouds from '@/components/decorativeClouds';

export default function Map() {
  const router = useRouter();

  var { cloud } = router.query;

  var totalBadges = 0;
  var firstLessonLocked = false;
  var secondLessonLocked = true;
  var thirdLessonLocked = true;
  var greenBounce = 'Start Here';
  var greenBounceLoc = '-top-[27%] right-[20%]';
  var greenPointLoc = 'left-8';

  switch (cloud) {
    case "0":
      totalBadges = 0;
      firstLessonLocked = false;
      secondLessonLocked = true;
      thirdLessonLocked = true;
      greenBounce = 'Start Here';
      greenBounceLoc = '-top-[28%] sm:-top-[27%] right-[20%]';
      greenPointLoc = 'left-8';
      break;
    case "1": 
      totalBadges = 1;
      firstLessonLocked = false;
      secondLessonLocked = false;
      thirdLessonLocked = true;
      greenBounce = 'You are here';
      greenBounceLoc = '-top-[44%] sm:-top-[40%] left-[20%]';
      greenPointLoc = 'left-9';
      break;
    case "2": 
      totalBadges = 2;
      firstLessonLocked = false;
      secondLessonLocked = false;
      thirdLessonLocked = false;
      greenBounce = 'You are here';
      greenBounceLoc = '-top-[58%] sm:-top-[50%] right-[20%]';
      greenPointLoc = 'left-9';
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
        <div className='flex'>
          <button className="btn-nav" onClick={() => router.back()}>
          <IoChevronBackOutline size={22} color="#0978D5"/>
          </button>

          <button className="btn-nav" onClick={() => router.push('/')}>
            <RiHome2Line size={22} color="#0978D5" />
          </button>
        </div>


        <div className='flex justify-center items-center'>
          <RiShieldStarLine size={22} color="#313131"/>
          <h1 className='text-black ml-2'>{totalBadges}</h1>
        </div>
      </div>

      <h5 className='z-10 self-center'>
        Kono's Journey
      </h5>

      <CloudButton lesson="Our Positivity" t='top-[0%]' l='left-[20%]'/>
      
      <CloudButton lesson="My Hero" route="uhoh" complete={!thirdLessonLocked} locked={thirdLessonLocked} t='-top-[7%]' l='right-[20%]'/>
      <CloudButton lesson="Perfect Nurturer" route="perfectNurturer?content=0" complete={thirdLessonLocked} locked={secondLessonLocked} t='-top-[15%]' l='left-[20%]'/>

      <CloudButton lesson="Meet Kono" route="connie00" complete={secondLessonLocked} locked={false} t='-top-[22%]' l='right-[20%]'/>
        

      <div className={`relative ${greenBounceLoc} z-10 animate-bounce`}>
        <h4 className='text-white bg-green mt-12 px-3 py-1.5 rounded-md'>
          {greenBounce}
        </h4>

        <div className={`absolute top-8 ${greenPointLoc}
          border-l-[12px] border-l-transparent
          border-b-[18px] border-b-green
          border-r-[12px] border-r-transparent`}>
        </div>
      </div>
        
    </main>
  )
}
