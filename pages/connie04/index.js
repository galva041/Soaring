import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import c04 from '../../public/kono/Kono04.png';
import StatusBar from '@/components/statusBar';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Affirmation from '@/components/affirmation';
import HeartOption from '@/components/heartOption';
import CorrectPopUp from '@/components/correctPopUp';
import useSound from 'use-sound';

import correctDing from '../../public/sounds/correct.mp3';


export default function Connie04() {
  const [play] = useSound(correctDing);
  var [correct, setCorrect] = useState(false);

  var [options, setOptions] = useState([false, false, false, false, false, false]);
  
  const handleChange = (isChecked, id) => {
    setOptions((prevOptions) => {
      const newOptions = [...prevOptions];
      newOptions[id] = isChecked;
      return newOptions;
    });

    // console.log(options);
  }

  var isAtLeastOneChecked = !options.every(o => o === false);

  const handleClick = () => {
    setCorrect(true);
    play();
  };

  return (
    <main>
      <StatusBar fraction='6/8' finish="0"/>

      <div className='flex flex-col w-full'>
        <p className='text-[21px]'>
          Thank you for helping Kono! Now, it’s your turn! Pick as many positive sentences you would say about you
        </p>
      </div>

      <div className='h-min w-[65%] sm:w-[70%] md:w-[55%] lg:w-[40%] xl:w-[30%]'>
        <Image
          src={c04}
          alt="Connie04"
          className="object-contain"
        />
      </div>

      {/* <form className="flex flex-col items-start md:items-center w-[99%]"> */}
      <div className='my-1.5 flex flex-col items-start w-[95%]'>
        <HeartOption id="op1" sentence={"I can make a difference."}
        onChange={(checked) => handleChange(checked, 0)}/>
        <HeartOption id="op2" sentence={"I have great ideas."}
        onChange={(checked) => handleChange(checked, 1)}/>
        <HeartOption id="op3" sentence={"I am proud of myself."}
        onChange={(checked) => handleChange(checked, 2)}/>
        <HeartOption id="op4" sentence={"I make others smile."}
        onChange={(checked) => handleChange(checked, 3)}/>
        <HeartOption id="op5" sentence={"My voice matters."}
        onChange={(checked) => handleChange(checked, 4)}/>
        <HeartOption id="op6" sentence={"I stand up for others."}
        onChange={(checked) => handleChange(checked, 5)}/>
      </div>

       
    {/* </form> */}

     <button className={`btn-blue col-span-2`}
      onClick={handleClick}
      disabled={!isAtLeastOneChecked}
      >
        Check
        <HiOutlineArrowNarrowRight className='ml-2'/>
      </button>

      {correct? 
      <CorrectPopUp 
      message="Fantastic job!"
      sentence="Just as you helped Kono, you should also remind yourself sentences like these to remember how wonderful you are too!" 
      route="/connie05" />
      : null}

    </main>
  )
}


          {/* <div>
            <input type="checkbox" id="difference"/>
            <label for="difference" className='ml-5'>I can make a difference.</label> 
          </div>
          <div>
            <input type="checkbox" id="difference"/>
            <label for="difference" className='ml-5'>I have great ideas.</label> 
          </div>
          <div>
            <input type="checkbox" id="difference"/>
            <label for="difference" className='ml-5'>I am proud of myself.</label> 
          </div>
          <div>
            <input type="checkbox" id="difference"/>
            <label for="difference" className='ml-5'>I make others smile.</label> 
          </div>
          <div>
            <input type="checkbox" id="difference"/>
            <label for="difference" className='ml-5'>My voice matters.</label> 
          </div>
          <div>
            <input type="checkbox" id="standup"/>
            <label for="standup" className='ml-5'>I stand up for others.</label>
          </div> */}