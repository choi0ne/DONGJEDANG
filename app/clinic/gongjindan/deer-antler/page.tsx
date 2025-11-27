'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function DeerAntlerGongjindan() {
    return (
        <div className="min-h-screen bg-background text-text font-sans">
            <Header />

            <main>
                <section className="relative py-20 bg-[#FDFBF7]">
                    <div className="max-w-[1200px] mx-auto px-6 text-center">
                        <span className="block text-primary font-bold tracking-[0.3em] uppercase mb-4 animate-fadeIn">Deer Antler Gongjindan</span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-text animate-fadeInUp">
                            녹용공진단
                        </h1>
                        <div className="w-16 h-1 bg-primary/30 mx-auto mb-8 animate-fadeInUp delay-100"></div>
                        <p className="text-lg text-text/70 max-w-2xl mx-auto leading-relaxed font-serif animate-fadeInUp delay-200">
                            깊은 보양의 힘,<br />
                            녹용의 정수로 허약해진 몸을 채워줍니다.
                        </p>
                    </div>
                </section>

                <section className="py-16 bg-white">
                    <div className="max-w-[1000px] mx-auto px-6 prose max-w-none">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl font-bold font-serif text-primary mb-4">효능 및 특징</h2>
                            <p className="text-text/80">
                                최상급 녹용을 듬뿍 넣어 근골격을 튼튼하게 하고,<br />
                                부족한 혈을 보충하여 체력 증진과 성장 발육을 돕습니다.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
