import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Image from 'next/image'
import badge from '../../public/badges/Badge.png'
import { IoChevronBackOutline } from "react-icons/io5";
import { RiHome2Line, RiCoinFill } from "react-icons/ri";


export default function Badge() {
  useEffect(() => {
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#FFFFFF');
  }, []);

  const router = useRouter();

  const handleClick = () => {
    router.push('/map?cloud=1');
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
        <div className='mt-5 h-min w-3/4'>
            <Image
            src={badge}
            alt="badge"
            className="object-contain w-full"
            />
        </div>

        <div className='flex flex-col w-full text-center my-8'>
          <p>
            Meet Kono Badge
          </p>

          <h2 className='badge-desc'>
            Congratulations! You’ve earned a badge in your confidence journey. Keep up the good work!
          </h2>
        </div>
      </div>

      <div className='flex flex-col w-full justify-between items-center w-full sm:w-[490px]'>
        <button className='btn-blue' onClick={handleClick}>Return to Map</button>
      </div>
    </main>
  )
}