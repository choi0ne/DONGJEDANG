'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Location() {
    return (
        <div className="min-h-screen bg-background text-text font-sans">
            <Header />

            <main className="max-w-[1200px] mx-auto px-6 py-20">
                <div className="text-center mb-20">
                    <span className="text-primary font-bold tracking-widest uppercase mb-3 block animate-fadeIn">Location</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 font-serif text-text animate-fadeInUp">
                        오시는 길
                    </h1>
                    <div className="w-12 h-1 bg-primary/30 mx-auto animate-fadeInUp delay-100"></div>
                </div>

                {/* Map Section */}
                <div className="w-full h-[450px] bg-gray-100 mb-20 rounded-sm overflow-hidden border border-secondary/10 animate-fadeInUp delay-200 relative group">
                    {/* Kakao Map Iframe - Grayscale for cleaner look */}
                    <iframe
                        src="https://map.kakao.com/?urlX=432788&urlY=1103048&name=%EB%8F%99%EC%A0%9C%EB%8B%B9%ED%95%9C%EC%9D%98%EC%9B%90&map_type=TYPE_MAP&from=roughmap"
                        className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        title="동제당한의원 위치"
                    ></iframe>
                </div>

                {/* Information List - Baekrokdam Style (Clean, Minimalist, Grid/List) */}
                <div className="max-w-4xl mx-auto animate-fadeInUp delay-300">
                    <div className="divide-y divide-secondary/20 border-t border-b border-secondary/20">

                        {/* Address */}
                        <div className="flex flex-col md:flex-row py-8 md:py-10">
                            <div className="w-full md:w-1/4 mb-4 md:mb-0">
                                <h3 className="text-lg font-bold font-serif text-text/90">주소</h3>
                            </div>
                            <div className="w-full md:w-3/4">
                                <p className="text-lg text-text/80 leading-relaxed">
                                    인천광역시 동구 동산로 88, 2층 (송림동)<br />
                                    <span className="text-base text-text/60 mt-1 block">송림우체국 옆 건물 2층입니다.</span>
                                </p>
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="flex flex-col md:flex-row py-8 md:py-10">
                            <div className="w-full md:w-1/4 mb-4 md:mb-0">
                                <h3 className="text-lg font-bold font-serif text-text/90">연락처</h3>
                            </div>
                            <div className="w-full md:w-3/4">
                                <p className="text-2xl font-serif text-text/80">032-765-7733</p>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="flex flex-col md:flex-row py-8 md:py-10">
                            <div className="w-full md:w-1/4 mb-4 md:mb-0">
                                <h3 className="text-lg font-bold font-serif text-text/90">진료시간</h3>
                            </div>
                            <div className="w-full md:w-3/4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3 text-text/80">
                                    <div className="flex justify-between border-b border-dashed border-secondary/20 pb-2">
                                        <span className="font-medium">평일</span>
                                        <span>09:30 - 19:00</span>
                                    </div>
                                    <div className="flex justify-between border-b border-dashed border-secondary/20 pb-2">
                                        <span className="font-medium">토요일</span>
                                        <span>09:30 - 14:00</span>
                                    </div>
                                    <div className="flex justify-between border-b border-dashed border-secondary/20 pb-2 text-accent">
                                        <span className="font-medium">점심시간</span>
                                        <span>13:00 - 14:00</span>
                                    </div>
                                    <div className="flex justify-between border-b border-dashed border-secondary/20 pb-2 text-red-500">
                                        <span className="font-medium">일요일/공휴일</span>
                                        <span>휴진</span>
                                    </div>
                                </div>
                                <p className="text-sm text-text/50 mt-4">* 토요일은 점심시간 없이 진료합니다.</p>
                            </div>
                        </div>

                        {/* Public Transport */}
                        <div className="flex flex-col md:flex-row py-8 md:py-10">
                            <div className="w-full md:w-1/4 mb-4 md:mb-0">
                                <h3 className="text-lg font-bold font-serif text-text/90">대중교통</h3>
                            </div>
                            <div className="w-full md:w-3/4 space-y-6">
                                <div>
                                    <h4 className="font-bold text-text/80 mb-2 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                        지하철 이용 시
                                    </h4>
                                    <p className="text-text/70 pl-4">
                                        <span className="font-medium text-[#0052A4]">1호선 도원역</span> 2번 출구에서 도보 약 15분
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-text/80 mb-2 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                        버스 이용 시
                                    </h4>
                                    <p className="text-text/70 pl-4 mb-1">
                                        <span className="font-medium">송림우체국 / 동산고등학교</span> 정류장 하차
                                    </p>
                                    <p className="text-sm text-text/50 pl-4">
                                        * 방문 전 네이버 지도 등에서 실시간 노선을 확인해주세요.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Parking */}
                        <div className="flex flex-col md:flex-row py-8 md:py-10">
                            <div className="w-full md:w-1/4 mb-4 md:mb-0">
                                <h3 className="text-lg font-bold font-serif text-text/90">주차안내</h3>
                            </div>
                            <div className="w-full md:w-3/4">
                                <p className="text-text/80 leading-relaxed">
                                    건물 내 주차 공간이 협소할 수 있습니다.<br />
                                    가급적 대중교통을 이용해 주시거나, 인근 <span className="font-bold">공영주차장(동산고 앞 등)</span>을 이용해 주시기 바랍니다.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </main >

            <Footer />
        </div >
    );
}
