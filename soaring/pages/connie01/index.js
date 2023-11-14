import Image from 'next/image'
import c01 from '../../public/connie/Connie01.png'
import StatusBar from '@/components/statusBar'
import AnsPopUp from '@/components/incPopUp';


export default function Connie011() {

  return (
    <main
      className="z-0"
    >   
        <StatusBar fraction='1/4'/>

        <div className='flex flex-col w-full'>
            <p>
                What is a positive affirmation that Connie can say about herself?
            </p>
        </div>

        <div className='h-min w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/4'>
        {/* <div className='h-min w-[40%]'> */}
            <Image
            src={c01}
            alt="Connie01"
            className="object-contain"
            />
        </div>

        <AnsPopUp/>

    </main>
  )
}
