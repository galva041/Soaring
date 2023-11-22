import { useState } from 'react';
import { useRouter } from 'next/router';

const Affirmation = () => {
    const router = useRouter();
    var [fourAns, setFourAns] = useState(false);
    const [inputValues, setInputValues] = useState({
        affirmation1: '',
        affirmation2: '',
        affirmation3: '',
    });

    const handleCheckClick = () => {
        setFourAns(true);
    };

    const handleClick = () => {
        router.push('/badge'); 
    };

    const areAffirmationsFilled = () => {
        return (
            inputValues.affirmation1.trim() &&
            inputValues.affirmation2.trim() &&
            inputValues.affirmation3.trim()
        );
    };
    
    return (
        <div className='w-full mb-3'>
            <h2>Affirmation 1</h2>
            <input type="text" 
            placeholder="Tap here to type"
            value={inputValues.affirmation1}
            onChange={(e) => setInputValues({
                ...inputValues,
                affirmation1: e.target.value,
            })}
            required
            className='mb-2'> 
            </input>

            <h2>Affirmation 2</h2>
            <input type="text" 
            className='mb-2'
            placeholder="Tap here to type"
            value={inputValues.affirmation2}
            onChange={(e) => setInputValues({
                ...inputValues,
                affirmation2: e.target.value,
            })}
            required> 
            </input>

            <h2>Affirmation 3</h2>
            <input type="text" 
            placeholder="Tap here to type"
            value={inputValues.affirmation3}
            onChange={(e) => setInputValues({
                ...inputValues,
                affirmation3: e.target.value,
            })}
            required> 
            </input>

            <button className='btn-blue mt-4' onClick={handleCheckClick}
                disabled={!areAffirmationsFilled()}
            >
                Check
            </button>

            {fourAns? 
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

export default Affirmation;
