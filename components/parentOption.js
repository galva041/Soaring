import { useRouter } from 'next/router'
import Image from 'next/image';

import listening from '@/public/parent/listeningCorner.png'
import reading from '@/public/parent/readingCorner.png'
import askother from '@/public/parent/askOtherParents.png'
import trending from '@/public/parent/trendingTopics.png'
import other from '@/public/parent/otherResources.png'

const ParentOption = ({title}) => {
    const router = useRouter();

    const navToParentHome = () => {
        router.push('/parent/parentHome');
    };

    const navToParentInsights = () => {
        router.push('/parent/parentInsights');
    };
    
    return (
        <div className='flex-col space-y-3'>
          <h6>{title}</h6>
          {/* <Image
            alt="listening corner"
            src={title == "Listening Corner"? listening: title == "Reading Corner"? reading : title == "Ask Other Parents"? askother : title == "Trending Topics"? trending: other} 
            width='100%'
            height='100%'
            className="object-cover h-[144px] w-[344px] self-center rounded-md"
          />  */}
          <div className='w-full h-[144px] bg-leaf-green rounded-lg'></div>
          
        </div> 
    )
};

export default ParentOption;