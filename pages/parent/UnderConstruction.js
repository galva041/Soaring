import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Image from 'next/image';

import { IoChevronBackOutline } from "react-icons/io5";
import { RiArrowRightSLine } from "react-icons/ri";

import ParentNavbar from '@/components/parentNavbar';

import construction from '@/public/konov2/construction.png';



export default function UnderConstruction() {
    useEffect(() => {
        document.querySelector('meta[name="theme-color"]').setAttribute('content', '#EBF3FA');
    }, []);

    const router = useRouter();

    return (
        <main 
        className="flex flex-col justify-start items-center bg-gray-blue w-screen h-screen pt-4"
        >
            <div className='z-10 flex w-screen pl-6 pr-10 mb-14'>
                <button className="btn-nav" onClick={() => router.back()}>
                <IoChevronBackOutline size={22} color="#0978D5"/>
                </button>
            </div>

            <div className='h-min w-3/4 sm:w-1/2 md:w-1/3 xl:w-1/4 mb-10'>
                <Image
                src={construction}
                alt="construction"
                className="object-contain"
                />
            </div>

            <div className='flex flex-col w-full text-center space-y-3'>
                <p>
                Uh oh! 😮
                </p>

                <h2 className='badge-desc'>
                It looks like this page is currently under construction! Check back later when we finish building this!
                </h2>
            </div>
            {/* </div> */}

            <ParentNavbar home={false} insights={true} />
        </main>
    )
}