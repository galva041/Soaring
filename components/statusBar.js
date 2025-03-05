import { useRouter } from 'next/router'
import { IoChevronBackOutline,IoCheckmark } from "react-icons/io5";
import { RiHome2Line } from "react-icons/ri";
import { useState } from 'react';


const StatusBar = ({fraction="1/1", finish, textColor='text-black'}) => {
    const router = useRouter();

    var dynamicWidth = {};
    var dynamicColor = { backgroundColor: '#E0E0E0',};

    const [numerator, denominator] = fraction.split('/').map(Number);
    const result = (numerator / denominator) * 100;
    var widthPercent = result.toFixed(2) + '%'; 

    dynamicWidth = { width: widthPercent };

    if (widthPercent === '100.00%') {
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

            <h4 className={`px-2.5 ${textColor}`}>{fraction}</h4>

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