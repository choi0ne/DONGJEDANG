'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Location() {
    return (
        <div className="min-h-screen font-sans text-[#222]">
            <Header />

            <main className="pt-32 pb-20">
                {/* Minimal Header */}
                <div className="max-w-[1200px] mx-auto px-6 mb-24">
                    <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6 tracking-tight">오시는 길</h1>
                    <p className="text-lg text-gray-500 font-light tracking-wide">
                        인천광역시 동구 동산로 88, 2층
                    </p>
                </div>

                <div className="max-w-[1200px] mx-auto px-6">
                    {/* Clean Map Image */}
                    <Link
                        href="https://map.kakao.com/?q=인천광역시 동구 동산로 88"
                        target="_blank"
                        className="block w-full aspect-[21/9] relative grayscale hover:grayscale-0 transition-all duration-700 mb-24 overflow-hidden cursor-pointer group"
                    >
                        <Image
                            src="/images/map_clean.png"
                            alt="동제당한의원 위치"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700"></div>
                        <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-6 py-3 text-sm text-gray-600 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            지도를 클릭하면 크게 보실 수 있습니다
                        </div>
                    </Link>

                    {/* Minimal Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-12">

                        {/* Address & Contact */}
                        <div className="md:col-span-4 space-y-12">
                            <div>
                                <h3 className="text-lg font-bold font-serif mb-4 text-[#222]">주소</h3>
                                <p className="text-gray-600 leading-relaxed font-light">
                                    인천광역시 동구 동산로 88, 2층<br />
                                    (송림동, 송림우체국 옆)
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold font-serif mb-4 text-[#222]">연락처</h3>
                                <p className="text-2xl font-serif text-[#222]">032-765-7733</p>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="md:col-span-4">
                            <h3 className="text-lg font-bold font-serif mb-6 text-[#222]">진료시간</h3>
                            <div className="space-y-3 text-gray-600 font-light">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">평일</span>
                                    <span>09:30 - 19:00</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">토요일</span>
                                    <span>09:30 - 14:00</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2 text-gray-400">
                                    <span className="font-medium">점심시간</span>
                                    <span>13:00 - 14:00</span>
                                </div>
                                <div className="flex justify-between pt-2 text-red-400">
                                    <span className="font-medium">휴진</span>
                                    <span>일요일 / 공휴일</span>
                                </div>
                            </div>
                        </div>

                        {/* Transport & Parking */}
                        <div className="md:col-span-4 space-y-12">
                            <div>
                                <h3 className="text-lg font-bold font-serif mb-6 text-[#222]">교통안내</h3>
                                <div className="space-y-6">
                                    <div>
                                        <span className="text-xs font-bold text-white bg-[#0052A4] px-2 py-1 rounded-full mr-2">1호선</span>
                                        <span className="text-gray-600 font-light">도원역 2번 출구 (도보 15분)</span>
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold text-white bg-[#3399FF] px-2 py-1 rounded-full mr-2">버스</span>
                                        <span className="text-gray-600 font-light">송림우체국 / 동산고등학교 하차</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold font-serif mb-4 text-[#222]">주차</h3>
                                <p className="text-gray-600 leading-relaxed font-light">
                                    건물 내 주차가 협소하오니,<br />
                                    인근 <span className="font-medium text-[#222]">공영주차장</span> 이용을 부탁드립니다.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div >
    );
}
