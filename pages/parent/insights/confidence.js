import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Image from 'next/image';

import { IoChevronBackOutline } from "react-icons/io5";
import { RiArrowRightSLine } from "react-icons/ri";

import ParentNavbar from '@/components/parentNavbar';

import badge from '@/public/badges/Badge.png';
import mirror from '@/public/insights/ChildAffirmations.png';
import childAff from '@/public/insights/KonoAffirmations.png';
import kono2 from '@/public/insights/kono 2.png'


export default function Confidence() {
  useEffect(() => {
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#EBF3FA');
  }, []);

  const router = useRouter();

  const navToUnderConst = () => {
    router.push('/parent/UnderConstruction');
  };

  return (
    <main
      className="relative bg-gray-blue w-screen h-fit pt-4"
    >
        <div className='z-10 flex w-screen pl-6 pr-10'>
            <button onClick={() => router.back()}>
            <IoChevronBackOutline size={22} color="#777777"/>
            </button>
        </div>

        <div className='sm:w-[490px]'>
            <h5 className='self-start my-4'>Confidence</h5> 
        </div>

        <div className='w-full sm:w-[490px] mb-7 space-y-1'>
            <div className='flex justify-between w-full px-1'>
                <h2>Progress</h2>
                <h2>3 of 4 badges earned</h2>
            </div>
            <div className='w-full h-6 bg-bar-gray rounded-full flex justify-between items-center'>
                <div className="w-3/4 min-h-full bg-green rounded-l-full animate-load transform origin-left"></div> 
            </div>
        </div>

        <div className='flex justify-center items-center space-x-4 bg-white p-4 rounded-lg drop-shadow-md sm:w-[490px]'>
            <div className='h-min w-2/5 md:w-1/6'>
                <Image
                src={badge}
                alt="badge"
                className="object-contain"
                />
            </div>

            <h2>This week your child earned the Affirmation Badge!</h2>
        </div>

        <div className='flex justify-center items-center space-x-1 bg-white w-full sm:w-[490px] p-4 rounded-lg drop-shadow-md my-7'>
            <div className='flex-col'>
                <h2>Learn tips on speaking to your child about Confidence</h2>
                <button className='bg-blue text-white font-semibold rounded-full px-4 py-2 text-[14px] mt-2'
                onClick={navToUnderConst}>
                    Learn More
                </button>
            </div>

            <Image 
            src={kono2}
            alt='kono2'
            className='object-contain h-[80px] w-[75px]'/>
        </div>
        
        <div className='sm:w-[490px]'>
            <h6 className='self-start mb-6'>Responses to the activity</h6>
        </div>

        <div className='flex flex-col space-y-5 pb-24 w-full sm:w-[490px]'>
            <button className='flex justify-between items-center text-left w-full bg-white rounded-lg drop-shadow-md h-[104px] pr-4'
            onClick={navToUnderConst}>
                <div className='flex justify-center items-center space-x-4'>
                    <Image
                    src={mirror}
                    alt="mirror"
                    className="object-cover h-[104px] w-[104px] rounded-lg"
                    />
                    <h2 className='text-[14px]'>
                        Your child’s affirmations for themselves
                    </h2>
                </div>

                <RiArrowRightSLine size={24} color="#313131"/>
            </button>

            <button className='flex justify-between items-center text-start w-full sm:w-[490px] bg-white rounded-lg drop-shadow-md h-[104px] pr-4'
            onClick={navToUnderConst}>
                <div className='flex justify-center items-center space-x-4'>
                    <Image
                    src={childAff}
                    alt="childaff"
                    className="object-cover h-[104px] w-[104px] rounded-lg"
                    />
                    <h2 className='text-[14px]'>
                        Your child’s affirmations for Kono
                    </h2>
                </div>

                <RiArrowRightSLine size={24} color="#313131"/>
            </button>
        </div> 

        <ParentNavbar home={true} insights={false}/>
    </main>
  )
}