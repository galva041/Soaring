import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { IoChevronBackOutline } from "react-icons/io5";
import { RiHome2Line, RiSearchLine } from "react-icons/ri";

import ParentNavbar from '@/components/parentNavbar';


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
      className="relative bg-gray-blue h-screen pt-4"
    >
        <div className='flex items-center justify-around space-x-14 w-screen'>
            <h5>Child's Dashboard</h5> 
        </div>

        <ParentNavbar home={false} insights={true} />
    </main>
  )
}