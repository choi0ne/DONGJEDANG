'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Medicine() {
    return (
        <div className="min-h-screen bg-background text-text font-sans">
            <Header />

            <main>
                <section className="relative py-20 bg-[#FDFBF7]">
                    <div className="max-w-[1200px] mx-auto px-6 text-center">
                        <span className="block text-primary font-bold tracking-[0.3em] uppercase mb-4 animate-fadeIn">Herbal Medicine</span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-text animate-fadeInUp">
                            동제당 청정한약
                        </h1>
                        <div className="w-16 h-1 bg-primary/30 mx-auto mb-8 animate-fadeInUp delay-100"></div>
                        <p className="text-lg text-text/70 max-w-2xl mx-auto leading-relaxed font-serif animate-fadeInUp delay-200">
                            엄선된 청정 약재만을 사용하여<br />
                            정성을 다해 달여냅니다.
                        </p>
                    </div>
                </section>

                <section className="py-16 bg-white">
                    <div className="max-w-[1000px] mx-auto px-6 prose max-w-none">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl font-bold font-serif text-primary mb-4">믿을 수 있는 약재</h2>
                            <p className="text-text/80">
                                식약처의 엄격한 품질 검사를 통과한 규격품 한약재만을 사용합니다.<br />
                                중금속, 잔류농약 걱정 없는 안전한 한약입니다.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div className="p-6 border border-secondary/10 rounded-xl">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary text-2xl font-bold">1</div>
                                <h3 className="font-bold text-lg mb-2">청정 약재 선별</h3>
                                <p className="text-sm text-text/70">최상의 약효를 내는<br />우수한 약재 선별</p>
                            </div>
                            <div className="p-6 border border-secondary/10 rounded-xl">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary text-2xl font-bold">2</div>
                                <h3 className="font-bold text-lg mb-2">정성스런 탕전</h3>
                                <p className="text-sm text-text/70">전통 방식과 현대적 위생의<br />조화로운 탕전 시스템</p>
                            </div>
                            <div className="p-6 border border-secondary/10 rounded-xl">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary text-2xl font-bold">3</div>
                                <h3 className="font-bold text-lg mb-2">철저한 위생관리</h3>
                                <p className="text-sm text-text/70">탕전실 위생 관리 및<br />포장 시스템</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
