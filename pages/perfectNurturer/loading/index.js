import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { IoChevronBackOutline } from "react-icons/io5";
import { RiHome2Line } from "react-icons/ri";

export default function PerfectNurturer() {
    const router = useRouter();
    useEffect(() => {
        document.querySelector('meta[name="theme-color"]').setAttribute('content', '#FFFFFF');
        const timer = setTimeout(() => {
            router.push('/perfectNurturer/shape');
        }, 3000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <main className="flex flex-col justify-center items-center bg-white h-screen">
        <div className="z-10 absolute top-4 left-4 flex pl-6 pr-10 justify-between">
            <button className="btn-nav" onClick={() => router.back()}>
                <IoChevronBackOutline size={22} color="#0978D5" />
            </button>
            <button className="btn-nav" onClick={() => router.push('/')}>
                <RiHome2Line size={22} color="#0978D5" />
            </button>
        </div>

        <div className="relative flex justify-center items-center">
            <div className="absolute w-[300px] h-[300px] rounded-full border-8 border-dashed border-blue animate-spin"></div>
            <video
            autoPlay
            loop
            muted
            playsInline
            className="w-[85%] sm:w-[200px] md:w-[250px] lg:w-[300px] h-auto rounded-full"
            >
            <source src={`/videos/Loading.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        </div>

        <p className="text-[22px] sm:text-[24px] mt-16 text-black text-center">
            Loading Build-a-Buddy...
        </p>
    </main>
    )
}
