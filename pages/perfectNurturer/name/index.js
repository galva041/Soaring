import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Image from 'next/image';

import useSound from 'use-sound';
import pop from '@/public/sounds/pop.mp3';

import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import StatusBar from '@/components/statusBar';

const ForbiddenWords = ['poo', 'ugly', 'hate', 'bad', 'mean', 'stupid', 'dumb', 'fuck', 'dick', 'fat', 'stink', 'smelly', 'annoy', 'bitch', 'shit'];
const names = ["Bono", "Nono", "Pono", "Zono", "Rono"];

export default function Name() {
    const router = useRouter();
    const { pet, accessory, power } = router.query;

    const [textareaValue, setTextareaValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [answered, setAnswered] = useState(false);
    const [currentName, setCurrentName] = useState(0);
    const [playPop] = useSound(pop); 
 
    useEffect(() => {
        document.querySelector('meta[name="theme-color"]').setAttribute('content', '#FFFFFF');
    }, []);

    const handleNextName = () => {
        playPop();
        if (currentName < names.length - 1) {
            setCurrentName(currentName + 1);
        } else {
            setCurrentName(0);
        }

        setErrorMessage('');
        setTextareaValue(names[currentName]);
        setAnswered(true); 
    };

    const handleInputChange = (e) => {
        const inputValue = e.target.value;

        if (inputValue.length <= 12) {
            setTextareaValue(inputValue);
        }

        setTextareaValue(inputValue);
        setAnswered(true);

        const containsForbiddenWords = ForbiddenWords.some(word => inputValue.toLowerCase().includes(word.toLowerCase()));

        if (containsForbiddenWords) {
            setAnswered(false);
            setErrorMessage('Hey, let’s use nice words, okay?');
        } else {
            setErrorMessage('');
        }
    };

    const handleNextPage = () => {
        if (pet && accessory && textareaValue) {
            router.push(`character?pet=${pet}&accessory=${accessory}&power=${power}&name=${textareaValue}`);
        }
    };

    return (
        <main className='flex flex-col justify-center items-center space-y-5'>
            <StatusBar fraction='9/13' finish="0" />
            <p className='text-[22px] sm:text-[24px] mb-4 w-full sm:w-[490px]'>
                What would you name this friend?
            </p>

            <div className='relative h-min w-[50%] sm:w-[18%]'>
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
            
            <div className='flex justify-center items-center w-full sm:w-[490px] space-x-2'>
                <input 
                    type="text"
                    value={textareaValue}
                    onChange={handleInputChange}
                    placeholder="Type name here!"
                    maxLength="10"
                    required
                />
                <p className='font-medium text-txt-gray text-sm'>{textareaValue.length}/10</p>
            </div>

            <button className='btn-not-pick' onClick={handleNextName}>
                Choose for me!
            </button>

            {errorMessage && 
                <p className='text-[#FC6C69] text-[20px] absolute z-3 bottom-[15%]'>
                    {errorMessage}
                </p>
            }

            <button className='btn-blue w-[88%] absolute z-2 bottom-[6%] sm:w-[490px]' 
                onClick={handleNextPage}
                disabled={!answered}>
                Submit
            </button>
        </main>
    );
}