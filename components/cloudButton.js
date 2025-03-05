import { useRouter } from 'next/router'
import Image from 'next/image';
import { IoChevronBackOutline,IoCheckmark } from "react-icons/io5";
import { RiHome2Line } from "react-icons/ri";
import { IoMdStarOutline } from "react-icons/io";
import { HiOutlineLockClosed } from "react-icons/hi2";

import OurPositivity from '../public/konov2/clouds/OurPositivity.png'
import OurAmazingMind from '../public/konov2/clouds/OurAmazingMind.png'
import MyHero from '../public/konov2/clouds/MyHero.png'
import Positivity from '../public/konov2/clouds/Positivity.png'


const CloudButton = ({lesson, route = '/map', complete = false, locked = true, t, l}) => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/' + route);
    };
    
    return (
      <div className={`relative flex justify-center items-center w-fit ${t} ${l}`} >
        <div className='z-9 h-min w-[250px]'>
          <Image
          src={lesson == "Our Positivity"? OurPositivity : lesson == "My Hero"? MyHero : lesson == "Perfect Nurturer"? OurAmazingMind: Positivity}
          alt="cloud"
          className="object-contain"
          />
        </div>

        <button className={`absolute z-10 flex w-max flex-col justify-center items-center`} onClick={locked? null: handleClick}>
          <div className={`flex flex-col justify-center items-center w-16 h-16 rounded-full ${locked? 'bg-bar-gray' : complete? 'bg-green': 'bg-blue'}`}>
            <div className='border-4 border-white p-3 rounded-full'>
                {locked? <HiOutlineLockClosed size={22} color="#777777"/>
                : <IoMdStarOutline size={22} color="#FFFFFF"/>}
            </div>
          </div>

          <h4 className='font-medium mt-2'>{lesson}</h4>
        </button>
      </div>
    )
};

export default CloudButton;