import { useRouter } from 'next/router';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import c0 from '../public/connie/Connie0.png'
import StatusBar from '@/components/statusBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/connie011');
  };

  return (
    <main
      className=""
    >
      {/* <p>text at the top</p>
      <button className='btn-blue'>button</button>
      <button className='btn-gray'>button</button>
      <button className='btn-transparent'>button</button>
      <h1>defined word</h1>
      <h2>definition + answer desc</h2>
      <h2 className='.badge-desc'>badge desc</h2>
      <h3>answer header</h3>
      <input type="text" placeholder="type here"/> */}

      <StatusBar fraction='0/4' finish="0"/>

      <div className='flex flex-col w-full'>
        <p>
          Meet Connie - Connie is doing her daily affirmations. <br/><br/>
        
          <span className='define'>Affirmations</span> 
          &nbsp; are positive statements you tell yourself to remind yourself of all the amazing things about you.
        </p>
      </div>

      <div className='h-min w-5/6 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/4'>
        <Image
          src={c0}
          alt="Connie0"
          className="object-contain"
        />
      </div>

      <div className='flex flex-col w-full justify-center items-center'>
        <button className='btn-blue mb-3' onClick={handleClick}>Hi Connie!</button>
        <button className='btn-transparent'>Maybe Later</button>
      </div>

    </main>
  )
}
