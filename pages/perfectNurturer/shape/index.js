import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Image from 'next/image'

import useSound from 'use-sound';
import pop from '@/public/sounds/pop.mp3';

import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import StatusBar from '@/components/statusBar'

export default function Shape() {
    useEffect(() => {
        document.querySelector('meta[name="theme-color"]').setAttribute('content', '#FFFFFF');
    }, []);

    const [playPop] = useSound(pop); 
    const [selectedOption, setSelectedOption] = useState('Blue');
    const handleOptionClick = (option) => {
        playPop();
        setSelectedOption(option);
    };

    const router = useRouter();
    const handleNextPage = () => {
        if (selectedOption) {
            // router.push(`/accessories?pet=${encodeURIComponent(selectedColorOption)}`);
            router.push(`accessories?pet=${selectedOption}`);
        }
    };

    return (
        <main className='flex flex-col justify-center items-center space-y-5'>
        <StatusBar fraction='6/13' finish="0"/>
            <p className='text-[22px] sm:text-[24px] mb-4 w-full sm:w-[490px]'>
                Close your eyes. What colour and shape is it?
            </p>

            <div className='h-min w-[50%] sm:w-[18%]'>
                <Image
                src={`/pet/shape/${selectedOption}.png`}
                alt="selected pet"
                layout="responsive"
                width={100}
                height={75}
                className="object-contain"
                />
            </div>
            
            <div className="flex space-x-4 overflow-x-auto w-full sm:w-[490px] pb-4">
                {['Blue', 'Pink', 'Purple', 'Yellow'].map((option, index) => (
                    <div key={index}
                    className={`w-32 h-32 min-w-[8rem] min-h-[8rem] ${selectedOption === option ? 'btn-pet-option-pick border-blue-500' : 'btn-pet-option border-gray-300'}`}
                    onClick={() => handleOptionClick(option)}>
                        <Image
                        src={`/pet/shape/${option}.png`}
                        alt="pet"
                        className="object-contain w-full h-[60%]"
                        width={128}  
                        height={128}
                        priority
                        />
                        <p className="text-[16px] font-semibold text-center mt-2">
                            {option}
                        </p>
                    </div>
                ))}
            </div>

            <button className='btn-blue mt-7 my-3 w-full sm:w-[490px]' 
            onClick={handleNextPage}>
                Next <HiOutlineArrowNarrowRight className={`ml-2`}/> 
            </button>
        </main>
    )
}
