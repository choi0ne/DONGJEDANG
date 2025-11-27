'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function HeightGrowth() {
    return (
        <div className="min-h-screen bg-background text-text font-sans">
            <Header />

            <main>
                <section className="relative py-20 bg-[#FDFBF7]">
                    <div className="max-w-[1200px] mx-auto px-6 text-center">
                        <span className="block text-primary font-bold tracking-[0.3em] uppercase mb-4 animate-fadeIn">Height Growth</span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-text animate-fadeInUp">
                            키성장한약
                        </h1>
                        <div className="w-16 h-1 bg-primary/30 mx-auto mb-8 animate-fadeInUp delay-100"></div>
                        <p className="text-lg text-text/70 max-w-2xl mx-auto leading-relaxed font-serif animate-fadeInUp delay-200">
                            우리 아이의 숨겨진 키,<br />
                            성장 잠재력을 깨워 쑥쑥 자라게 돕습니다.
                        </p>
                    </div>
                </section>

                <section className="py-16 bg-white">
                    <div className="max-w-[1000px] mx-auto px-6 prose max-w-none">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl font-bold font-serif text-primary mb-4">프로그램 소개</h2>
                            <p className="text-text/80">
                                성장판이 닫히기 전, 뼈와 근육의 성장을 돕는 맞춤 한약으로<br />
                                아이의 체질을 개선하고 균형 잡힌 성장을 유도합니다.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
