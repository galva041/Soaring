import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { IoChevronBackOutline } from "react-icons/io5";
import { RiArrowRightSLine, RiNotificationLine, RiSearchLine} from "react-icons/ri";
import { FiLock } from "react-icons/fi";

import ParentNavbar from '@/components/parentNavbar';

import DiscussAnyTopic from '@/public/parent/forum/DiscussAnyTopic.png';
import BuildingBodyConfidence from '@/public/parent/forum/BuildingBodyConfidence.png';
import FriendshipFallout from '@/public/parent/forum/FriendshipFallOut.png';
import HandlingBullying from '@/public/parent/forum/HandlingBullying.png';
import PersonalSpace from '@/public/parent/forum/PersonalSpace.png';

export default function AskOtherParents() {
    useEffect(() => {
        document.querySelector('meta[name="theme-color"]').setAttribute('content', '#EBF3FA');
    }, []);

    const router = useRouter();

    const navToUnderConst = () => {
        router.push('/parent/UnderConstruction');
    };

    const navToConflictRes = () => {
        router.push('/parent/AskOtherParents/ConflictResolution');
    };

    return (
        <main
        className="flex flex-col space-y-4 bg-gray-blue w-screen h-screen pt-4"
        > 
            <div className='flex justify-between items-center w-screen px-6 pt-2'>
                <button onClick={() => router.back()}>
                    <IoChevronBackOutline size={28} color="#777777"/>
                </button>

                <button>
                    <RiNotificationLine size={28} color="#777777" />
                </button>
            </div>

            <h5 className='w-full sm:w-[490px]'>
                Ask Other Parents 
            </h5> 

            <div className='flex justify-center items-center w-full sm:w-[490px] bg-white rounded-full pl-4 space-x-1'>
                <RiSearchLine size={28} color='#999999'/>
                <input type="text" placeholder="Search" 
                className='h-full w-full pl-1.5 py-2 pr-4 rounded-r-full'/>
            </div>

            <div className='overflow-x-auto flex space-x-2 w-full sm:w-[490px] pb-2.5'>
                <button className='btn-filter bg-[#FEC083] animate-[focus_1.4s_ease-in-out]'
                onClick={navToConflictRes}>
                    Conflict Resolution
                </button>
                <button className='btn-filter bg-[#B8E8D8]'>
                    <FiLock size={16} className='mr-1 text-black'/>
                    Teaching Boundaries
                </button>
                <button className='btn-filter bg-[#F9C4BA]'>
                    <FiLock size={16} className='mr-1 text-black'/>
                    Building Kindness
                </button>
            </div>

            <h5 className='w-full sm:w-[490px] text-[26px]'>
                Post on forum
            </h5> 

            <div className='relative inline-block'>
                <Image
                alt="DiscussAnyTopic"
                src={DiscussAnyTopic} 
                width='100%'
                height='100%'
                className="block object-contain self-center rounded-lg h-36 sm:h-52 w-auto"
                /> 
                <button className="absolute bottom-5 right-7 py-1.5 px-3 sm:bottom-7 sm:right-12 btn-blue w-max sm:py-3.5 sm:px-10">
                    Post Now
                </button>
            </div>

            <div className='flex justify-between items-center w-full sm:w-[490px]'>
                <h5 className='w-full text-[26px]'>
                    Trending topics
                </h5> 
                <button>
                    <RiArrowRightSLine className="text-3xl sm:text-3xl text-[#777777]"/>
                </button>
            </div>

            <div className='overflow-x-auto flex space-x-4 w-full sm:w-[490px]'>
                {/* onClick={navToUnderConst} */}
                <button className='flex-shrink-0'>
                    <Image
                    src={FriendshipFallout}
                    alt="FriendshipFallout"
                    width='100%'
                    height='100%'
                    className="object-cover h-36 w-auto sm:h-48 rounded-lg"
                    />
                </button>
                <button className='flex-shrink-0'>
                    <Image
                    src={HandlingBullying}
                    alt="HandlingBullying"
                    width='100%'
                    height='100%'
                    className="object-cover h-36 w-auto sm:h-48 rounded-lg"
                    />
                </button>
                <button className='flex-shrink-0'>
                    <Image
                    src={BuildingBodyConfidence}
                    alt="BuildingBodyConfidence"
                    className="object-cover h-36 w-auto sm:h-48 rounded-lg"
                    />
                </button>
                <button className='flex-shrink-0'>
                    <Image
                    src={PersonalSpace}
                    alt="PersonalSpace"
                    className="object-cover h-36 w-auto sm:h-48 rounded-lg"
                    />
                </button>
            </div>

            <ParentNavbar home={true} insights={false}/>
        </main>
    )
}