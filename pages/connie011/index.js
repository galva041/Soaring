import { useRouter } from 'next/router';
import Image from 'next/image'
import c00 from '../../public/konov2/sadkono.png'
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

      <StatusBar fraction='3/9' finish="0"/>

      <div className='flex flex-col w-full'>
        <p>
          Can you help Kono rebuild his confidence so that he can fix his rocket and go home?
        </p>
      </div>

      <div className='mt-9 mb-8 h-min w-[50%] sm:w-[50%] md:w-[35%] lg:w-[25%] xl:w-[20%]'>
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
