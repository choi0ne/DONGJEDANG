'use client';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import SubPageHeader from '@/app/components/SubPageHeader';
import Image from 'next/image';

export default function SpacePage() {
    return (
        <div className="min-h-screen flex flex-col font-sans text-[#222] bg-[#F8F7F0]">
            <Header />
            <SubPageHeader title="멈춤의 시작, 또다른 시작" />

            <main className="flex-1">
                <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-20">

                    {/* Visual Section - Placeholder for "Sunlight through Hanok window" */}
                    {/* User requested: "A tranquil interior of a traditional Korean clinic..." */}
                    <div className="w-full aspect-[16/9] md:aspect-[21/9] relative rounded-xl overflow-hidden shadow-lg mb-16 bg-[#EAE9E4]">
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-[#EAE9E4] to-[#D8D7D0]">
                            <span className="text-gray-400 font-serif italic">
                                (따뜻한 햇살이 들어오는 한옥 창가 이미지)
                            </span>
                        </div>
                        {/* If you have an image, uncomment and use this:
                        <Image 
                            src="/path/to/your/image.jpg" 
                            alt="따뜻한 햇살이 비치는 한의원 내부" 
                            fill 
                            className="object-cover" 
                        /> 
                        */}
                    </div>

                    {/* Text Content - Option A */}
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#000145] mb-10 leading-normal">
                            잠시 멈춰 선 당신에게,<br />
                            따뜻한 온기를 전합니다.
                        </h2>

                        <div
                            className="space-y-8 text-lg md:text-xl text-gray-700 leading-loose font-light word-keep-all"
                            style={{ fontFamily: 'NanumMyeongjoYetHangul, serif' }}
                        >
                            <p>
                                숨 가쁘게 달려온 일상 속에서 예고 없이 찾아온 아픔은 우리를 멈추게 합니다.<br />
                                하지만 괜찮습니다.<br />
                                이 멈춤은 끝이 아닌, 잠시 숨을 고르는 시간입니다.
                            </p>
                            <p>
                                아픔이 머물다 간 자리에 새살이 돋듯,<br />
                                이곳에서의 편안한 쉼이 당신의 건강한 '다른 시작'이 되기를 바랍니다.
                            </p>
                            <div className="pt-8">
                                <p className="text-xl md:text-2xl font-bold text-[#000145]">
                                    멈춤의 시작, 그리고 또다른 시작.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}
