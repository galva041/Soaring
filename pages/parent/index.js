import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Image from 'next/image';

import { IoChevronBackOutline } from "react-icons/io5";
import { RiHome2Line, RiSearchLine } from "react-icons/ri";
import { FaCircle } from "react-icons/fa";

import ParentNavbar from '@/components/parentNavbar';
import ParentOption from '@/components/parentOption';


export default function ParentHome() {
  useEffect(() => {
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#EBF3FA');
  }, []);

  const router = useRouter();

  const handleClick = () => {
    router.push('/map?cloud=0');
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

            <div className='overflow-x-auto flex space-x-4 w-full'>
              <div className='h-[144px] min-w-[144px] bg-blue rounded-lg flex justify-start items-end p-4'>Article #1</div>
              <div className='h-[144px] min-w-[144px] bg-blue rounded-lg flex justify-start items-end p-4'>Book #1</div>
              <div className='h-[144px] min-w-[144px] bg-blue rounded-lg flex justify-start items-end p-4'>Podcast #1</div>
            </div>
          </div>

          <ParentOption title="Ask other parents"/> 
          <ParentOption title="Ask the experts"/> 

          <div className='space-y-3 w-full'>
            <div className='flex justify-between items-center'>
              <h6>Resources</h6>
              <button className='font-medium text-[20px] text-blue'>
                See All
              </button>
            </div>

            <div className='overflow-x-auto flex space-x-4 w-full'>
              <div className='h-[144px] min-w-[144px] bg-blue rounded-lg flex justify-start items-end p-4'>Articles</div>
              <div className='h-[144px] min-w-[144px] bg-blue rounded-lg flex justify-start items-end p-4'>Videos</div>
              <div className='h-[144px] min-w-[144px] bg-blue rounded-lg flex justify-start items-end p-4'>Podcasts</div>
            </div>
          </div>


          <ParentOption title="Trending Topics"/>
          <ParentOption title="Give us feedback"/>
        </div>

        <ParentNavbar home={true} insights={false}/>
    </main>
  )
}