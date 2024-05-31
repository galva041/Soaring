import { useRouter } from 'next/router'
import Image from 'next/image';
import Link from 'next/link';

import feedback from '@/public/parent/GiveUsFeedback.png'
import askExperts from '@/public/parent/AskTheExperts.png'
import trending from '@/public/parent/TrendingTopics1.png'
import askParents from '@/public/parent/AskOtherParents1.png'

const ParentOption = ({title, link = 1}) => {
    const router = useRouter();

    const navToParentHome = () => {
        router.push('/parent/parentHome');
    };

    const navToParentInsights = () => {
        router.push('/parent/parentInsights');
    };

    var links = ['https://www.facebook.com/groups/712184407466396','/parent/UnderConstruction'];
    
    return (
        <div className='flex-col space-y-3'>
          <h6>{title}</h6>
          <Link href={links[link]} target={link < 1? '_blank' : null} className='flex-shrink-0'> 
            <Image
            alt="listening corner"
            src={title == "Ask other parents"? askParents : title == "Ask the experts"? askExperts : title == "Trending topics"? trending: feedback} 
            width='100%'
            height='100%'
            className="object-contain self-center rounded-lg h-36 w-auto"
            /> 
          </Link>
        </div> 
    )
};

export default ParentOption;