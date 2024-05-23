import { useRouter } from 'next/router'
import { RiRefreshLine, RiArrowRightSLine, RiLockLine } from "react-icons/ri";

const Week = ({m = 0, t = 0, w = 0, th = 0, f = 0, sa = 0, su = 0}) => {

    return (
        <div className='flex justify-between'>
            <div className='flex flex-col justify-center items-center'>
                <h7 className='font-medium text-[12px] text-txt-gray'>M</h7>
                <div className='h-[64px] w-[32px] rounded-full bg-[#efeeee] flex flex-col justify-between items-center p-1'>
                    <div className='h-[5px] w-[5px] bg-[#D6D4D4] flex justify-center items-center rounded-full'></div>
                    <div className='h-[24px] w-[24px] bg-[#fda755] flex justify-center items-center rounded-full'>1</div>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <h7 className='font-medium text-[12px] text-txt-gray'>T</h7>
                <div className='h-[64px] w-[32px] rounded-full bg-[#efeeee] flex flex-col justify-between items-center p-1'>
                    <div className='h-[5px] w-[5px] bg-[#D6D4D4] flex justify-center items-center rounded-full'></div>
                    {/* <div className='h-[24px] w-[24px] bg-[#fda755] flex justify-center items-center rounded-full'>1</div> */}
                </div>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <h7 className='font-medium text-[12px] text-txt-gray'>W</h7>
                <div className='h-[64px] w-[32px] rounded-full bg-[#efeeee] flex flex-col justify-between items-center p-1'>
                    <div className='h-[5px] w-[5px] bg-[#D6D4D4] flex justify-center items-center rounded-full'></div>
                    {/* <div className='h-[24px] w-[24px] bg-[#fda755] flex justify-center items-center rounded-full'>1</div> */}
                </div>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <h7 className='font-medium text-[12px] text-txt-gray'>T</h7>
                <div className='h-[64px] w-[32px] rounded-full bg-[#efeeee] flex flex-col justify-between items-center p-1'>
                    <div className='h-[5px] w-[5px] bg-[#D6D4D4] flex justify-center items-center rounded-full'></div>
                    <div className='h-[24px] w-[24px] bg-[#fda755] flex justify-center items-center rounded-full'>1</div>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <h7 className='font-medium text-[12px] text-txt-gray'>F</h7>
                <div className='h-[64px] w-[32px] rounded-full bg-[#efeeee] flex flex-col justify-between items-center p-1'>
                    <div className='h-[5px] w-[5px] bg-[#D6D4D4] flex justify-center items-center rounded-full'></div>
                    <div className='h-[24px] w-[24px] bg-[#fda755] flex justify-center items-center rounded-full'>1</div>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <h7 className='font-medium text-[12px] text-txt-gray'>S</h7>
                <div className='h-[64px] w-[32px] rounded-full bg-[#ccf3eb] flex flex-col justify-between items-center p-1'>
                    <div className='h-[5px] w-[5px] bg-[#00c49a] flex justify-center items-center rounded-full'></div>
                    {/* <div className='h-[24px] w-[24px] bg-[#fda755] flex justify-center items-center rounded-full'>1</div> */}
                </div>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <h7 className='font-medium text-[12px] text-txt-gray'>S</h7>
                <div className='h-[64px] w-[32px] rounded-full bg-[#efeeee] flex flex-col justify-between items-center p-1'>
                    <div className='h-[5px] w-[5px] bg-[#D6D4D4] flex justify-center items-center rounded-full'></div>
                    {/* <div className='h-[24px] w-[24px] bg-[#fda755] flex justify-center items-center rounded-full'>1</div> */}
                </div>
            </div>
        </div>
    )
};

export default Week;