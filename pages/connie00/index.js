import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Image from 'next/image'
import c0 from '../../public/videos/KonoGame01.mp4';
import StatusBar from '@/components/statusBar'
// import Definition from '@/components/definition';

export default function Connie00() {
  useEffect(() => {
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#FFFFFF');
  }, []);

  const router = useRouter();

  const handleClick = () => {
    router.push('/rocketbroke');
  };

  // var [def, setDef] = useState(false);
  // const handleDef = () => {
  //   setDef(!def);
  // };

  return (
    <main>
      {/* <p>text at the top</p>
      <button className='btn-blue'>button</button>
      <button className='btn-gray'>button</button>
      <button className='btn-transparent'>button</button>
      <h1>defined word</h1>
      <h2>definition + answer desc</h2>
      <h2 className='.badge-desc'>badge desc</h2>
      <h3>answer header</h3>
      <input type="text" placeholder="type here"/> */}

      <StatusBar fraction='1/9' finish="0"/>

      {/* { def && <Definition 
        word="affirmation" 
        type="noun" 
        syllables="af·firm·a·tion"
        pronounce="/ˌafərˈmāSHən/" 
        def="a statement that is true"
        /> } */}

      <div className='flex flex-col w-full'>
        <p className='text-[22px] sm:text-[24px] mb-4'
        // onClick={()=>setDef(false)}
        >
          Meet Kono - Kono is on his way home, he is using a rocket he built himself to travel there.
        </p>
        
        {/* <p className='text-[22px] sm:text-[24px]'>
          Sometimes they struggle to say the right things about himself. 
        </p> */}
        {/* <span className='btn-define' onClick={handleDef}>Affirmations</span>
        &nbsp; are positive statements you tell yourself to remind yourself of all the amazing things about you. */}
      </div>

      {/* <div className='md:pt-[12%] md:pb-[5%] lg:p-0 h-min w-[60%] sm:w-[50%] md:w-[25%] lg:w-[25%] xl:w-[26%]'
      // onClick={()=>setDef(false)}
      >
        <Image
          src={c0}
          alt="Connie0"
          className="object-contain"
        />
      </div> */}

      <video
      autoPlay
      loop
      muted
      playsInline
      className="w-[70%] sm:w-[40%] md:w-[30%] lg:w-[25%] xl:w-[22%] h-auto">
        <source src={c0} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className='flex flex-col w-full justify-center items-center'>
        <button className='btn-blue mt-7 my-3' onClick={handleClick}>Hi Kono!</button>
        <button className='btn-transparent' onClick={() => router.push('/')}>Maybe Later</button>
      </div>

    </main>
  )
}
