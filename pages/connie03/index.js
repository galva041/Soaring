import Image from 'next/image'
import c03 from '../../public/connie/Connie03.png'
import StatusBar from '@/components/statusBar'
import AnsPopUp from '@/components/AnsPopUp';


export default function Connie03() {

  return (
    <main
      className="z-0"
    >   
        <StatusBar fraction='3/4'/>

        <div className='flex flex-col w-full'>
            <p>
                What is another affirmation Connie can say about herself?
            </p>
        </div>

        <div className='h-min w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/4'>
        {/* <div className='h-min w-[40%]'> */}
            <Image
            src={c03}
            alt="Connie03"
            className="object-contain"
            />
        </div>

        <AnsPopUp currPage="Connie03"/>

    </main>
  )
}
