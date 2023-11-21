import { useState } from "react";
import { useRouter } from 'next/router';

const AnsPopUp = ({currPage}) => {
    const router = useRouter();

    const handleClick = () => {
        if (currPage === "Connie01") {
            router.push('/connie02');
        } else {
            router.push('/connie04');
        }
    };

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
                    {/* onClick={handleClick} */}
                </div>
            : 
                <div className='grid grid-flow-row gap-3 w-full mb-4 z-0 relative'>
                    <button className='btn-gray' onClick={() => setInc(true)}>Dogs have tails.</button>
                    <button className='btn-gray' onClick={() => setInc(true)}>Pasta is from Italy.</button>
                    <button className='btn-gray' onClick={() => setInc(true)}>There are pyramids in Egypt.</button>
                    <button className='btn-gray' onClick={() => setCor(true)}>I am a good friend.</button>
                    {/* onClick={handleClick} */}
                </div>
            }

        {incAns? 
            <div className="h-full w-screen flex flex-col justify-end items-end z-3 absolute top-0 left-0 bg-black bg-opacity-25">
            <div className="flex flex-col justify-around items-start w-full h-2/5 rounded-t-3xl bg-white p-8">
                    <h3>
                        🤔 &nbsp;&nbsp;Hm... that’s not quite right.
                    </h3>

                    <h2>
                        That statement is true, but that doesn’t tell you how amazing you are!
                    </h2>

                    <button className="btn-blue" onClick={() => setInc(false)}>Try Again</button>
                </div>
            </div>

        : corAns? 
            <div className="h-full w-screen flex flex-col justify-end items-end z-3 absolute top-0 left-0 bg-black bg-opacity-25">
                <div className="flex flex-col justify-around items-start w-full h-2/5 rounded-t-3xl bg-white p-8">
                    <h3>
                        ✅ &nbsp;&nbsp;That’s a great affirmation! 
                    </h3>

                    {currPage === "Connie01" ? 
                        <h2>
                            Kindness is an awesome trait to have and being kind to those around you definitely goes a long way!
                        </h2>
                    : 
                        <h2>
                            Being a good friend is an amazing trait to have! It’s important to be supportive to others through the good and bad times.
                        </h2>
                    }

                    <button className="btn-blue" onClick={handleClick}>Next</button>
                </div>
            </div>

        : null}
        </div>
    )
};

export default AnsPopUp;