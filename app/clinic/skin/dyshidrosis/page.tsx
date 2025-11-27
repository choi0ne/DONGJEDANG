'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function Dyshidrosis() {
    return (
        <div className="min-h-screen bg-background text-text font-sans">
            <Header />

            <main>
                <section className="relative py-20 bg-[#FDFBF7]">
                    <div className="max-w-[1200px] mx-auto px-6 text-center">
                        <span className="block text-primary font-bold tracking-[0.3em] uppercase mb-4 animate-fadeIn">Dyshidrosis</span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-text animate-fadeInUp">
                            한포진
                        </h1>
                        <div className="w-16 h-1 bg-primary/30 mx-auto mb-8 animate-fadeInUp delay-100"></div>
                        <p className="text-lg text-text/70 max-w-2xl mx-auto leading-relaxed font-serif animate-fadeInUp delay-200">
                            손발의 가려움과 수포,<br />
                            면역 체계를 바로잡아 깨끗한 피부를 되찾아 드립니다.
                        </p>
                    </div>
                </section>

                <section className="py-16 bg-white">
                    <div className="max-w-[1000px] mx-auto px-6">

                        {/* Definition */}
                        <div className="mb-20 animate-fadeInUp delay-300">
                            <h2 className="text-3xl font-bold font-serif text-primary mb-6 text-center">한포진이란?</h2>
                            <p className="text-lg text-text/80 leading-relaxed text-center max-w-3xl mx-auto">
                                한포진은 손바닥, 발바닥, 손가락, 발가락 등에 작은 수포(물집)가 무리지어 발생하는 비염증성 수포성 질환입니다.<br className="hidden md:block" />
                                초기에는 투명한 잔물집이 무리지어 발생하며, 심한 가려움증을 동반합니다.<br className="hidden md:block" />
                                증상이 진행되면 피부가 벗겨지거나 갈라지며 통증을 유발할 수 있습니다.
                            </p>
                        </div>

                        {/* Symptoms Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                            <div className="bg-[#FDFBF7] p-8 rounded-lg text-center border border-secondary/10 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary text-2xl">
                                    💧
                                </div>
                                <h3 className="text-xl font-bold font-serif text-text mb-3">수포 발생</h3>
                                <p className="text-text/70 text-sm leading-relaxed">
                                    손가락, 발가락 끝에서 시작하여<br />손바닥, 발바닥 전체로 퍼지는<br />작은 물집들
                                </p>
                            </div>
                            <div className="bg-[#FDFBF7] p-8 rounded-lg text-center border border-secondary/10 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary text-2xl">
                                    ⚡
                                </div>
                                <h3 className="text-xl font-bold font-serif text-text mb-3">극심한 가려움</h3>
                                <p className="text-text/70 text-sm leading-relaxed">
                                    초기에 가장 참기 힘든 증상으로,<br />긁으면 2차 감염의<br />위험이 있습니다.
                                </p>
                            </div>
                            <div className="bg-[#FDFBF7] p-8 rounded-lg text-center border border-secondary/10 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary text-2xl">
                                    🌵
                                </div>
                                <h3 className="text-xl font-bold font-serif text-text mb-3">각질과 태선화</h3>
                                <p className="text-text/70 text-sm leading-relaxed">
                                    수포가 가라앉으며 껍질이 벗겨지고,<br />피부가 두꺼워지고 거칠어지는<br />태선화 현상
                                </p>
                            </div>
                        </div>

                        {/* Causes & Treatment */}
                        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
                            <div className="w-full md:w-1/2">
                                <h3 className="text-2xl font-bold font-serif text-primary mb-4">원인과 치료의 핵심</h3>
                                <div className="w-10 h-1 bg-primary/30 mb-6"></div>
                                <p className="text-text/80 leading-relaxed mb-4">
                                    한포진은 단순한 피부 질환이 아닙니다. 스트레스, 피로, 면역력 저하 등으로 인해 인체의 말초 혈액 순환에 장애가 생기고, 이로 인해 손발에 독소가 정체되어 발생하는 <strong>면역계 질환</strong>입니다.
                                </p>
                                <p className="text-text/80 leading-relaxed">
                                    따라서 단순히 피부의 염증을 억제하는 연고 치료만으로는 재발을 막기 어렵습니다. <strong>체내의 독소를 배출하고, 무너진 면역 체계를 바로잡는 근본적인 치료</strong>가 필요합니다.
                                </p>
                            </div>
                            <div className="w-full md:w-1/2 bg-secondary/5 p-8 rounded-lg">
                                <h4 className="text-xl font-bold font-serif text-text mb-4 text-center">동제당의 한포진 치료 솔루션</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5">1</span>
                                        <div>
                                            <strong className="block text-text mb-1">체질 맞춤 한약</strong>
                                            <p className="text-sm text-text/70">체내 독소 배출 및 면역력 강화, 기혈 순환 개선</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5">2</span>
                                        <div>
                                            <strong className="block text-text mb-1">약침 치료</strong>
                                            <p className="text-sm text-text/70">순수 한약재 추출물을 환부에 직접 주입하여 염증 완화</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5">3</span>
                                        <div>
                                            <strong className="block text-text mb-1">사혈 요법</strong>
                                            <p className="text-sm text-text/70">손끝, 발끝의 정체된 어혈을 제거하여 말초 순환 촉진</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
