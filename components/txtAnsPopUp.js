import { useState } from "react";
import { useRouter } from 'next/router';

const TxtAnsPopUp = ({currPage}) => {
    const router = useRouter();

    const handleClick = () => {
        if (currPage === "Connie02") {
            router.push('/connie03');
        } else if (currPage === "Connie04") {
            router.push('/badge');
        }
        
    };

    var [affAns, setAffAns] = useState(false);
    var [fourAns, setFourAns] = useState(false);

    const handlePopUp = () => {

        
        if (currPage === 'Connie02') {
            setAffAns(true);
        } else if (currPage === 'Connie04') {
            setFourAns(true);
        }
    };
    
    return (
        <div className="w-screen px-6 ">
            <div className='grid grid-flow-row gap-3 w-full mt-1.5 z-0 relative'>
                <button className='btn-blue' onClick={handlePopUp}>Check</button>
            </div>

        {affAns? 
            <div className="h-full w-screen flex flex-col justify-end items-end z-3 absolute top-0 left-0 bg-black bg-opacity-25">
                <div className="flex flex-col justify-around items-start w-full h-1/4 rounded-t-3xl bg-white p-8">
                    <h3>
                        ✅ &nbsp;&nbsp; Great job! 
                    </h3>

                    <h2 className="mb-3">
                        That was a good affirmation!
                    </h2>

                    <button className="btn-blue" onClick={handleClick}>Next</button>
                </div>
            </div>

        : fourAns? 
        <div className="h-full w-screen flex flex-col justify-end items-end z-3 absolute top-0 left-0 bg-black bg-opacity-25">
        <div className="flex flex-col justify-around items-start w-full h-1/4 rounded-t-3xl bg-white p-8">
                    <h3>
                        ✅ &nbsp;&nbsp; Fantastic Job!
                    </h3>

                    <h2 className="mb-3">
                        Those are great affirmations!
                    </h2>

                    <button className="btn-blue" onClick={handleClick}>Finish</button>
                </div>
            </div>

        : null}
        </div>
    )
};

export default TxtAnsPopUp;