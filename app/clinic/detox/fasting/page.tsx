'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function FastingDetox() {
    return (
        <div className="min-h-screen bg-background text-text font-sans">
            <Header />

            <main>
                <section className="relative py-20 bg-[#FDFBF7]">
                    <div className="max-w-[1200px] mx-auto px-6 text-center">
                        <span className="block text-primary font-bold tracking-[0.3em] uppercase mb-4 animate-fadeIn">Fasting Detox</span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-text animate-fadeInUp">
                            절식해독프로그램
                        </h1>
                        <div className="w-16 h-1 bg-primary/30 mx-auto mb-8 animate-fadeInUp delay-100"></div>
                        <p className="text-lg text-text/70 max-w-2xl mx-auto leading-relaxed font-serif animate-fadeInUp delay-200">
                            비움으로 채우는 건강,<br />
                            몸을 맑게 하는 절식 요법입니다.
                        </p>
                    </div>
                </section>

                <section className="py-16 bg-white">
                    <div className="max-w-[1000px] mx-auto px-6 prose max-w-none">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl font-bold font-serif text-primary mb-4">프로그램 소개</h2>
                            <p className="text-text/80">
                                일정 기간 동안 고형식의 섭취를 제한하고<br />
                                발효 한약과 효소를 통해 필수 영양소를 공급하며<br />
                                소화기를 휴식시키고 체내 독소를 배출하는 프로그램입니다.
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
