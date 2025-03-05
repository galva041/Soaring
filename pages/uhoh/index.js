import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Image from 'next/image'
import construction from '../../public/konov2/construction.png'
import StatusBar from '@/components/statusBar'
import useSound from 'use-sound';
import { IoChevronBackOutline } from "react-icons/io5";
import { RiHome2Line, RiCoinFill } from "react-icons/ri";


export default function UhOh() {
  useEffect(() => {
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#FFFFFF');
  }, []);

  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  return (
    <main>

        <div className='flex justify-between w-screen pt-4 pl-6 pr-10'>
            <div className='flex'>
                <button className="btn-nav" onClick={() => router.back()}>
                    <IoChevronBackOutline size={22} color="#0978D5"/>
                </button>
                
                <button className="btn-nav" onClick={() => router.push('/')}>
                    <RiHome2Line size={22} color="#0978D5"/>
                </button>
            </div>

            <div className='flex space-x-1.5 justify-around items-center px-4 h-9 border-2 border-yellow rounded-full'>
                <h1 className='text-black'>15</h1>

                <RiCoinFill size={20} color="#FBAF00"/>
            </div>
        </div>

        <div className='flex flex-col justify-between items-center mb-20 w-full sm:w-[490px]'>
            <div className='mt-14 h-min w-3/4'>
                <Image
                src={construction}
                alt="construction"
                className="object-contain w-full"
                />
            </div>

            <div className='flex flex-col w-full text-center mb-16'>
                <p>
                    Uh oh! 😮
                </p>

                <h2 className='badge-desc'>
                    It looks like the next activity is currently under construction! Check back later when we finish building this cool activity!
                </h2>
            </div>
        </div>

        <div className='flex flex-col w-full sm:w-[490px] justify-between items-center'>
            <button className='btn-blue' onClick={handleClick}>Return to Home</button>
        </div>

    </main>
  )
}
