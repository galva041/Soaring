import { useRouter } from 'next/router';
import Image from 'next/image'
import c04 from '../../public/connie/Connie04.png'
import StatusBar from '@/components/statusBar'
import TxtAnsPopUp from '@/components/txtAnsPopUp';
import Affirmation from '@/components/affirmation';


export default function Connie04() {

  return (
    <main
      className=""
    >
      <StatusBar fraction='4/4' finish="0"/>

      <div className='flex flex-col w-full'>
        <p className='text-[21px]'>
            Thank you for helping Connie! Now, it’s your turn! What are three affirmations about yourself?
        </p>
      </div>

      <div className='h-min w-[65%] sm:w-[70%] md:w-[55%] lg:w-[40%] xl:w-[30%]'>
      {/* <div className='h-min w-[40%]'> */}
        <Image
          src={c04}
          alt="Connie04"
          className="object-contain"
        />
      </div>

        <Affirmation num="1"/>
        <Affirmation num="2"/>
        <Affirmation num="3"/>

        <TxtAnsPopUp currPage="Connie04"/>

    </main>
  )
}