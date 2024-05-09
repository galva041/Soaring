import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Image from 'next/image';

import { IoChevronBackOutline } from "react-icons/io5";
import { RiHome2Line, RiSearchLine, RiArrowRightSLine } from "react-icons/ri";
import { FaCircle } from "react-icons/fa";

import ParentNavbar from '@/components/parentNavbar';
import ParentOption from '@/components/parentOption';

import badge from '@/public/badges/Badge.png'


export default function Confidence() {
  useEffect(() => {
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#EBF3FA');
  }, []);

  const router = useRouter();

  return (
    <main
      className="relative bg-gray-blue w-screen h-fit pt-4"
    >
        <div className='z-10 flex w-screen pl-6 pr-10'>
            <button onClick={() => router.back()}>
            <IoChevronBackOutline size={22} color="#777777"/>
            </button>
        </div>

        <h5 className='self-start my-4'>Confidence</h5> 

        <div className='w-full mb-7 space-y-1'>
            <div className='flex justify-between w-full px-1'>
                <h2>Progress</h2>
                <h2>3 of 4 badges earned</h2>
            </div>
            <div className='w-full h-6 bg-bar-gray rounded-full flex justify-between items-center'>
                <div className="w-3/4 min-h-full bg-green rounded-l-full"></div> 
            </div>
        </div>

        <div className='flex justify-center items-center space-x-4 bg-white p-4 rounded-lg drop-shadow-md'>
            <div className='h-min w-2/5 md:w-1/6'>
                <Image
                src={badge}
                alt="badge"
                className="object-contain"
                />
            </div>

            <h2>This week your child earned the Affirmation Badge!</h2>
        </div>

        <div className='flex justify-center items-center space-x-2 bg-white w-full p-4 rounded-lg drop-shadow-md my-7'>
            <div className='flex-col'>
                <h2>Learn tips on speaking to your child about Confidence</h2>
                <button className='bg-blue text-white font-semibold rounded-full px-4 py-2 text-[14px] mt-2'>
                    Learn More
                </button>
            </div>

            <div className='min-h-[106px] min-w-[70px] bg-green rounded-full'></div>
        </div>

        <h6 className='self-start mb-6'>Responses to the activity</h6>

        <div className='flex flex-col space-y-5 pb-24 w-full'>
            <div className='flex justify-between items-center w-full space-x-5 bg-white rounded-lg drop-shadow-md h-[104px] pr-4'>
                <div className='flex justify-center items-center space-x-4'>
                    <div className='min-w-[100px] h-[104px] rounded-lg bg-[#a9d0f0] flex justify-center items-center'></div> 
                    <h2>
                        Your child’s affirmations for themselves
                    </h2>
                </div>

                <RiArrowRightSLine size={24} color="#313131"/>
            </div>

            <div className='flex justify-between items-center w-full space-x-5 bg-white rounded-lg drop-shadow-md h-[104px] pr-4'>
                <div className='flex justify-center items-center space-x-4'>
                    <div className='min-w-[100px] h-[104px] rounded-lg bg-[#cce7be] flex justify-center items-center'></div> 
                    <h2>
                        Your child’s affirmations for Kono
                    </h2>
                </div>

                <RiArrowRightSLine size={24} color="#313131"/>
            </div>
        </div> 

        <ParentNavbar home={true} insights={false}/>
    </main>
  )
}