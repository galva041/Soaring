import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { IoChevronBackOutline } from "react-icons/io5";
import { RiHome2Line, RiSearchLine } from "react-icons/ri";

import ParentNavbar from '@/components/parentNavbar';


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
      className="relative bg-gray-blue h-screen pt-4"
    >
        <div className='z-10 flex w-screen pl-6 pr-10'>
            <button className="btn-nav" onClick={() => router.push('/childorparent')}>
            <IoChevronBackOutline size={22} color="#0978D5"/>
            </button>

            <button className="btn-nav" onClick={() => router.push('/')}>
                <RiHome2Line size={22} color="#0978D5" />
            </button>
        </div>

        <div className='flex items-center justify-around space-x-14 w-screen'>
            <h5>Hey there! 👋</h5> 
            <RiSearchLine size={28} color='#313131'/>
        </div>

        <ParentNavbar home={true} insights={false}/>
    </main>
  )
}