import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { RiLightbulbLine, RiFilter3Line, RiArrowRightSLine, RiTimeLine,RiStarLine,RiCheckLine, RiArrowDownSLine } from "react-icons/ri";

import ParentNavbar from '@/components/parentNavbar';
import Topic from '@/components/topic';
import Week from '@/components/week';

import badge from '@/public/badges/Badge.png';
import confetti from '@/public/insights/KonoConfetti.png';


export default function ParentInsights() {
  useEffect(() => {
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#EBF3FA');
  }, []);

  const router = useRouter();

  const navToUnderConst = () => {
    router.push('/parent/UnderConstruction');
  };

  return (
    <main
      className="relative flex flex-col z-0 bg-gray-blue h-fit w-screen pt-4 space-y-5 overflow-hidden"
    > 
      <div className='w-full sm:w-[490px]'>
        <h5 className='self-start z-0'>Child's Dashboard</h5> 
      </div>

        <div className='flex justify-center items-center space-x-3 bg-white p-4 rounded-lg drop-shadow-md z-0'>
            <RiLightbulbLine size={32} color="#F0B23E"/> 
            <h7 className="text-black text-[14px] font-medium" >
                The last activity your child completed was on <span className='font-semibold'>Confidence</span>.
            </h7>
        </div>

      <div className='w-full sm:w-[490px]'>
        <h6 className='self-start z-0'>This Week's Progress</h6>
      </div>

        <div className='mt-5 h-min w-3/5 sm:w-1/4 xl:w-1/5 animate-grow-shrink z-0'>
          <Image
          src={badge}
          alt="badge"
          className="object-contain"
          />
        </div>

        <div className='animate-fly-in absolute transform z-10 -right-12 top-[13%]'>
        <Image
        src={confetti}
        alt="confetti"
        className="object-contain w-40 md:w-52 h-auto -rotate-[30deg]"
        /> 
        </div>

        <h2 className="text-black text-[14px] font-medium z-0 sm:w-[490px]">
          This week's earned badge was the Affirmation Badge. This activity focuses on... <span><button className='text-blue'>Show more</button></span>
        </h2>

        <button className='flex justify-between items-center w-full sm:w-[490px] space-x-3 bg-white p-4 rounded-lg drop-shadow-md z-0'
        onClick={navToUnderConst}>
          <div className='flex justify-center items-center space-x-3'>
            <div className='w-[35px] h-[35px] bg-[#5582AC] rounded-full flex justify-center items-center'>✨</div> 
            <h2>
              Read about the next activity
            </h2>
          </div>

          <RiArrowRightSLine size={24} color="#313131"/>
        </button>

        <button className='flex justify-between items-center w-full sm:w-[490px] space-x-3 bg-white p-4 rounded-lg drop-shadow-md z-0'
        onClick={navToUnderConst}>
          <div className='flex justify-center items-center space-x-3'>
            <div className='w-[35px] h-[35px] bg-[#FEF3C6] rounded-full flex justify-center items-center'>🎉</div> 
            <h2>
              See all your child's badges
            </h2>
          </div>

          <RiArrowRightSLine size={24} color="#313131"/>
        </button>

        <div className='flex justify-between items-center w-full sm:w-[490px] z-0 space-x-3'>
          <div className='bg-white rounded-lg h-[134px] w-[164px] sm:w-[50%] flex flex-col justify-center items-start p-4 drop-shadow-md'>
            <div className='flex w-full sm:space-x-1.5'>
              <h2>Average Screen Time</h2>

              <div className='h-[28px] min-w-[28px] bg-[#AA73F2] rounded-full flex justify-center items-center'>
                <RiTimeLine size={16} color="#FFFFFF"/>
              </div>
            </div>

            <h7 className='font-bold text-black text-[36px]'>10
              <span className='font-medium text-txt-gray text-[18px] ml-1'>mins</span>
            </h7>
          </div>

          <div className='bg-white rounded-lg h-[134px] w-[164px] sm:w-[50%] flex flex-col justify-center items-start p-4 drop-shadow-md z-0'>
            <div className='flex w-full'>
              <h2>Badges Earned</h2>
              <div className='h-[28px] min-w-[28px] bg-pink rounded-full flex justify-center items-center'>
                <RiStarLine size={16} color="#FFFFFF"/>
              </div>
            </div>

            <h7 className='font-bold text-black text-[36px]'>3
              <span className='font-medium text-txt-gray text-[18px] ml-1'>badges</span>
            </h7>
          </div>
        </div>

        <div className='bg-white p-4 rounded-lg w-full sm:w-[490px] drop-shadow-md space-y-1.5 z-0'> 
          <h2>Weekly Activity Tracker</h2>
          <Week />
        </div>

        <div className='bg-white p-4 rounded-lg w-full sm:w-[490px] drop-shadow-md z-0'>
          <h2>Weekly Goal Progress</h2>
          <div className='flex justify-between items-center space-x-3'>
            <div className="w-full h-[8px] bg-bar-gray rounded-full flex justify-between items-center">
              <div className="h-full w-[100%] bg-green rounded-l-full"></div>
              <div className="min-w-[20px] h-[20px] rounded-full flex justify-center items-center bg-green">
                  <RiCheckLine size={14} color="white"/>
              </div>
            </div>
            <h2 className='text-[12px]'>100%</h2>
          </div>
          <h7 className='font-medium text-[12px] text-txt-gray'>
            Your child completed their weekly goal of <span className='font-medium text-black'>completing 1 activity per week</span>!
          </h7>
        </div>

        {/* <div className='grid grid-cols-2 justify-items-start gap-2'>
            <div className='flex space-x-4 justify-center items-center'>
                <div className='h-[32px] w-[32px] bg-pink rounded-lg'></div>
                <h2>Confidence</h2>
            </div>
            <div className='flex space-x-4 justify-center items-center'>
                <div className='h-[32px] w-[32px] bg-purple rounded-lg'></div>
                <h2>Leadership</h2>
            </div>
            <div className='flex space-x-4 justify-center items-center'>
                <div className='h-[32px] w-[32px] bg-leaf-green rounded-lg'></div>
                <h2>Resilience</h2>
            </div>
            <div className='flex justify-center items-center'>
                  <div className='h-[32px] w-[32px] bg-outline-gray rounded-lg'></div>
                  <h2 className='ml-4'>Not Started</h2>
                <RiArrowDownSLine size={20} color="#313131"/>
            </div>
        </div> */}

        <div className='flex justify-between w-full sm:w-[490px] z-0'>
          <h6 className='self-start'>Topics</h6>

          <button className='flex justify-center items-center space-x-1'>
            <RiFilter3Line size={20} color="#777777"/>
            <h2 className='text-txt-gray'>Sort</h2>
            <RiArrowDownSLine size={20} color="#777777"/>
          </button>
        </div>

        <div className='w-full sm:w-[490px] space-y-4 pb-24 z-0'>
          <Topic title="Confidence" started={true} route='/parent/insights/confidence'/>
          <div className="w-full border-t-2 border-[#D2D2D2]"></div>
          <Topic title="Resilience" started={false}/>
          <div className="w-full border-t-2 border-[#D2D2D2]"></div>
          <Topic title="Leadership" started={false}/>
          <div className="w-full border-t-2 border-[#D2D2D2]"></div>
          <Topic title="Communication" started={false}/>
          <div className="w-full border-t-2 border-[#D2D2D2]"></div>
          <Topic title="Empathy" started={false}/>
          <div className="w-full border-t-2 border-[#D2D2D2]"></div>
          <Topic title="Adaptability" started={false}/>
          <div className="w-full border-t-2 border-[#D2D2D2]"></div>
          <Topic title="Decision Making" started={false}/>
          <div className="w-full border-t-2 border-[#D2D2D2]"></div>
          <Topic title="Problem Solving" started={false}/>
          <div className="w-full border-t-2 border-[#D2D2D2]"></div>
          <Topic title="Teamwork" started={false}/>
          <div className="w-full border-t-2 border-[#D2D2D2]"></div>
          <Topic title="Conflict Resolution" started={false}/>
        </div>

        <ParentNavbar home={false} insights={true} />
    </main>
  )
}