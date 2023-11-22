import { useState } from "react";
import { useRouter } from 'next/router';

const TxtAnsPopUp = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/connie03');    
    };

    var [affAns, setAffAns] = useState(false);
    const [textareaValue, setTextareaValue] = useState('');

    const handleCheckClick = () => {
        setAffAns(true);
        // console.log('Checking textarea:', textareaValue);
    };
    
    return (
        <div className="w-screen px-6"> 
            <textarea rows="4" cols="50" type="text" 
                placeholder="For example, Connie can say “I’m intelligent.” Now you try! Tap here to type."
                className="mt-3 mb-10"
                value={textareaValue}
                onChange={(e) => setTextareaValue(e.target.value)}
                required>
            </textarea>

            <div className='grid grid-flow-row gap-3 w-full mt-1.5 z-0 relative'>
                <button className='btn-blue' onClick={handleCheckClick}
                    disabled={!textareaValue.trim()}
                >
                    Check
                </button>
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
        : null}
        </div>
    )
};

export default TxtAnsPopUp;