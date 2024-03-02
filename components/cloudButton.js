import { useRouter } from 'next/router'
import { IoChevronBackOutline,IoCheckmark } from "react-icons/io5";
import { RiHome2Line } from "react-icons/ri";
import { IoMdStarOutline } from "react-icons/io";
import { HiOutlineLockClosed } from "react-icons/hi2";


const CloudButton = ({lesson, route = '/map', locked = true, t, l}) => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/' + route);
    };
    
    return (
        <button className={`absolute flex ${t} ${l} w-max flex-col justify-center items-center`} onClick={locked? null: handleClick}>
          <div className={`flex flex-col justify-center items-center w-16 h-16 rounded-full ${locked? 'bg-bar-gray' : 'bg-blue'}`}>
            <div className='border-4 border-white p-3 rounded-full'>
                {locked? <HiOutlineLockClosed size={22} color="#777777"/>
                : <IoMdStarOutline size={22} color="#FFFFFF"/>}
            </div>
          </div>

          <h4 className='font-medium mt-2'>{lesson}</h4>
        </button>
    )
};

export default CloudButton;