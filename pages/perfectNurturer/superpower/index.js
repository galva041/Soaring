import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Image from 'next/image'

import useSound from 'use-sound';
import pop from '@/public/sounds/pop.mp3';

import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import StatusBar from '@/components/statusBar'

export default function Superpower() {
    useEffect(() => {
        document.querySelector('meta[name="theme-color"]').setAttribute('content', '#FFFFFF');
    }, []);

    const router = useRouter();

    const { pet, accessory } = router.query;

    const [playPop] = useSound(pop); 
    const [selectedOption, setSelectedOption] = useState("Kindness");
    const handleOptionClick = (option) => {
        playPop();
        setSelectedOption(option);
    };

    const handleNextPage = () => {
        if (pet && accessory && selectedOption) {
            router.push(`name?pet=${pet}&accessory=${accessory}&power=${selectedOption}`);
        }
    };

    return (
        <main className='flex flex-col justify-center items-center space-y-5'>
        <StatusBar fraction='8/13' finish="0"/>
            <p className='text-[22px] sm:text-[24px] mb-4 w-full sm:w-[490px] pb-8'>
                What's their superpower?
            </p>

            <div className='relative h-min w-[50%] sm:w-[18%]'>
                <Image
                src={`/pet/shape/${pet}.png`}
                alt="selected pet"
                layout="responsive"
                width={100}
                height={75}
                className="object-contain"
                priority
                />
                <Image
                src={`/pet/accessories/${accessory}.png`}
                alt="selected accessory"
                layout="responsive"
                width={100}
                height={75}
                className="absolute top-0 left-0"
                priority
                />
                <Image
                src={`/pet/superpowers/cropped/${selectedOption}.png`}
                alt="selected superpower"
                layout="responsive"
                width={100}
                height={75}
                className="absolute top-[35%] left-[15%] transform scale-[0.3]"
                priority
                />
            </div>
            
            <div className="flex space-x-4 overflow-x-auto w-full sm:w-[490px] pb-4">
                {["Kindness", "Funny", "Positivity", "Encouraging", "Patience"].map((option, index) => (
                    <div key={index} 
                    className={`w-32 h-32 min-w-[8rem] min-h-[8rem] ${selectedOption === option ? 'btn-pet-option-pick border-blue-500' : 'btn-pet-option border-gray-300'}`}
                    onClick={() => handleOptionClick(option,index)}>
                        <Image
                        src={`/pet/superpowers/cropped/${option}.png`} 
                        alt="accessory"
                        className="object-contain w-full h-[60%]"
                        width={128}
                        height={128} 
                        />
                        <p className="text-[16px] font-semibold text-center mt-2">
                            {option}
                        </p>
                    </div>
                ))}
            </div>

            <button className='btn-blue mt-7 my-3 w-full sm:w-[490px]' 
            onClick={handleNextPage}
            >
                Next <HiOutlineArrowNarrowRight className={`ml-2`}/> 
            </button>
        </main>
    )
}
