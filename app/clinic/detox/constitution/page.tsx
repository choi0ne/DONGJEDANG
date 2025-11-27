'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function ConstitutionDetox() {
    return (
        <div className="min-h-screen bg-background text-text font-sans">
            <Header />

            <main>
                <section className="relative py-20 bg-[#FDFBF7]">
                    <div className="max-w-[1200px] mx-auto px-6 text-center">
                        <span className="block text-primary font-bold tracking-[0.3em] uppercase mb-4 animate-fadeIn">Constitution Detox</span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-text animate-fadeInUp">
                            체질식해독프로그램
                        </h1>
                        <div className="w-16 h-1 bg-primary/30 mx-auto mb-8 animate-fadeInUp delay-100"></div>
                        <p className="text-lg text-text/70 max-w-2xl mx-auto leading-relaxed font-serif animate-fadeInUp delay-200">
                            나의 체질에 맞는 식사,<br />
                            근본적인 건강을 되찾는 체질 개선 요법입니다.
                        </p>
                    </div>
                </section>

                <section className="py-16 bg-white">
                    <div className="max-w-[1000px] mx-auto px-6 prose max-w-none">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl font-bold font-serif text-primary mb-4">프로그램 소개</h2>
                            <p className="text-text/80">
                                사상체질 진단을 통해 개인의 체질을 정확히 파악하고<br />
                                그에 맞는 식단과 한약 처방을 통해<br />
                                대사 기능을 정상화하고 면역력을 높이는 프로그램입니다.
                            </p>
                        </div>

                        {/* Add more content here as needed */}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
