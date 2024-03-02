import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';
import { IoChevronBackOutline } from "react-icons/io5";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function Instructions() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/map');
  };

  return (
    <main
      className="bg-gray-blue h-screen pt-4 flex flex-col items-start"
    >
        <button className="btn-nav self-start" onClick={() => router.back()}>
            <IoChevronBackOutline size={22} color="#0978D5"/>
        </button>

        <p className='text-[32px] self-start mt-4 mb-5'>How to Play</p>

        <div>
            <div className='flex justify-around mb-5'>
                <div className='bg-green rounded-full h-16 w-16 flex justify-center items-center'>
                    <p className='text-[32px]'>01</p>
                </div>

                <p className='w-2/3'>We will introduce you to our friend, Kono!</p>
            </div>

            <div className='flex justify-around mb-5'>
                <div className='bg-yellow rounded-full h-16 w-16 flex justify-center items-center'>
                    <p className='text-[32px]'>02</p>
                </div>

                <p className='w-2/3'>Help Kono achieve their goals using your skills.</p>
            </div>

            <div className='flex justify-around'>
                <div className='bg-pink rounded-full h-16 w-16 flex justify-center items-center'>
                    <p className='text-[32px]'>03</p>
                </div>

                <p className='w-2/3'>Have fun! We want to show you and Kono how amazing you both are!</p>
            </div>
        </div>
        
        <button className='btn-blue mt-4 md:mt-48' onClick={handleClick}>
            Let's Go!
            <HiOutlineArrowNarrowRight className='ml-2'/>
        </button>
    </main>
  )
}
