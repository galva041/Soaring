import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { IoChevronBackOutline } from "react-icons/io5";
import { RiHome2Line, RiSearchLine } from "react-icons/ri";
import { FaCircle } from "react-icons/fa";

import ParentNavbar from '@/components/parentNavbar';
import ParentOption from '@/components/parentOption';

import articles from '@/public/resources/Articles.png'
import videos from '@/public/resources/Videos.png'
import podcasts from '@/public/resources/Podcasts.png'
import goodInside from '@/public/resources/GoodInside.png'
import tedTalk from '@/public/resources/TedTalk.png'
import bebe from '@/public/resources/BringingUpBebe.png'


export default function ParentHome() {
  useEffect(() => {
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#EBF3FA');
  }, []);

  const router = useRouter();

  const handleClick = () => {
    router.push('/map?cloud=0');
  };

  const navToUnderConst = () => {
    router.push('/parent/UnderConstruction');
  };

  return (
    <main
      className="relative bg-gray-blue w-screen h-max pt-4"
    >
      <div className='z-10 flex w-screen pl-6 pr-10'>
        <button className="btn-nav" onClick={() => router.push('/childorparent')}>
        <IoChevronBackOutline size={22} color="#0978D5"/>
        </button>

        <button className="btn-nav" onClick={() => router.push('/')}>
          <RiHome2Line size={22} color="#0978D5" />
        </button>
      </div>

      <div className='flex items-center justify-between w-full mt-3 mb-5'>
        <div> 
          <div className='flex items-center space-x-2'>
            <h5>
              Hey there! 
            </h5> 
            <span className='animate-wave text-[32px]'>👋</span>
          </div>
        </div>

        <RiSearchLine size={28} color='#313131'/>
      </div>

      <div className='flex-col justify-center item-center w-full space-y-5 mb-28'>
        <div className='space-y-3 w-full'>
          <div className='flex justify-between items-center'>
            <h6>Handpicked for you</h6>
            <button className='font-medium text-[20px] text-blue'>
              See All
            </button>
          </div>

          <div className='overflow-x-auto flex space-x-4 w-full pb-2'>
            <Link href='https://www.goodinside.com/podcast/all/' target='_blank' className='flex-shrink-0'>
              <Image
              src={goodInside}
              alt="goodinside"
              className="object-cover h-36 w-36 rounded-lg animate-[focus_1.4s_ease-in-out]"
              />
            </Link>
            <Link href='https://pameladruckerman.com/bringing-up-bebe/' target='_blank' className='flex-shrink-0'>
              <Image
              src={bebe}
              alt="bebe"
              className="object-cover h-36 w-36 rounded-lg"
              />
            </Link>
            <Link href='https://www.youtube.com/watch?v=CyElHdaqkjo&ab_channel=TED' target='_blank' className='flex-shrink-0'>
              <Image
              src={tedTalk}
              alt="tedtalk"
              className="object-cover h-36 w-36 rounded-lg"
              />
            </Link>
          </div>
        </div>

        <ParentOption title="Ask other parents" link={0}/> 
        <ParentOption title="Ask the experts" link={1}/> 

        <div className='space-y-3 w-full'>
          <div className='flex justify-between items-center'>
            <h6>Resources</h6>
            <button className='font-medium text-[20px] text-blue'>
              See All
            </button>
          </div>

          <div className='overflow-x-auto flex space-x-4 w-full pb-2'>
            <button onClick={navToUnderConst} className='flex-shrink-0'>
              <Image
              src={articles}
              alt="videos"
              width='100%'
              height='100%'
              className="object-cover h-36 w-36 rounded-lg"
              />
            </button>
            <button onClick={navToUnderConst} className='flex-shrink-0'>
              <Image
              src={videos}
              alt="videos"
              className="object-cover h-36 w-36 rounded-lg"
              />
            </button>
            <button onClick={navToUnderConst} className='flex-shrink-0'>
              <Image
              src={podcasts}
              alt="podcasts"
              className="object-cover h-36 w-36 rounded-lg"
              />
            </button>
          </div>
        </div>


        <ParentOption title="Trending topics" link={1}/>
        <ParentOption title="Give us feedback" link={1}/>
      </div>

      <ParentNavbar home={true} insights={false}/>
    </main>
  )
}