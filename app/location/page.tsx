'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import SubPageHeader from '../components/SubPageHeader';
import Image from 'next/image';
import Link from 'next/link';
import GoogleMap from '../components/GoogleMap';

export default function Location() {
    return (
        <div className="min-h-screen flex flex-col font-sans text-[#222]">
            <Header />
            <SubPageHeader title="오시는 길" />

            <main className="flex-1">
                <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-20">
                    {/* Interactive Google Map */}
                    <div className="w-full mb-12">
                        <GoogleMap />
                    </div>
                    <div className="flex flex-col gap-10 max-w-2xl mx-auto text-center font-serif text-black">
                        <div className="space-y-4">
                            <p className="text-xl font-bold">
                                인천시 동구 동산로 88
                            </p>
                            <p className="text-xl font-bold">
                                tel. 032-765-7733
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-[1px] bg-black/10"></div>

                        {/* Parking & Directions */}
                        <div className="space-y-6 text-center inline-block mx-auto">
                            <div className="flex flex-col gap-2 justify-center items-center">
                                <span className="font-bold text-xl">주차안내</span>
                                <span className="font-bold text-lg">한의원전용주차장을 이용해주세요</span>
                            </div>
                            <div className="flex flex-col gap-2 justify-center items-center">
                                <span className="font-bold text-xl">오시는길</span>
                                <span className="font-bold text-lg">인천 송림우체국 옆에 위치하고있습니다.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
