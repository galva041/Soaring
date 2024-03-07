import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image'
import badge from '../../public/badges/Badge.png'
import StatusBar from '@/components/statusBar'
import useSound from 'use-sound';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import FormfacadeEmbed from "@formfacade/embed-react";


export default function Survey() {
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();
  // const data = router.query;
  // console.log(data);
  const handleClick = () => {
    router.push('/badge');
  };

  const handleSubmit = () => {
    setSubmitted(true);
  }

  return (
    <main
      className=""
    >
      <StatusBar fraction='9/9' finish="1"/>

    {/* <div className='flex justify-center align-center w-screen'> */}
        {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfAyxlD05WDPwDihiSQ0dX7n4u38gZMC37vmYljMpbAG_7cUQ/viewform?embedded=true" 
        width='95%' height="1111"
        >Loading…</iframe> */}
    {/* </div> */}

    <FormfacadeEmbed
      formFacadeURL="https://formfacade.com/include/116184406912615810244/form/1FAIpQLSfAyxlD05WDPwDihiSQ0dX7n4u38gZMC37vmYljMpbAG_7cUQ/classic.js/?div=ff-compose"
      onSubmitForm={handleSubmit}
    />

    <button className="btn-blue" onClick={handleClick} disabled={!submitted}>
      Next
      <HiOutlineArrowNarrowRight className='ml-2'/>
    </button>

    </main>
  )
}
