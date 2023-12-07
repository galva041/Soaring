import Image from 'next/image'
import c02 from '../../public/kono/Kono02.png'
import StatusBar from '@/components/statusBar'
import { useRouter } from 'next/router';
import CorrectPopUp from '@/components/correctPopUp';
import { useState } from 'react';


export default function Connie02() {
  const router = useRouter();

  var [ans, setAns] = useState(null);
  // const handleClick = () => {
  //   setAns(true);
  // };

  var [word, setWord] = useState('');
  const checkWord = (word) => {
    // setWord(newWord);
    if (word === "running" || word === "late") {
      setAns(false);
    } else {
      setAns(true);
    }
  };

  return (
    <main>
      <StatusBar fraction='2/5' finish="0"/>

      <p>
        Can you help Kono finish this affirmation?
      </p>

      <div className='h-min w-[74%] sm:w-[50%] md:w-[37%] lg:w-[30%] xl:w-[25%]'>
        <Image
          src={c02}
          alt="Connie02"
          className="object-contain"
        />
      </div>

      <p>
        "I am _________."
      </p>

      <div className='grid grid-cols-2 w-full gap-x-10 gap-y-5 my-5'>
        <button className='btn-gray' onClick={() => checkWord('running')}>running</button>
        <button className='btn-gray' onClick={() => checkWord('smart')}>smart</button>
        <button className='btn-gray' onClick={() => checkWord('a leader')}>a leader</button>
        <button className='btn-gray' onClick={() => checkWord('important')}>important</button>
        <button className='btn-gray' onClick={() => checkWord('loved')}>loved</button>
        <button className='btn-gray' onClick={() => checkWord('late')}>late</button>
      </div> 
      
      {/* <div className='relative'>
        <p className='relative'>
          "I am _________."
        </p>
        <p className='z-3 absolute -top-1 left-[38%]'>{word}</p>
      </div> */}

      {/* <div className='grid grid-cols-2 w-full gap-x-10 gap-y-5 my-5'>
        <button className='btn-gray' onClick={() => changeWord('running')}>running</button>
        <button className='btn-gray' onClick={() => changeWord('smart')}>smart</button>
        <button className='btn-gray' onClick={() => changeWord('a leader')}>a leader</button>
        <button className='btn-gray' onClick={() => changeWord('important')}>important</button>
        <button className='btn-gray' onClick={() => changeWord('loved')}>loved</button>
        <button className='btn-gray' onClick={() => changeWord('late')}>late</button>
      </div> */}

      {/* <button className='btn-blue' onClick={handleClick}>Check</button> */}
      {/* <CorrectPopUp currPage="Connie02"/> */}

      {ans === true? 
        <CorrectPopUp sentence="That was a good affirmation!" route="/connie03"/>  
      : ans === false? 
        <div className="h-full w-screen flex flex-col justify-end items-end z-3 absolute top-0 left-0 bg-black bg-opacity-25">
          <div className="flex flex-col justify-around items-start w-full h-1/3 rounded-t-3xl bg-white p-8">
              <h3>
                  🤔 &nbsp;&nbsp; Hm... that’s not quite right. 
              </h3>

              <h2 className="mb-3">
                  That statement is true, but that doesn’t tell Kono how amazing they are!
              </h2>

              <button className="btn-blue" onClick={() => setAns(null)}>Try Again</button>
          </div>
        </div>
      : null}
    </main>
  )
}
