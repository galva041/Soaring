import { useRouter } from 'next/router';
import Image from 'next/image';
import confetti from '@/public/insights/KonoConfetti.png';
import StatusBar from '@/components/statusBar'
import useSound from 'use-sound';
import { IoChevronBackOutline } from "react-icons/io5";
import { RiHome2Line, RiCoinFill } from "react-icons/ri";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import next from 'next';


export default function Break() {
    const router = useRouter();
    const { pet, accessory, power, name } = router.query;

    var totalCoins = 0;
    var message = "error";
    var KonoImg;
    var nextPage = "";
    var btnText = 'Next';

    const handleClick = () => {
        router.push('/survey?lesson=2');
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
                    <h1 className='text-black'>30</h1>

                    <RiCoinFill size={20} color="#FBAF00"/>
                </div>
            </div>

            <div className='flex flex-col mt-10 mb-8 space-y-9 justify-center items-center w-full sm:w-[490px]'>
                <div className={`flex space-x-3 justify-center items-center`}>
                    <h1 className='text-black text-[37.5px]'>
                        +15
                    </h1>

                    <RiCoinFill size={37} color="#FBAF00"/>
                </div>

                <div className='relative h-min w-[50%] sm:w-[55%] mb-4 mt-1'>
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

                <div className='animate-fly-in absolute transform z-10 -right-12 top-[13%]'>
                    <Image
                    src={confetti}
                    alt="confetti"
                    className="object-contain w-40 md:w-80 h-auto -rotate-[34deg]"
                    /> 
                </div>

                <p className='text-center'>
                    <span className='text-blue underline'>{name}</span> is now ready to join Kono in exploring the rest of the planet!
                </p>
            
            </div>

            <button className="btn-blue w-full sm:w-[490px]" onClick={handleClick}>
                Submit Feedback <HiOutlineArrowNarrowRight className='block ml-2'/>
            </button>

        </main>
    )
}
