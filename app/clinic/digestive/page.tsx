'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function DigestiveClinic() {
    return (
        <div className="min-h-screen bg-background text-text font-sans">
            <Header />

            <main className="max-w-[1200px] mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase mb-2 block animate-fadeIn">Clinic</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-text animate-fadeInUp">
                        소화기질환 클리닉
                    </h1>
                    <div className="w-16 h-1 bg-primary/30 mx-auto animate-fadeInUp delay-100"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-fadeInUp delay-200">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=2074&auto=format&fit=crop"
                            alt="소화기질환 치료"
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold font-serif text-primary">속이 편안해야 몸이 건강합니다</h2>
                        <p className="text-lg text-text/80 leading-relaxed">
                            만성 소화불량, 역류성 식도염, 과민성 대장 증후군 등 현대인을 괴롭히는 다양한 소화기 질환을 치료합니다.
                            단순히 증상만 완화하는 것이 아니라, 위장의 기능을 회복하고 몸의 균형을 되찾아 재발을 방지하는 근본 치료를 지향합니다.
                        </p>
                        <ul className="space-y-3 text-text/80">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                <span>만성 소화불량 / 위염</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                <span>역류성 식도염</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                <span>과민성 대장 증후군</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
