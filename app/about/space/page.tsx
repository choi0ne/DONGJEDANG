'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Space() {
    return (
        <div className="min-h-screen bg-background text-text font-sans">
            <Header />

            <main>
                <section className="relative py-20 bg-[#FDFBF7]">
                    <div className="max-w-[1200px] mx-auto px-6 text-center">
                        <span className="block text-primary font-bold tracking-[0.3em] uppercase mb-4 animate-fadeIn">Healing Space</span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-text animate-fadeInUp">
                            쉼의 시작, 회복의 공간
                        </h1>
                        <div className="w-16 h-1 bg-primary/30 mx-auto mb-8 animate-fadeInUp delay-100"></div>
                        <p className="text-lg text-text/70 max-w-2xl mx-auto leading-relaxed font-serif animate-fadeInUp delay-200">
                            편안한 마음으로 치료받으실 수 있도록<br />
                            정갈하고 아늑한 공간을 준비했습니다.
                        </p>
                    </div>
                </section>

                <section className="py-16 bg-white">
                    <div className="max-w-[1000px] mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Placeholder for facility images */}
                            <div className="aspect-[4/3] bg-gray-100 rounded-lg flex items-center justify-center text-text/30">
                                대기실 이미지
                            </div>
                            <div className="aspect-[4/3] bg-gray-100 rounded-lg flex items-center justify-center text-text/30">
                                진료실 이미지
                            </div>
                            <div className="aspect-[4/3] bg-gray-100 rounded-lg flex items-center justify-center text-text/30">
                                치료실 이미지
                            </div>
                            <div className="aspect-[4/3] bg-gray-100 rounded-lg flex items-center justify-center text-text/30">
                                파우더룸 이미지
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
