import { useState } from "react";
import { useRouter } from 'next/router';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const CorrectFillInBlank = ({lesson, pet, accessory, power, name}) => {
    const router = useRouter();

    const handleClick = () => {
        if (lesson === "1") {
            router.push('/break?breakNum=6');
        } else {
            router.push(`/perfectNurturer/break?pet=${pet}&accessory=${accessory}&power=${power}&name=${name}`);
        } 
    };

    switch(lesson) {
        case "1":
            var message = "Be sure to continue reminding yourself and others how great you are and spread the positivity!";
            break;
        case "2":
            var message = "Spreading kindess helps uplift those around us";
            break;
    }
    
    return (
        <div className="h-full w-screen flex flex-col justify-end items-end z-3 absolute top-0 left-0 bg-black bg-opacity-25">
            <div className="flex flex-col justify-around items-start w-full h-min rounded-t-3xl bg-white p-8">
                <h3>
                    ✅ &nbsp;&nbsp; You nailed it!
                </h3>

                <h2 className="mt-2.5 mb-6">
                    {message}
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