'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function Sinusitis() {
    return (
        <div className="min-h-screen bg-background text-text font-sans">
            <Header />

            <main>
                <section className="relative py-20 bg-[#FDFBF7]">
                    <div className="max-w-[1200px] mx-auto px-6 text-center">
                        <span className="block text-primary font-bold tracking-[0.3em] uppercase mb-4 animate-fadeIn">Sinusitis</span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-text animate-fadeInUp">
                            축농증
                        </h1>
                        <div className="w-16 h-1 bg-primary/30 mx-auto mb-8 animate-fadeInUp delay-100"></div>
                        <p className="text-lg text-text/70 max-w-2xl mx-auto leading-relaxed font-serif animate-fadeInUp delay-200">
                            지긋지긋한 콧물과 두통,<br />
                            부비동의 염증을 제거하여 머리까지 맑게 합니다.
                        </p>
                    </div>
                </section>

                <section className="py-16 bg-white">
                    <div className="max-w-[1000px] mx-auto px-6 prose max-w-none">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl font-bold font-serif text-primary mb-4">증상 및 치료</h2>
                            <p className="text-text/80">
                                부비동 내에 고인 농을 배출시키고,<br />
                                점막의 부종을 가라앉혀 숨길을 열어줍니다.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
