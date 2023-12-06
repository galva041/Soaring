import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import c04 from '../../public/kono/Kono04.png';
import StatusBar from '@/components/statusBar';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Affirmation from '@/components/affirmation';
import HeartOption from '@/components/heartOption';


export default function Connie04() {
  const [checkedOptions, setCheckedOptions] = useState({});
  const router = useRouter();

  const isAtLeastOneChecked = Object.values(checkedOptions).some((isChecked) => isChecked);

  const handleClick = () => {
    // if (isAtLeastOneChecked) {
    //   console.log('At least one option is checked.');
      // Navigate to the next page
      router.push('/connie05'); // Replace '/nextPage' with the actual route
    // } else {
    //   console.log('Please select at least one option.');
    //   // Display a message or take appropriate action if no option is checked
    // }
  };
  return (
    <main>
      <StatusBar fraction='4/5' finish="0"/>

      <div className='flex flex-col w-full'>
        <p className='text-[21px]'>
            Thank you for helping Kono! Now, it’s your turn!  Pick as many things you would say about you.
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
      <div className='my-1.5 flex flex-col items-start md:items-center w-[95%]'>
        <HeartOption id="op1" sentence={"I can make a difference."}
        onChange={(checked) => setCheckedOptions(options => ({ ...options, "op1": checked }))}/>
        <HeartOption id="op2" sentence={"I have great ideas."}
        onChange={(checked) => setCheckedOptions(options => ({ ...options, "op2": checked }))}/>
        <HeartOption id="op3" sentence={"I am proud of myself."}
        onChange={(checked) => setCheckedOptions(options => ({ ...options, "op3": checked }))}/>
        <HeartOption id="op4" sentence={"I make others smile."}
        onChange={(checked) => setCheckedOptions(options => ({ ...options, "op4": checked }))}/>
        <HeartOption id="op5" sentence={"My voice matters."}
        onChange={(checked) => setCheckedOptions(options => ({ ...options, "op5": checked }))}/>
        <HeartOption id="op6" sentence={"I stand up for others."}
        onChange={(checked) => setCheckedOptions(options => ({ ...options, "op6": checked }))}/>
      </div>

       
    {/* </form> */}

     <button className={`btn-blue col-span-2`}
      onClick={handleClick}
      // disabled={!isAtLeastOneChecked}
      >
          Check
          <HiOutlineArrowNarrowRight className='ml-2'/>
      </button>

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