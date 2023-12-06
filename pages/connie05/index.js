import Image from 'next/image'
import c04 from '../../public/kono/Kono04.png'
import StatusBar from '@/components/statusBar'
import { useRouter } from 'next/router';
import CorrectFillInBlank from '@/components/correctFillInBlank';
import { useState } from 'react';

const ForbiddenWords = ['poop', 'ugly', 'poo', 'hate', 'bad', 'mean', 'late', 'sit'];

export default function Connie05() {
  const [textareaValue, setTextareaValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setTextareaValue(inputValue);

    const containsForbiddenWords = ForbiddenWords.some(word => inputValue.toLowerCase().includes(word.toLowerCase()));

    if (containsForbiddenWords) {
      setErrorMessage('Please avoid using inappropriate words.');
    } else {
      setErrorMessage('');
    }
  };

  const router = useRouter();

  var [ans, setAns] = useState(false);
  const handleClick = () => {
    setAns(true);
  };

  var [word, setWord] = useState('');
  const changeWord = (newWord) => {
    setWord(newWord);
  };
  

  return (
    <main>

      <StatusBar fraction='5/5' finish="0"/>

      {/* <div className='flex flex-col w-full'> */}
      <p>
        You’re almost there! Finally, complete this sentence with a word about you.
      </p>
      {/* </div> */}

      <div className='h-min w-[74%] sm:w-[50%] md:w-[37%] lg:w-[30%] xl:w-[25%]'>
        <Image
          src={c04}
          alt="Connie04"
          className="object-contain"
        />
      </div>

      <div className='relative'>
        <p className='relative'>
          "I am _________."
        </p>
        <p className='z-3 absolute -top-1 left-[38%]'>{word}</p>
      </div>

      {/* <div className='grid grid-cols-2 w-full gap-x-10 gap-y-5 my-5'>
        <button className='btn-gray' onClick={() => changeWord('brave')}>brave</button>
        <button className='btn-gray' onClick={() => changeWord('smart')}>smart</button>
        <button className='btn-gray' onClick={() => changeWord('a leader')}>a leader</button>
        <button className='btn-gray' onClick={() => changeWord('important')}>important</button>
        <button className='btn-gray' onClick={() => changeWord('loved')}>loved</button>
        <button className='btn-gray' onClick={() => changeWord('creative')}>creative</button>
      </div> */}

        <textarea 
          rows="6"
          type="text"
          placeholder="An example would be using the word “brave” so that it reads “I am brave.”
          Now, try with a another word! Tap here to type."
          className="mt-3 mb-10"
          value={textareaValue}
          onChange={handleInputChange}
          required>
        </textarea>

        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      <button className='btn-blue' onClick={handleClick}>Check</button>
      {/* <TxtAnsPopUp currPage="Connie02"/> */}

      {ans? <CorrectFillInBlank/> 
      : null}
    </main>
  )
}