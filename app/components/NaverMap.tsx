'use client';

import Link from 'next/link';

export default function NaverMap() {
    return (
        <div className="w-full aspect-[16/9] md:aspect-[21/9] relative shadow-lg rounded-lg overflow-hidden bg-[#E5E3DB] group">
            <Link
                href="https://map.naver.com/p/search/인천광역시 동구 동산로 88"
                target="_blank"
                className="block w-full h-full relative"
            >
                {/* Static Map Background */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/map_clean.png')" }}
                ></div>

                {/* Custom Overlay (CSS Implementation) */}
                <div className="absolute top-[35%] left-1/2 -translate-x-1/2 flex flex-col items-center z-10 transition-transform duration-300 group-hover:-translate-y-1">
                    <div className="bg-white border border-[#ccc] px-4 py-3 shadow-md rounded-[6px] mb-1 text-center min-w-[180px]">
                        <div className="font-bold text-[#222] text-[15px] mb-1">동제당한의원</div>
                        <div className="text-[13px] text-[#555]">인천 동구 동산로 88</div>
                    </div>
                    {/* Triangle Arrow */}
                    <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-white relative -top-[1px] drop-shadow-sm"></div>
                </div>

                {/* Map Marker - Naver Style Green Pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none mt-6">
                    <svg width="46" height="60" viewBox="0 0 40 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
                        <path d="M20 0C8.9543 0 0 8.9543 0 20C0 35 20 52 20 52C20 52 40 35 40 20C40 8.9543 31.0457 0 20 0Z" fill="#2DB400" />
                        <circle cx="20" cy="20" r="8" fill="white" />
                        <circle cx="20" cy="20" r="4" fill="#2DB400" />
                    </svg>
                </div>
            </Link>
        </div>
    );
}
