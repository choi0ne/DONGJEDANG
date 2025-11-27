'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function NeuroClinic() {
    return (
        <div className="min-h-screen bg-background text-text font-sans">
            <Header />

            <main className="max-w-[1200px] mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase mb-2 block animate-fadeIn">Clinic</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-text animate-fadeInUp">
                        신경정신질환 클리닉
                    </h1>
                    <div className="w-16 h-1 bg-primary/30 mx-auto animate-fadeInUp delay-100"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-fadeInUp delay-200">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=2070&auto=format&fit=crop"
                            alt="신경정신질환 치료"
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold font-serif text-primary">마음의 평화가 몸의 치유로 이어집니다</h2>
                        <p className="text-lg text-text/80 leading-relaxed">
                            스트레스, 불면증, 우울증, 공황장애 등 마음의 병은 몸의 병으로 이어질 수 있습니다.
                            한의학적 접근을 통해 자율신경계의 균형을 맞추고, 심신의 안정을 되찾아 드립니다.
                        </p>
                        <ul className="space-y-3 text-text/80">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                <span>불면증 / 수면장애</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                <span>우울증 / 불안장애</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                <span>화병 / 스트레스성 질환</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
