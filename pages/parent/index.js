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

        <div className='flex items-center justify-between w-screen px-5 mt-3 mb-5'>
          <div className='flex items-center space-x-2'>
            <h5>
              Hey there! 
            </h5> 
            <span className='animate-wave text-[32px]'>👋</span>
          </div>

          <RiSearchLine size={28} color='#313131'/>
        </div>

        <div className='flex-col justify-center item-center space-y-5 mb-14'>
          <ParentOption title="Listening Corner" />
          <ParentOption title="Reading Corner"/>
          <ParentOption title="Ask Other Parents"/> 

          <div className='space-y-3'>
            <h6>Ask the Experts</h6>

            <div className='overflow-x-auto flex space-x-4 w-[344px]'>
              <div className='flex-col justify-center items-center'>
                <FaCircle size={72} color='#777777'/>
                <h4 className='text-center pt-2'>Bilkis</h4>
              </div>

              <div className='flex-col justify-center items-center'>
                <FaCircle size={72} color='#777777'/>
                <h4 className='text-center pt-2'>Dr. Diane</h4>
              </div>

              <div className='flex-col justify-center items-center'>
                <FaCircle size={72} color='#777777'/>
                <h4 className='text-center pt-2'>Chris</h4>
              </div>

              <div className='flex-col justify-center items-center'>
                <FaCircle size={72} color='#777777'/>
                <h4 className='text-center pt-2'>Dr. Paul</h4>
              </div>

              <div className='flex-col justify-center items-center'>
                <FaCircle size={72} color='#777777'/>
                <h4 className='text-center pt-2'>Dr. Zara</h4>
              </div>

              <div className='flex-col justify-center items-center'>
                <FaCircle size={72} color='#777777'/>
                <h4 className='text-center pt-2'>Hannah</h4>
              </div>
              
            </div>

            <button className='btn-blue'>
              Ask the Experts
            </button>
          </div>


          <ParentOption title="Trending Topics"/>

          <div className="border-t border-1.5 w-[344px] border-outline-gray "></div>

          <ParentOption title="Other Resources"/>
        </div>

        <ParentNavbar home={true} insights={false}/>
    </main>
  )
}