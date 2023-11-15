import { useRouter } from 'next/router';
import Image from 'next/image'
import badge from '../../public/badges/Badge.png'
import StatusBar from '@/components/statusBar'


export default function Badge() {
  const router = useRouter();
  // const data = router.query;
  // console.log(data);
  const handleClick = () => {
    router.push('/');
  };

  return (
    <main
      className=""
    >
      <StatusBar fraction='4/4' finish="1"/>

    <div className='flex flex-col justify-between items-center mb-20'>
        <div className='h-min w-3/4 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/4'>
        {/* <div className='h-min w-[40%]'> */}
            <Image
            src={badge}
            alt="badge"
            className="object-contain"
            />
        </div>

        <div className='flex flex-col w-full text-center'>
            <p>
                Affirmation Badge
            </p>

            <h2 className='badge-desc'>
                Congratulations! You’ve earned a badge in your confidence journey. Keep up the good work!
            </h2>
        </div>
    </div>

        <div className='flex flex-col w-full justify-between items-center'>
            <button className='btn-blue mb-3' onClick={handleClick}>Return to Home</button>
            <button className='btn-transparent'>I'll continue later</button>
        </div>

    </main>
  )
}
