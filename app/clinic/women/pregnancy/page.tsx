'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function Pregnancy() {
    return (
        <div className="min-h-screen bg-background text-text font-sans">
            <Header />

            <main>
                <section className="relative py-20 bg-[#FDFBF7]">
                    <div className="max-w-[1200px] mx-auto px-6 text-center">
                        <span className="block text-primary font-bold tracking-[0.3em] uppercase mb-4 animate-fadeIn">Pregnancy Preparation</span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-text animate-fadeInUp">
                            임신준비
                        </h1>
                        <div className="w-16 h-1 bg-primary/30 mx-auto mb-8 animate-fadeInUp delay-100"></div>
                        <p className="text-lg text-text/70 max-w-2xl mx-auto leading-relaxed font-serif animate-fadeInUp delay-200">
                            건강한 아기를 만나는 첫걸음,<br />
                            엄마와 아빠의 몸을 최상의 상태로 준비합니다.
                        </p>
                    </div>
                </section>

                <section className="py-16 bg-white">
                    <div className="max-w-[1000px] mx-auto px-6 prose max-w-none">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl font-bold font-serif text-primary mb-4">증상 및 치료</h2>
                            <p className="text-text/80">
                                자궁과 난소의 기능을 강화하고 기혈 순환을 도와<br />
                                건강한 착상과 임신 유지를 위한 최적의 환경을 만듭니다.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
