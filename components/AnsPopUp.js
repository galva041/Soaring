import { useState } from "react";
import { useRouter } from 'next/router';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Cormorant } from "next/font/google";

const AnsPopUp = ({currPage}) => {
    const router = useRouter();

    const handleClick = () => {
        switch (currPage) {
            case 'Connie01':
                router.push('/connie02');
                break;
            default:
                router.push('/connie04');
        }
    };

    var incMessage = "Hmm... that’s not quite right.";
    var corMessage = "error";
    var incSentence = "error";
    var corSentence = "error";

    switch (currPage) {
        case 'Connie01':
            incSentence = "That statement is true, but that doesn’t tell Kono how amazing they are!";
            corMessage = "That’s a great sentence!";
            corSentence = "Kindness is an awesome trait to have and being kind to yourself and those around you definitely goes a long way!";
            break;
        case 'Connie03':
            incSentence = "That statement is true, but that doesn’t tell Kono how amazing they are!";
            corMessage = "That’s a terrific sentence! ";
            corSentence = "Being a good friend is an amazing trait to have! It’s important to be supportive to others through the good and bad times.";
            break;
    }

    var [incAns, setInc] = useState(false);
    var [corAns, setCor] = useState(false);
    
    return (
        <div className="w-screen px-6 ">
            {currPage === "Connie01" ? 
                <div className='grid grid-flow-row gap-3 w-full mb-4 z-0 relative'>
                    <button className='btn-gray' onClick={() => setInc(true)}>Trees are green.</button>
                    <button className='btn-gray' onClick={() => setCor(true)}>I am kind.</button>
                    <button className='btn-gray' onClick={() => setInc(true)}>Jupiter is a planet.</button>
                    <button className='btn-gray' onClick={() => setInc(true)}>Sometimes I get sunburnt.</button>
                </div>
            : 
                <div className='grid grid-flow-row gap-3 w-full mb-4 z-0 relative'>
                    <button className='btn-gray' onClick={() => setInc(true)}>Dogs have tails.</button>
                    <button className='btn-gray' onClick={() => setInc(true)}>Pasta is from Italy.</button>
                    <button className='btn-gray' onClick={() => setInc(true)}>There are pyramids in Egypt.</button>
                    <button className='btn-gray' onClick={() => setCor(true)}>I am a good friend.</button>
                </div>
            }

        {incAns? 
            <div className="h-full w-screen flex flex-col justify-end items-end z-3 absolute top-0 left-0 bg-black bg-opacity-25">
                <div className="flex flex-col justify-around items-start w-full h-min rounded-t-3xl bg-white p-8">
                    <h3>
                        🤔 &nbsp;&nbsp;{incMessage}
                    </h3>

                    <h2 className="mt-2.5 mb-6">
                        {incSentence}
                    </h2>

                    <button className="btn-blue" onClick={() => setInc(false)}>Try Again</button>
                </div>
            </div>

        : corAns? 
            <div className="h-full w-screen flex flex-col justify-end items-end z-3 absolute top-0 left-0 bg-black bg-opacity-25">
                <div className="flex flex-col justify-around items-start w-full h-min rounded-t-3xl bg-white py-8 px-7">
                    <h3>
                        ✅ &nbsp;&nbsp;{corMessage}
                    </h3>

                    <h2 className="mt-2.5 mb-6">
                        {corSentence}
                    </h2>

                    <button className="btn-blue" onClick={handleClick}>Next
                    <HiOutlineArrowNarrowRight className='ml-2'/></button>
                </div>
            </div>

        : null}
        </div>
    )
};

export default AnsPopUp;