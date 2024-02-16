import { useRouter } from 'next/router';
import Image from 'next/image'
import badge from '../../public/badges/Badge.png'
import StatusBar from '@/components/statusBar'
import useSound from 'use-sound';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";


export default function Survey() {
  const router = useRouter();
  // const data = router.query;
  // console.log(data);
  const handleClick = () => {
    router.push('/badge');
  };

  return (
    <main
      className=""
    >
      <StatusBar fraction='8/8' finish="1"/>

    <div className='flex justify-center align-center w-screen'>
        
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfAyxlD05WDPwDihiSQ0dX7n4u38gZMC37vmYljMpbAG_7cUQ/viewform?embedded=true" 
        width='95%' height="1111"
        >Loading…</iframe>
    </div>

    <button className="btn-blue" onClick={handleClick}>
      Next
      <HiOutlineArrowNarrowRight className='ml-2'/>
    </button>

    </main>
  )
}
