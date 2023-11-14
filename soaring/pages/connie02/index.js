import { useRouter } from 'next/router';
import Image from 'next/image'
import c02 from '../../public/connie/Connie02.png'
import StatusBar from '@/components/statusBar'


export default function Connie011() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/connie01');
  };

  return (
    <main
      className=""
    >

      <StatusBar fraction='2/4'/>

      <div className='flex flex-col w-full'>
        <p>
            Can you think of an affirmation Connie can say about herself?
        </p>
      </div>

      <div className='h-min w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/4'>
      {/* <div className='h-min w-[40%]'> */}
        <Image
          src={c02}
          alt="Connie02"
          className="object-contain"
        />
      </div>

      <input type="text" 
      placeholder="For example, Connie can say “I’m intelligent.” Now you try! Tap here to type."
      />

      <div className='flex flex-col w-full justify-center items-center'>
        <button className='btn-blue'>Check</button>
      </div>

    </main>
  )
}
