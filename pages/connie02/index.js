import { useRouter } from 'next/router';
import Image from 'next/image'
import c02 from '../../public/connie/Connie02.png'
import StatusBar from '@/components/statusBar'
import TxtAnsPopUp from '@/components/txtAnsPopUp';


export default function Connie011() {

  return (
    <main
      className=""
    >

      <StatusBar fraction='2/4' finish="0"/>

      <div className='flex flex-col w-full'>
        <p>
            Can you think of an affirmation Connie can say about herself?
        </p>
      </div>

      <div className='h-min w-[85%] sm:w-[70%] md:w-[55%] lg:w-[45%] xl:w-[30%]'>
      {/* <div className='h-min w-[40%]'> */}
        <Image
          src={c02}
          alt="Connie02"
          className="object-contain"
        />
      </div>

      {/* <input type="text" rows="4" cols="50" 
      placeholder="For example, Connie can say “I’m intelligent.” Now you try! Tap here to type."
      /> */}

      <textarea rows="4" cols="50" type="text" 
        placeholder="For example, Connie can say “I’m intelligent.” Now you try! Tap here to type."
        className="mt-3 mb-10">
      </textarea>

      <TxtAnsPopUp currPage="Connie02"/>

    </main>
  )
}
