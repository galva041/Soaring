import { useState } from "react";
import { useRouter } from 'next/router';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const CorrectFillInBlank = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/survey');
    };
    
    return (
        <div className="h-full w-screen flex flex-col justify-end items-end z-3 absolute top-0 left-0 bg-black bg-opacity-25">
            <div className="flex flex-col justify-around items-start w-full h-min rounded-t-3xl bg-white p-8">
                <h3>
                    ✅ &nbsp;&nbsp; You nailed it!
                </h3>

                <h2 className="mt-2.5 mb-6">
                    Be sure to continue reminding yourself and others how great you are and spread the positivity!
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