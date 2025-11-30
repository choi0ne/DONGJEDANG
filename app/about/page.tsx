'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import SubPageHeader from '../components/SubPageHeader';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans text-text bg-background">
            <Header />
            <SubPageHeader title="의료진 / 진료안내" />

            <main className="flex-1">
                <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-20">

                    {/* Hero Section with Profile Image & Philosophy */}
                    <div className="flex flex-col items-center gap-12 mb-24">
                        {/* Profile Image Area */}
                        <div className="w-full max-w-[500px] relative">
                            <div className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-lg bg-[#EAE9E4]">
                                {/* Placeholder for Director's Image - User to confirm specific file */}
                                <Image
                                    src="/프로필/Gemini_Generated_Image_eh3ohheh3ohheh3o.png"
                                    alt="최장혁 원장님"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Text Content Area */}
                        <div className="w-full max-w-3xl flex flex-col items-center text-center">
                            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-10 leading-tight">
                                "환자분의 아픔에<br />
                                <span className="text-text/80">깊이 공감하며<br /></span>
                                <span className="text-text/60">근본을 치료합니다"</span>
                            </h2>

                            <div className="space-y-6 text-lg text-text/80 leading-relaxed font-light text-left md:text-center word-keep-all">
                                <p>
                                    안녕하세요, 동제당한의원 대표원장 <strong>최장혁</strong>입니다.
                                </p>
                                <p>
                                    몸이 아프면 마음도 함께 힘들어집니다.<br />
                                    단순히 병증만을 치료하는 것이 아니라,<br />
                                    환자분들의 지친 마음까지 헤아리는 따뜻한 주치의가 되고자 합니다.
                                </p>
                                <p>
                                    우리 몸은 스스로 회복하려는 힘을 가지고 있습니다.<br />
                                    그 힘이 약해졌을 때, 올바른 방향으로 이끌어주는 것이 저의 역할입니다.<br />
                                    정성어린 한약과 침구 치료로 여러분의 건강한 일상을 되찾아 드리겠습니다.
                                </p>
                                <p>
                                    언제나 연구하고 노력하며, 가족을 대하는 마음으로 진료하겠습니다.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Medical Hours & Reservation Guide */}
                    <div className="border-t border-secondary/20 pt-10 mt-10 font-sans">
                        <div className="flex flex-col gap-6 max-w-xl mx-auto">
                            {/* Hours */}
                            <div>
                                <h3 className="text-[13px] font-bold text-primary mb-3 flex items-center gap-2">
                                    <span className="w-1 h-1 rounded-full bg-primary"></span>
                                    진료 시간 안내
                                </h3>
                                <div className="space-y-2 text-text/80 text-[11px] leading-relaxed">
                                    <div className="flex flex-col sm:flex-row sm:gap-4">
                                        <strong className="block mb-0.5 text-primary min-w-[50px]">평일</strong>
                                        <div>
                                            <p>오전 9:00 ~ 오후 6:00</p>
                                            <p className="text-[10px] text-secondary mt-0.5">* 오후 6시이후 7시까지 진료는 사전예약제로만 진행합니다.</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:gap-4">
                                        <strong className="block mb-0.5 text-primary min-w-[50px]">토요일</strong>
                                        <div>
                                            <p>오전 9:00 ~ 오후 3:00</p>
                                            <p className="text-[10px] text-secondary mt-0.5">* 오후 2시이후 3시까지 진료는 사전예약제로만 진행합니다.</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:gap-4">
                                        <strong className="block mb-0.5 text-primary min-w-[50px]">점심시간</strong>
                                        <p>오후 1:00 ~ 2:00</p>
                                    </div>
                                    <div className="text-primary font-medium text-[11px]">
                                        일요일, 공휴일 휴진
                                    </div>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="w-full h-[1px] bg-black/10"></div>

                            {/* Reservation Info */}
                            <div>
                                <h3 className="text-[13px] font-bold text-primary mb-3 flex items-center gap-2">
                                    <span className="w-1 h-1 rounded-full bg-primary"></span>
                                    예약 및 진료 안내
                                </h3>
                                <div className="space-y-1.5 text-text/80 leading-relaxed text-[11px]">
                                    <p>
                                        동제당한의원은 환자 한분한분을 보다 세밀하게 진료하기 위해 원칙상 예약제로 운영됩니다.
                                    </p>
                                    <p>
                                        사전 예약 없이 방문하시는 경우에는 대기시간이 다소 길어질 수 있습니다.
                                    </p>
                                    <p>
                                        의료진과의 첫상담은 길어질 수 있으니 여유 시간을 한 시간 이상으로 넉넉하게 잡으시길 권장합니다.
                                    </p>
                                    <p className="pt-1.5 font-medium text-primary">
                                        그 외에 궁금한 사항은 무엇이든 물어보세요.<br />
                                        항상 열린 마음으로 최선을 다해 답해드리겠습니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </main>

            <Footer />
        </div>
    );
}
