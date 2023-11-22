import { useRouter } from 'next/router'
import { IoChevronBackOutline,IoCheckmark } from "react-icons/io5";
import { RiHome2Line } from "react-icons/ri";


const StatusBar = ({fraction, finish}) => {
    const router = useRouter();

    var dynamicWidth = {};
    var dynamicColor = { backgroundColor: '#E0E0E0',};

    if (fraction === "0/4") {
        dynamicWidth = { width: '10px',}
    } else if (fraction === "1/4") {
        dynamicWidth = { width: '25%',}
    } else if (fraction === "2/4") {
        dynamicWidth = { width: '50%',}
    } else if (fraction === "3/4") {
        dynamicWidth = { width: '75%',}
    } else {
        dynamicWidth = { width: '100%',}
        dynamicColor = { backgroundColor: '#00C49A',}
    }


    return (
        <header className="flex w-full h-7 sm:h-10 justify-between items-center mt-5 mb-7">

            <div className='flex'>
                <button className="btn-nav" onClick={() => router.back()}>
                    <IoChevronBackOutline size={22} color="#0978D5"/>
                </button>
                
                <button className="btn-nav" onClick={() => router.push('/')}>
                    <RiHome2Line size={22} color="#0978D5" />
                </button>
            </div>

            <h4 className="px-2.5">{fraction}</h4>

            <div className="w-full h-1/3 bg-bar-gray rounded-full flex justify-between items-center">
                <div style={ dynamicWidth } className="h-full bg-green rounded-full">
                </div>
                <div className="w-6 h-6 rounded-full right-6 absolute flex justify-center items-center" 
                style={ dynamicColor }>
                    {finish==="1" && <IoCheckmark size={20} color="white"/>}
                </div>
            </div>
        </header>
    )
};

export default StatusBar;