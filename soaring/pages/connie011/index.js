import { useRouter } from 'next/router';
import Image from 'next/image'
import c00 from '../../public/connie/Connie00.png'
import StatusBar from '@/components/statusBar'


export default function Connie011() {
  const router = useRouter();
  // const data = router.query;
  // console.log(data);
  const handleClick = () => {
    router.push('/connie01');
  };

  return (
    <main
      className=""
    >

      <StatusBar fraction='0/4'/>

      <div className='flex flex-col w-full'>
        <p>
          Sometimes Connie struggles to say the right things, can you help her?
        </p>
      </div>

      <div className='h-min w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/4'>
      {/* <div className='h-min w-[40%]'> */}
        <Image
          src={c00}
          alt="Connie00"
          className="object-contain"
        />
      </div>

      <div className='flex flex-col w-full justify-center items-center'>
        <button className='btn-blue' onClick={handleClick}>Yes, I'll help!</button>
        <button className='btn-transparent'>Maybe Later</button>
      </div>

    </main>
  )
}
