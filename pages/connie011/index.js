import { useRouter } from 'next/router';
import Image from 'next/image'
import c00 from '../../public/kono/Kono00.1.png'
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

      <StatusBar fraction='2/8' finish="0"/>

      <div className='flex flex-col w-full'>
        <p>
          Can you think of some positive things that Kono can say about themself?
        </p>
      </div>

      <div className='mt-9 mb-8 h-min w-[82%] sm:w-[65%] md:w-[50%] lg:w-[35%] xl:w-[25%]'>
        <Image
          src={c00}
          alt="Connie00"
          className="object-contain"
        />
      </div>

      <div className='flex flex-col w-full justify-center items-center'>
        <button className='btn-blue mb-3' onClick={handleClick}>Yes, I'll help!</button>
        <button className='btn-transparent' onClick={() => router.push('/')}>Maybe Later</button>
      </div>

    </main>
  )
}
