import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Image from 'next/image'

import useSound from 'use-sound';
import pop from '@/public/sounds/pop.mp3';

import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import StatusBar from '@/components/statusBar'

export default function Character() {
    useEffect(() => {
        document.querySelector('meta[name="theme-color"]').setAttribute('content', '#FFFFFF');
    }, []);

    const router = useRouter();
    const { pet, accessory, power, name } = router.query;

    const [answered, setAnswered] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Kindness");
    const [playPop] = useSound(pop); 
    
    const handleOptionClick = (option) => {
        playPop();
        setSelectedOption(option);
        setAnswered(true);
    };

    const handleNextPage = () => {
        if (pet && accessory && power && name) {
            router.push(`advice?pet=${pet}&accessory=${accessory}&power=${power}&name=${name}`);
        }
    };

    return (
        <main className='flex flex-col justify-center items-center'>
            <StatusBar fraction='11/13' finish="0"/>
            <p className='text-[22px] sm:text-[24px] w-full sm:w-[490px]'>
                How does <span className='text-blue underline'>{name}</span> help Kono feel brave?
            </p>

            <div className='relative h-min w-[35%] sm:w-[15%] mb-4 mt-1'>
                <Image
                src={`/pet/shape/${pet}.png`}
                alt="selected pet"
                layout="responsive"
                width={100}
                height={75}
                className="object-contain"
                />
                <Image
                src={`/pet/accessories/${accessory}.png`}
                alt="selected accessory"
                layout="responsive"
                width={100}
                height={75}
                className="absolute top-0 left-0"
                />
                <Image
                src={`/pet/superpowers/cropped/${power}.png`}
                alt="selected superpower"
                layout="responsive"
                width={100}
                height={75}
                className="absolute top-[35%] left-[15%] transform scale-[0.2]"
                />
            </div>
            
            <div className="grid grid-rows-2 grid-flow-col gap-4">
                {["Holds his hand", "Gives him magic words", 
                "Stands strong beside him", "Cheers loudly for him"].map((option, index) => (
                    <div key={index} 
                    className={`w-32 h-32 min-w-[9rem] min-h-[8rem] px-1.5 ${selectedOption === option? 'btn-pet-option-pick' : 'btn-pet-option'}`}
                    onClick={() => handleOptionClick(option,index)}>
                        <p className='text-[40px]'>{index === 0 && "🤝"}
                        {index === 1 && "🪄"}
                        {index === 2 && "👬"}
                        {index === 3 && "📣"}</p>
                        <p className='text-[14px]'>{option}</p>
                    </div>
                ))}
            </div>

            <button className='btn-blue my-6 my-3 w-full sm:w-[490px]' 
            onClick={handleNextPage}
            disabled={!answered}>
                Next <HiOutlineArrowNarrowRight className={`ml-2`}/> 
            </button>
        </main>
    )
}
