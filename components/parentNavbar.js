import { useRouter } from 'next/router'
import { RiHome4Fill, RiHome4Line, RiDonutChartLine, RiParentLine, RiAccountCircleLine } from "react-icons/ri";

const ParentNavbar = (home, insights, locked = true) => {
    const router = useRouter();

    const navToParentHome = () => {
        router.push('/parent');
    };

    const navToParentInsights = () => {
        router.push('/parent/insights');
    };

    const navToUnderConst = () => {
        router.push('/parent/UnderConstruction');
    };
    
    return (
      <div className='fixed bottom-0 z-10 flex w-screen bg-white py-2 px-5 items-center justify-around space-x-5'>
        <button className='btn-parent-nav' onClick={navToParentHome}>
            {/* {home?  */}
            <RiHome4Fill size={28} color='#0978D5'/>
            {/* : <RiHome4Line size={28} color='#777777' />} */}
            Home
        </button>

        <button className='btn-parent-nav' onClick={navToParentInsights}>
            <RiDonutChartLine size={28} color={'#0978D5'}/>
            {/* <RiDonutChartLine size={28} color={insights? '#777777': '#0978D5'}/> */}
            Your Insights
        </button>

        <button className='btn-parent-nav' onClick={navToUnderConst}>
            <RiParentLine size={28} color={'#0978D5'}/>
            Child
        </button>

        <button className='btn-parent-nav' onClick={navToUnderConst}>
            <RiAccountCircleLine size={28} color={'#0978D5'}/>
            Profile
        </button>
      </div>
    )
};

export default ParentNavbar;