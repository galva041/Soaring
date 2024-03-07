import Image from 'next/image';

import cloud1 from '../public/konov2/decorativeClouds/cloud1.png'
import cloud2 from '../public/konov2/decorativeClouds/cloud2.png'
import cloud3 from '../public/konov2/decorativeClouds/cloud3.png'


const DecorativeClouds = () => {

    return (
      <div className='absolute w-screen h-screen top-0 overflow-hidden'>
        <Image
            alt="cloud2"
            src={cloud2} 
            width='100%'
            height='100%'
            className="object-contain z-1 absolute top-[14%] right-[11%] h-[10%]"
        /> 
        
       <Image
            alt="cloud2"
            src={cloud2} 
            width='100%'
            height='100%'
            className="object-contain z-1 absolute top-[25%] right-[60%] h-[10%]"
        />  

        <Image
            alt="cloud1"
            src={cloud1} 
            width='100%'
            height='100%'
            className="object-contain z-1 absolute top-[35%] left-[47%] h-[10%]"
        /> 

        <Image
            alt="cloud3"
            src={cloud3} 
            width='100%'
            height='100%'
            className="object-contain z-1 absolute top-[43%] right-[55%] h-[10%]"
        />  

        <Image
            alt="cloud2"
            src={cloud2} 
            width='100%'
            height='100%'
            className="object-contain z-1 absolute top-[55%] right-[40%] h-[10%]"
        />  

        <Image
            alt="cloud3"
            src={cloud3} 
            width='100%'
            height='100%'
            className="object-contain z-1 absolute top-[61%] left-[37%] h-[10%]"
        /> 

        <Image
            alt="cloud2"
            src={cloud2} 
            width='100%'
            height='100%'
            className="object-contain z-1 top-[72%] left-[65%] absolute h-[13%]"
        />  

        <Image
            alt="cloud2"
            src={cloud2} 
            width='100%'
            height='100%'
            className="object-contain z-1 absolute top-[81%] left-[10%] h-[15%]"
        />   
      </div>
    )
};

export default DecorativeClouds;