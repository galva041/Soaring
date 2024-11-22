import Image from 'next/image'
import StatusBar from '@/components/statusBar'
import { useRouter } from 'next/router';
import CorrectFillInBlank from '@/components/correctFillInBlank';
import { useState } from 'react';
import useSound from 'use-sound';

import correctDing from '../../../public/sounds/correct.mp3';
const ForbiddenWords = ['poo', 'ugly', 'hate', 'bad', 'mean', 'stupid', 'dumb', 'fuck', 'dick', 'fat', 'stink', 'smelly','annoy','bitch','shit'];

export default function Advice() {
    const [play] = useSound(correctDing);
    const [textareaValue, setTextareaValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [answered, setAnswered] = useState(false);

    const handleInputChange = (e) => {
        setAnswered(true);
        const inputValue = e.target.value;
        setTextareaValue(inputValue);

        const containsForbiddenWords = ForbiddenWords.some(word => inputValue.toLowerCase().includes(word.toLowerCase()));

        if (containsForbiddenWords) {
            setAnswered(false);
            setErrorMessage('Hey, let’s use nice words okay?');
        } else {
            setErrorMessage('');
        }
    };

    const router = useRouter();
    const { pet, accessory, power, name } = router.query;

    var [ans, setAns] = useState(false);
    const handleClick = () => {
        setAns(true);
        play();
    };
    
    return (
        <main className='flex flex-col '>
            <StatusBar fraction='12/13' finish="1"/>

            <p className='w-full sm:w-[490px] text-[20px] sm:text-[22px]'>
                If <span className='text-blue underline'>{name}</span> could give Kono one piece of advice, what would it be? Check out a few examples below!
            </p>

            <div className='relative h-min w-[30%] sm:w-[20%] lg:w-[10%]'>
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
            
            <div className='flex flex-col space-y-4 w-full sm:w-[490px] my-5'>
                <p className='relative text-[16px] bg-[#FBD0CC] w-[85%] rounded-xl py-2 px-4 text-center before:content-[""] before:absolute before:w-0 before:h-0 before:border-l-[10px] before:border-l-transparent before:border-r-[10px] before:border-r-transparent before:border-t-[10px] before:border-t-[#FBD0CC] before:bottom-[-10px] before:left-5'>"You're awesome!"</p>
                <p className='relative text-[16px] bg-[#B3D9F9] w-[85%] rounded-xl py-2 px-4 text-center self-end before:content-[""] before:absolute before:w-0 before:h-0 before:border-l-[10px] before:border-l-transparent before:border-r-[10px] before:border-r-transparent before:border-t-[10px] before:border-t-[#B3D9F9] before:bottom-[-10px] before:right-5'>"Great Job! Keep it up!"</p>
                <p className='relative text-[16px] bg-[#C1CAF3] w-[85%] rounded-xl py-2 px-4 text-center before:content-[""] before:absolute before:w-0 before:h-0 before:border-l-[10px] before:border-l-transparent before:border-r-[10px] before:border-r-transparent before:border-t-[10px] before:border-t-[#C1CAF3] before:bottom-[-10px] before:left-5'>"You can do this"</p>
            </div>

            <textarea 
                rows="3"
                cols="30"
                type="text"
                placeholder="Now, you try! Tap here to type."
                className="w-full sm:w-[490px] h-[80px] "
                value={textareaValue}
                onChange={handleInputChange}
                required>
            </textarea>

            {errorMessage && 
                <p className='text-[#FC6C69] text-[20px] absolute z-3 bottom-16 sm:bottom-[18%]'>
                {errorMessage}
                </p>}
            
            <button className='btn-blue w-full mt-12 sm:mt-32 sm:w-[490px]'
            onClick={handleClick}
            disabled={!answered}>
                Submit
            </button>

            {ans? <CorrectFillInBlank lesson="2" pet={pet} accessory={accessory} power={power} name={name}/> 
            : null}
        </main>
    )
}