import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { IoChevronBackOutline } from "react-icons/io5";
import { RiHome2Line, RiSearchLine, RiLineChartLine, RiArrowRightSLine, RiCloseLine } from "react-icons/ri";
import { FaCircle } from "react-icons/fa";

import ParentNavbar from '@/components/parentNavbar';
import ParentOption from '@/components/parentOption';

import articles from '@/public/resources/Articles.png';
import videos from '@/public/resources/Videos.png';
import podcasts from '@/public/resources/Podcasts.png';
import goodInside from '@/public/resources/GoodInside.png';
import tedTalk from '@/public/resources/TedTalk.png';
import bebe from '@/public/resources/BringingUpBebe.png';
import insightsPopUp from '@/public/parent/InsightsPopUp.png';


export default function ParentHome() {
  useEffect(() => {
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#EBF3FA');
  }, []);

  const router = useRouter();

  var { firstLoad } = router.query;

  const [isPopupVisible, setIsPopupVisible] = useState(firstLoad === 'Y');

  const navToUnderConst = () => {
    router.push('/parent/UnderConstruction');
  };

  const navToInsights = () => {
    router.push('parent/insights/');
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
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

      <div className='flex items-center justify-between w-full sm:w-[490px] mt-3 mb-5'>
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

      <button className='flex items-center justify-between bg-white p-4 w-full sm:w-[490px] rounded-lg drop-shadow-md mb-6'
      onClick={navToInsights}>
        <RiLineChartLine className="text-5xl sm:text-4xl text-[#4EAC5E]"/> 
        <h7 className="text-black text-[14px] font-medium pl-1.5 text-start" >
            Your child’s weekly insights report is ready to view!
        </h7>
        <RiArrowRightSLine className="text-4xl sm:text-3xl text-[#313131]"/>
      </button>

      <div className='flex-col justify-center item-center w-full sm:w-[490px] space-y-5 mb-28'>
        <div className='space-y-3 w-full'>
          <div className='flex justify-between items-center'>
            <h6>Handpicked for you</h6>
            <button className='font-medium text-[20px] text-blue'>
              See All
            </button>
          </div>

          <div className='overflow-x-auto flex space-x-4 w-full pb-2'>
            <Link href='https://www.goodinside.com/podcast/all/' target='_blank' className='flex-shrink-0'>
              <Image
              src={goodInside}
              alt="goodinside"
              className="object-cover h-36 w-auto sm:h-48 rounded-lg animate-[focus_1.4s_ease-in-out]"
              />
            </Link>
            <Link href='https://pameladruckerman.com/bringing-up-bebe/' target='_blank' className='flex-shrink-0'>
              <Image
              src={bebe}
              alt="bebe"
              className="object-cover h-36 w-auto sm:h-48 rounded-lg"
              />
            </Link>
            <Link href='https://www.youtube.com/watch?v=CyElHdaqkjo&ab_channel=TED' target='_blank' className='flex-shrink-0'>
              <Image
              src={tedTalk}
              alt="tedtalk"
              className="object-cover h-36 w-auto sm:h-48 rounded-lg"
              />
            </Link>
          </div>
        </div>

        <ParentOption title="Ask other parents" link={0}/> 
        <ParentOption title="Ask the experts" link={2}/> 

        <div className='space-y-3 w-full'>
          <div className='flex justify-between items-center'>
            <h6>Resources</h6>
            <button className='font-medium text-[20px] text-blue'>
              See All
            </button>
          </div>

          <div className='overflow-x-auto flex space-x-4 w-full pb-2'>
            <button onClick={navToUnderConst} className='flex-shrink-0'>
              <Image
              src={articles}
              alt="videos"
              width='100%'
              height='100%'
              className="object-cover h-36 w-auto sm:h-48 rounded-lg"
              />
            </button>
            <button onClick={navToUnderConst} className='flex-shrink-0'>
              <Image
              src={videos}
              alt="videos"
              className="object-cover h-36 w-auto sm:h-48 rounded-lg"
              />
            </button>
            <button onClick={navToUnderConst} className='flex-shrink-0'>
              <Image
              src={podcasts}
              alt="podcasts"
              className="object-cover h-36 w-auto sm:h-48 rounded-lg"
              />
            </button>
          </div>
        </div>


        <ParentOption title="Trending topics" link={1}/>
        <ParentOption title="Give us feedback" link={3}/>
      </div>

      <ParentNavbar home={true} insights={false}/>

      {isPopupVisible && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 z-10'>
          <div className='relative flex flex-col items-center justify-center bg-white mx-8 sm:w-[450px] px-6 rounded-xl space-y-4 pb-8 pt-4 animate-[focus_1.4s]'>
            <button className="btn-nav self-end"
            onClick={handleClosePopup}>
              <RiCloseLine size={28} color="#0978D5"/>
            </button>

            <Image
              src={insightsPopUp}
              alt="insights"
              width='100%'
              height='100%'
              className="object-cover h-36 w-auto sm:h-48"
            />

            <h7 className="text-black text-[17px] font-medium px-1 sm:py-1.5 text-center" >
              Your child’s weekly insights are ready! Would you like to view them now?
            </h7>
            
            <button className='btn-blue' onClick={navToInsights}>View Now</button>
            <button className='btn-transparent' onClick={handleClosePopup}>Maybe Later</button>
          </div>
        </div>
      )}
    </main>
  )
}