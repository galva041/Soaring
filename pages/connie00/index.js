import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image'
import c0 from '../../public/kono/New_Kono00.png'
import StatusBar from '@/components/statusBar'
// import Definition from '@/components/definition';


export default function Connie00() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/connie011');
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

      <StatusBar fraction='1/8' finish="0"/>

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
          Meet Kono - Kono needs cheering up.
        </p>
        
        <p className='text-[22px] sm:text-[24px]'>
          Sometimes they struggle to say the right things about themself. 
        </p>
        {/* <span className='btn-define' onClick={handleDef}>Affirmations</span>
        &nbsp; are positive statements you tell yourself to remind yourself of all the amazing things about you. */}
      </div>

      <div className='md:pt-[12%] md:pb-[5%] lg:p-0 h-min w-[65%] sm:w-[50%] md:w-[50%] lg:w-[30%] xl:w-[26%]'
      // onClick={()=>setDef(false)}
      >
        <Image
          src={c0}
          alt="Connie0"
          className="object-contain"
        />
      </div>

      <div className='flex flex-col w-full justify-center items-center'>
        <button className='btn-blue mt-7 my-3' onClick={handleClick}>Let's help Kono!</button>
        <button className='btn-transparent' onClick={() => router.push('/')}>Maybe Later</button>
      </div>

    </main>
  )
}
