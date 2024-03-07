import { useRouter } from 'next/router';
import Image from 'next/image';
import break1Kono from '../../public/konov2/break/Break01.png';
import break2Kono from '../../public/konov2/break/Break02.png';
import break3Kono from '../../public/konov2/break/Break03.png';
import break4Kono from '../../public/konov2/break/Break04.png';
import break5Kono from '../../public/konov2/break/Break05.png'; 
import break6Kono from '../../public/videos/KonoGame06.mp4'; 
import StatusBar from '@/components/statusBar'
import useSound from 'use-sound';
import { IoChevronBackOutline } from "react-icons/io5";
import { RiHome2Line, RiCoinFill } from "react-icons/ri";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import next from 'next';


export default function Break() {
    const router = useRouter();

    const { breakNum } = router.query;
    // console.log('Break Number:', breakNum);

    var totalCoins = 0;
    var message = "error";
    var KonoImg;
    var nextPage = "";
    var btnText = 'Next';

    switch (breakNum) {
        case "1":
            totalCoins = 10;
            message = "Kono is starting to feel better. Keep up the good work!";
            KonoImg = break1Kono;
            nextPage = "connie02";
            break;
        case "2":
            totalCoins = 20;
            message = "Awesome job! Kono’s confidence is boosting with your help!";
            KonoImg = break2Kono;
            nextPage = "connie03";
            break;
        case "3":
            totalCoins = 30;
            message = "Amazing work! Kono now feels confident to rebuild his rocket.";
            KonoImg = break3Kono;
            nextPage = "break?breakNum=4";
            break;
        case "4": 
            totalCoins = 30;
            message = "Kono needs 30 coins to rebuild his rocket, can you help him?";
            KonoImg = break4Kono;
            nextPage = "break?breakNum=5";
            btnText = "Yes, let's rebuild it!";
            break;
        case "5": 
            totalCoins = 0;
            message = "Thank you for helping Kono! He was able to rebuild his confidence and his rocket with your help!";
            KonoImg = break5Kono;
            nextPage = "connie04";
            btnText = "Next";
            break;
        case "6": 
            totalCoins = 15;
            message = "Kono’s rocket is now ready to fly and he’s on his way home!";
            KonoImg = break6Kono;
            nextPage = "survey";
            btnText = "Submit Feedback";
            break;
    }

    const handleClick = () => {
        router.push('/' + nextPage);
    };

    return (
        <main>
            <div className='flex justify-between w-screen pt-4 pl-6 pr-10'>
                <div className='flex'>
                    <button className="btn-nav" onClick={() => router.back()}>
                        <IoChevronBackOutline size={22} color="#0978D5"/>
                    </button>
                    
                    <button className="btn-nav" onClick={() => router.push('/')}>
                        <RiHome2Line size={22} color="#0978D5"/>
                    </button>
                </div>

                <div className='flex space-x-1.5 justify-around items-center px-4 h-9 border-2 border-yellow rounded-full'>
                    <h1 className='text-black'>{totalCoins}</h1>

                    <RiCoinFill size={20} color="#FBAF00"/>
                </div>
            </div>

            <div className='flex flex-col mt-10 mb-8 space-y-9 justify-center items-center'>
                {breakNum < 4 && 
                <div className={`flex space-x-3 justify-center items-center`}>
                    <h1 className='text-black text-[37.5px]'>
                        +10
                    </h1>

                    <RiCoinFill size={37} color="#FBAF00"/>
                </div>}

                {breakNum == 4 && 
                <p className={`text-left self-start w-[95%] mb-[18%]`}>
                    {message}
                </p>}

                {breakNum < 6 &&
                <div className={`h-min ${breakNum >= 5? 'w-3/5': 'w-4/5'} sm:w-1/3 md:w-1/3 lg:w-1/4`}>
                    <Image
                    src={KonoImg}
                    alt="breakImg"
                    className="object-contain"
                    />
                </div>}

                {breakNum == 6 && 
                <video
                autoPlay
                loop
                muted
                playsInline
                className="w-[65%] sm:w-[44%] md:w-[36%] lg:w-[28%] h-auto">
                    <source src={KonoImg} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>}

                {breakNum != 4 && 
                <p className={`text-center w-full`}>
                    {message}
                </p>}
            </div>

            <button className="btn-blue" onClick={handleClick}>
                {btnText} <HiOutlineArrowNarrowRight className={`${breakNum == 4? 'hidden' : 'block'} ml-2`}/>
            </button>

        </main>
    )
}
