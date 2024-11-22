import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image'
import StatusBar from '@/components/statusBar'
import useSound from 'use-sound';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import FormfacadeEmbed from "@formfacade/embed-react";


export default function Survey() {
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();
  const { lesson } = router.query;
  // const data = router.query;
  // console.log(data);
  const handleClick = () => {
    if (lesson === "1") {
      router.push(`/badge`);
    } else {
      router.push(`/perfectNurturer/badge`);
    }
  };

  var fraction;
  switch(lesson) {
    case "1":
      fraction = '9/9';
      break;
    case "2":
      fraction = '13/13';
      break;
  }

  const handleSubmit = () => {
    setSubmitted(true);
  }

  return (
    <main
      className=""
    >
      <StatusBar fraction={fraction} finish="1"/>

    {/* <div className='flex justify-center align-center w-screen'> */}
        {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfAyxlD05WDPwDihiSQ0dX7n4u38gZMC37vmYljMpbAG_7cUQ/viewform?embedded=true" 
        width='95%' height="1111"
        >Loading…</iframe> */}
    {/* </div> */}
    <div className="font-poppins w-full sm:w-[490px]">
      <FormfacadeEmbed
        formFacadeURL="https://formfacade.com/include/116184406912615810244/form/1FAIpQLSfAyxlD05WDPwDihiSQ0dX7n4u38gZMC37vmYljMpbAG_7cUQ/classic.js/?div=ff-compose"
        onSubmitForm={handleSubmit}
      />
    </div>

    <button className="btn-blue mb-10 w-full sm:w-[490px]" onClick={handleClick} 
    // disabled={!submitted}
    >
      Next
      <HiOutlineArrowNarrowRight className='ml-2'/>
    </button>

    </main>
  )
}
