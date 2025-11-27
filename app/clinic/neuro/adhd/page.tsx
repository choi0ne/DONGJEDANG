'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function ADHD() {
    return (
        <div className="min-h-screen bg-background text-text font-sans">
            <Header />

            <main>
                <section className="relative py-20 bg-[#FDFBF7]">
                    <div className="max-w-[1200px] mx-auto px-6 text-center">
                        <span className="block text-primary font-bold tracking-[0.3em] uppercase mb-4 animate-fadeIn">ADHD</span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-text animate-fadeInUp">
                            ADHD
                        </h1>
                        <div className="w-16 h-1 bg-primary/30 mx-auto mb-8 animate-fadeInUp delay-100"></div>
                        <p className="text-lg text-text/70 max-w-2xl mx-auto leading-relaxed font-serif animate-fadeInUp delay-200">
                            주의력 결핍과 과잉행동,<br />
                            뇌의 균형을 맞춰 집중력을 높입니다.
                        </p>
                    </div>
                </section>

                <section className="py-16 bg-white">
                    <div className="max-w-[1000px] mx-auto px-6 prose max-w-none">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl font-bold font-serif text-primary mb-4">증상 및 치료</h2>
                            <p className="text-text/80">
                                뇌 신경계의 불균형을 해소하고,<br />
                                정서적 안정을 통해 학습 능력과 사회성을 향상시킵니다.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
