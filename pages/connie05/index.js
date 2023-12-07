import Image from 'next/image'
import c04 from '../../public/kono/Kono04.png'
import StatusBar from '@/components/statusBar'
import { useRouter } from 'next/router';
import CorrectFillInBlank from '@/components/correctFillInBlank';
import { useState } from 'react';

const ForbiddenWords = ['poo', 'ugly', 'hate', 'bad', 'mean', 'stupid', 'dumb'];

export default function Connie05() {
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

      {/* <div className='relative'> */}
        <p className='my-6'>
          "I am _________."
        </p>
        {/* <p className='z-3 absolute -top-1 left-[38%]'>{word}</p> */}
      {/* </div> */}

      <textarea 
        rows="3"
        cols="30"
        type="text"
        placeholder="An example would be using the word “brave” so that it reads “I am brave.”
        Now, try with a another word! Tap here to type."
        className="w-[95%] h-[105px]"
        value={textareaValue}
        onChange={handleInputChange}
        required>
      </textarea>

      {errorMessage && 
        <p className='text-[#FC6C69] text-[20px] absolute z-3 bottom-[11%]'>
          {errorMessage}
        </p>}

      <button className='btn-blue w-[88%] absolute z-2 bottom-[2%]' 
      onClick={handleClick}
      disabled={!answered}>
        Check
      </button>
      {/* <TxtAnsPopUp currPage="Connie02"/> */}

      {ans? <CorrectFillInBlank/> 
      : null}
    </main>
  )
}