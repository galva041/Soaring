import Image from 'next/image'
import c03 from '../../public/kono/Kono03.png'
import StatusBar from '@/components/statusBar'
import AnsPopUp from '@/components/AnsPopUp';


export default function Connie03() {

  return (
    <main
      className="z-0"
    >   
        <StatusBar fraction='6/9'/>

        <div className='flex flex-col w-full'>
            <p>
                What is another positive sentence Kono can say about himself?
            </p>
        </div>

        <div className='pt-4 pb-7 h-min w-[90%] sm:w-[70%] md:w-[60%] lg:w-[40%] xl:w-[35%]'>
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
