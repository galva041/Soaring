import { useRouter } from 'next/router'
import { RiRefreshLine, RiArrowRightSLine, RiLockLine } from "react-icons/ri";

const Topic = ({title, started, route = '/parent/insights'}) => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/' + route);
    };

    return (
        <button className='flex items-center justify-between mx-2 w-full'
        onClick={handleClick}>
            <div className="flex jusitfy-center items-center space-x-4">
                <div className={`rounded-full ${started? "bg-[#FFE6CE]": "bg-bar-gray"} p-2`}>
                    {started? <RiRefreshLine size={24} color="#FDA855"/>
                    : <RiLockLine size={24} color="#777777"/>}
                </div>

                <div className="flex flex-col justify-center items-start">
                    <h2>{title}</h2>
                    <h7 className="font-medium text-[12px] text-txt-gray">
                        {started? 'In Progress' : 'Module Locked'}
                    </h7>
                </div>
            </div> 

            {started && <RiArrowRightSLine size={24} color="#313131"/>}
        </button>
    )
};

export default Topic;