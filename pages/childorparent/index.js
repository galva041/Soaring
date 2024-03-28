import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import parent from '../../public/parent/parent.png'
import { IoChevronBackOutline } from "react-icons/io5";
import { RiHome2Line, RiOpenArmLine, RiParentLine } from "react-icons/ri";


export default function ChildOrParent() {
  useEffect(() => {
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#EBF3FA');
  }, []);

  const router = useRouter();

  return (
    <main
      className="bg-gray-blue h-screen space-y-9 pt-4"
    >
        <div className='z-10 flex w-screen pl-6 pr-10'>
            <button className="btn-nav" onClick={() => router.back()}>
            <IoChevronBackOutline size={22} color="#0978D5"/>
            </button>

            <button className="btn-nav" onClick={() => router.push('/')}>
                <RiHome2Line size={22} color="#0978D5" />
            </button>
        </div>

        <p>
            We’re so happy to have you here! Before we begin, can you tell us about yourself?
        </p>

        <div className=''>
            <Image
            src={parent}
            alt="parent"
            className="object-contain"
            />
        </div>


        {/* <div className=''> */}
            <button className='btn-blue space-x-3 flex items-center' onClick={() => router.push('/map?cloud=0')}>
                <RiOpenArmLine size={24} color='#FFFFFF'/>
                <h1 className='text-[16px] font-semibold text-white'>I'm a child</h1>
            </button>

            <button className='btn-blue space-x-2.5 flex items-center' onClick={() => router.push('/parent/parentHome')}>
                <RiParentLine size={24} color='#FFFFFF'/>
                <h1 className='text-[16px] font-semibold text-white'>I'm a parent</h1>
            </button>
        {/* </div> */}
        
    </main>
  )
}