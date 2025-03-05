import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import landing from '../public/videos/Landing1.mp4';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#EBF3FA');
  }, []);

  const router = useRouter();

  const handleClick = () => {
    router.push('/childorparent');
  };

  return (
    <main
      className="bg-gray-blue h-screen pt-10"
    >
      {/* <p>text at the top</p>
      <button className='btn-blue'>button</button>
      <button className='btn-gray'>button</button>
      <button className='btn-transparent'>button</button>
      <h1>defined word</h1>
      <h2>definition + answer desc</h2>
      <h2 className='.badge-desc'>badge desc</h2>
      <h3>answer header</h3>
      <input type="text" placeholder="type here"/> */}

    {/* <div className='h-min w-[73%] sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[26%] my-[9%] sm:my-[10%] md:my-3 lg:my-6'>
      <Image
        src={landing}
        alt="landing"
        className="object-contain"
        priority
      />
    </div> */}

    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-[80%] sm:w-[50%] md:w-[40%] lg:w-[30%]  h-auto">
      <source src={landing} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
      
    <p className='font-poppins'>Welcome to</p>
    <p className='text-[54px]'>Soaring</p>
    <p className='text-center mb-[5%] lg:mb-10 w-full sm:w-[490px]'>
      Hi there, nice to meet you! We can’t wait for you to test our fun, new app! 😄 
    </p>

    <button className='btn-blue mt-10 mb-[14%] lg:mb-10 w-full sm:w-[490px]' onClick={handleClick}>
      Get Started 
      <HiOutlineArrowNarrowRight className='ml-2'/>
    </button>
    
    </main>
  )
}
