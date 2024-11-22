import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Image from 'next/image'
import rocket from '../../public/videos/KonoGame02.mp4';
import StatusBar from '@/components/statusBar'
// import Definition from '@/components/definition';


export default function RocketBroke() {
  useEffect(() => {
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#FFFFFF');
  }, []);

  const router = useRouter();

  const handleClick = () => {
    router.push('/connie011');
  };
  return (
    <main>
      <StatusBar fraction='2/9' finish="0"/>

      <div className='flex flex-col w-full sm:w-[490px]'>
        <p className='text-[22px] sm:text-[24px] mb-4'>
          On his way home, the rocket broke!
        </p>
        
      </div>

      {/* <div className='md:pt-[12%] md:pb-[5%] lg:p-0 h-min w-[65%] sm:w-[50%] md:w-[50%] lg:w-[30%] xl:w-[26%]'
      >
        <Image
          src={c0}
          alt="Connie0"
          className="object-contain"
        />
      </div> */}

      <video
      autoPlay
      loop
      muted
      playsInline
      className="w-[70%] sm:w-[40%] md:w-[30%] lg:w-[25%] xl:w-[22%] h-auto">
        <source src={rocket} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className='flex flex-col w-full sm:w-[490px] justify-center items-center'>
        <button className='btn-blue mt-7 my-3' onClick={handleClick}>Oh no!</button>
        <button className='btn-transparent' onClick={() => router.push('/')}>Maybe Later</button>
      </div>

    </main>
  )
}
