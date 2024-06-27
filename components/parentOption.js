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

    var links = ['https://www.facebook.com/groups/712184407466396','/parent/UnderConstruction','https://forms.gle/zL8U4k4Nj9k75syn8','https://forms.gle/vwYT6epMgrC13mYdA'];
    
    return (
        <div className='flex-col space-y-3'>
          <h6>{title}</h6>
          <Link href={links[link]} target={link !== 1? '_blank' : null} className='w-min'> 
            <Image
            alt="listening corner"
            src={title == "Ask other parents"? askParents : title == "Ask the experts"? askExperts : title == "Trending topics"? trending: feedback} 
            width='100%'
            height='100%'
            className="object-contain self-center rounded-lg h-36 sm:h-48 w-auto" // full-zoomsin auto-goodbutsmall 
            // className="object-cover self-center rounded-lg h-36 sm:h-56 w-full" // full-zoomsin auto-goodbutsmall 
            // className="object-contain self-center rounded-lg w-full sm:w-3/5 h-auto"
            /> 
          </Link>
        </div> 
    )
};

export default ParentOption;