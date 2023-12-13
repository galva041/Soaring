import { useRouter } from 'next/router'
import { IoChevronBackOutline,IoCheckmark } from "react-icons/io5";
import { RiHome2Line } from "react-icons/ri";


const StatusBar = ({fraction, finish}) => {
    const router = useRouter();

    var dynamicWidth = {};
    var dynamicColor = { backgroundColor: '#E0E0E0',};

    switch (fraction) {
        case '0/8':
            dynamicWidth = { width: '10px' };
            break;
        case '1/8':
            dynamicWidth = { width: '12.5%' };
            break;
        case '2/8':
            dynamicWidth = { width: '25%' };
            break;
        case '3/8':
            dynamicWidth = { width: '37.5%' };
            break;
        case '4/8':
            dynamicWidth = { width: '50%' };
            break;
        case '5/8':
            dynamicWidth = { width: '62.5%' };
            break;
        case '6/8':
            dynamicWidth = { width: '75%' };
            break;
        case '7/8':
            dynamicWidth = { width: '87.5%' };
            break;
        default:
            dynamicWidth = { width: '100%' };
            dynamicColor = { backgroundColor: '#00C49A' };
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