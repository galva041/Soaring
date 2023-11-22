import Image from 'next/image'
import c02 from '../../public/connie/Connie02.png'
import StatusBar from '@/components/statusBar'
import TxtAnsPopUp from '@/components/txtAnsPopUp';


export default function Connie011() {

  return (
    <main>

      <StatusBar fraction='2/4' finish="0"/>

      <div className='flex flex-col w-full'>
        <p>
            Can you think of an affirmation Connie can say about herself?
        </p>
      </div>

      <div className='h-min w-[85%] sm:w-[70%] md:w-[55%] lg:w-[45%] xl:w-[30%]'>
        <Image
          src={c02}
          alt="Connie02"
          className="object-contain"
        />
      </div>

      <TxtAnsPopUp currPage="Connie02"/>

    </main>
  )
}
