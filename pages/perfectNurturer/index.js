import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Image from 'next/image'
import StatusBar from '@/components/statusBar'

export default function PerfectNurturer() {
  useEffect(() => {
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#313131');
  }, []);

  const router = useRouter();
  var { content } = router.query;

  var currentContent = null;
  switch (content) {
    case "0":
      currentContent = { pageFraction: '1/13',
      topText: "On Kono’s way home, he stops by a planet.",
      imgSrc: "",
      blueBtnText: "Let's go!",
      maybeLater: true, };
      break;
    case "1":
      currentContent = { pageFraction: '2/13',
      topText: "When he arrives at the planet, he notices something...",
      imgSrc: "KonoGame2.2",
      contentSize : 'w-[60%] sm:w-[30%] lg:w-[20%] xl:w-[15%] mt-14 mb-10 sm:mb-4',
      blueBtnText: "Oh?",
      maybeLater: true, };
      break;
    case "2":
      currentContent = { pageFraction: '3/13',
      topText: "...the planet is dark and he can’t see anything.",
      imgSrc: "KonoGame2.3",
      contentSize : 'w-[60%] sm:w-[30%] lg:w-[20%] xl:w-[15%] mt-14 mb-10 sm:mb-4',
      blueBtnText: "Oh no!",
      maybeLater: true, };
      break;
    case "3":
      currentContent = { pageFraction: '4/13',
      topText: "Kono feels lonely and scared.",
      blueBtnText: "What could it be?",
      imgSrc: "KonoGame2.4",
      contentSize : 'w-[60%] sm:w-[30%] lg:w-[20%] xl:w-[15%] mt-24 mb-12',
      maybeLater: true, };
      break;
    case "4":
      currentContent = { pageFraction: '5/13',
      topText: "Can you help him build his perfect friend?",
      imgSrc: "KonoGame2.5",
      contentSize : 'w-[60%] sm:w-[30%] lg:w-[20%] xl:w-[15%] mt-24 mb-12',
      blueBtnText: "Yes, let’s go!",
      maybeLater: true, 
      done: true,};
      break;
    default: 
      currentContent = { pageFraction: '5/13',
      topText: "Can you help him build his perfect friend?",
      imgSrc: "KonoGame2.5",
      contentSize : 'w-[60%] sm:w-[30%] lg:w-[20%] xl:w-[15%] mt-24 mb-12',
      blueBtnText: "Yes, let’s go!",
      maybeLater: true, 
      done: true,};
      break;
  }

  const handleClick = () => {
    if (currentContent.done) {
      router.push('/perfectNurturer/loading');
    } else {
      var next = (Number(content) + 1).toString();
      router.push('/perfectNurturer?content=' + next);
    }
    
  }

  return (
    <main className='bg-black h-screen'>
      <StatusBar fraction={currentContent.pageFraction} finish="0" textColor="text-white" routeBack={false}/>
        <p className='text-[22px] sm:text-[24px] mb-4 text-white w-full sm:w-[490px]'>
          {currentContent.topText}
        </p>
        {content === "0" ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-[90%] sm:w-[50%] lg:w-[35%] xl:w-[25%] mt-6 mb-4"
          >
            <source src={`/videos/KonoGame2.1.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          currentContent.imgSrc && (
            <div className={`h-min ${currentContent.contentSize}`}>
              <Image
                src={`/perfectNurturer/${currentContent.imgSrc}.png`}
                alt="kono"
                layout="responsive"
                width={100}
                height={75}
                className="object-contain w-full h-auto"
              />
            </div>
          )
        )}
    
        <div className='flex flex-col w-full justify-center items-center w-full sm:w-[490px]'>
            <button className='btn-blue my-3' onClick={handleClick}>{currentContent.blueBtnText}</button>
            {currentContent.maybeLater && <button className='btn-transparent text-white' onClick={() => router.push('/')}>Maybe Later</button>}
        </div>
    </main>
  )
}
