import { useRouter } from 'next/router'
import Image from 'next/image';

import feedback from '@/public/parent/GiveUsFeedback.png'
import askExperts from '@/public/parent/AskTheExperts.png'
import trending from '@/public/parent/TrendingTopics1.png'
import askParents from '@/public/parent/AskOtherParents1.png'

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
          <Image
            alt="listening corner"
            src={title == "Ask other parents"? askParents : title == "Ask the experts"? askExperts : title == "Trending topics"? trending: feedback} 
            width='100%'
            height='100%'
            className="object-cover self-center rounded-lg"
          /> 
          {/* <div className='w-full h-[144px] bg-leaf-green rounded-lg'></div> */}
          
        </div> 
    )
};

export default ParentOption;