import Image from 'next/image'
import c01 from '../../public/connie/Connie01.png'
import StatusBar from '@/components/statusBar'
import AnsPopUp from '@/components/AnsPopUp';


export default function Connie01() {

  return (
    <main
      className="z-0"
    >   
        <StatusBar fraction='1/4' finish="0"/>

        <div className='flex flex-col w-full'>
            <p>
                What is a positive affirmation that Connie can say about herself?
            </p>
        </div>

        <div className='h-min w-[65%] sm:w-[48%] md:w-[38%] lg:w-[28%] xl:w-[20%]'>
        {/* <div className='h-min w-[40%]'> */}
            <Image
            src={c01}
            alt="Connie01"
            className="object-contain"
            />
        </div>

        <AnsPopUp currPage="Connie01"/>

    </main>
  )
}
