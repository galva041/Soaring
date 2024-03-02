import { useRouter } from 'next/router';
import Image from 'next/image'
import badge from '../../public/badges/Badge.png'
import StatusBar from '@/components/statusBar'
import useSound from 'use-sound';
import { IoChevronBackOutline } from "react-icons/io5";
import { RiHome2Line, RiCoinFill } from "react-icons/ri";


export default function Badge() {
  const router = useRouter();
  // const data = router.query;
  // console.log(data);
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

      <div className='flex flex-col justify-between items-center mb-20'>
        <div className='mt-5 h-min w-3/4 sm:w-1/2 md:w-1/3 xl:w-1/4'>
        {/* <div className='h-min w-[40%]'> */}
          <Image
          src={badge}
          alt="badge"
          className="object-contain"
          />
        </div>

        <div className='flex flex-col w-full text-center mb-14'>
          <p>
              Positivity Badge
          </p>

          <h2 className='badge-desc'>
              Congratulations! You’ve earned a badge in your confidence journey. Keep up the good work!
          </h2>
        </div>
      </div>

      <div className='flex flex-col w-full justify-between items-center'>
        <button className='btn-blue' onClick={handleClick}>Return to Map</button>
      </div>

    </main>
  )
}
