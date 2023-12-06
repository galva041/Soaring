import { useState } from "react";
import { useRouter } from 'next/router';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const CorrectFillInBlank = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/badge');
    };
    
    return (
        <div className="h-full w-screen flex flex-col justify-end items-end z-3 absolute top-0 left-0 bg-black bg-opacity-25">
            <div className="flex flex-col justify-around items-start w-full h-1/3 rounded-t-3xl bg-white p-8">
                <h3>
                    ✅ &nbsp;&nbsp; You nailed it!
                </h3>

                <h2>
                    That was an amazing affirmation!
                </h2>

                <button className="btn-blue" onClick={handleClick}>
                    Finish
                    <HiOutlineArrowNarrowRight className='ml-2'/>
                </button>
            </div>
        </div>
    )
};

export default CorrectFillInBlank;