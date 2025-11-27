'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function GrowthClinic() {
    return (
        <div className="min-h-screen bg-background text-text font-sans">
            <Header />

            <main className="max-w-[1200px] mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase mb-2 block animate-fadeIn">Clinic</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-text animate-fadeInUp">
                        소아/수험생 클리닉
                    </h1>
                    <div className="w-16 h-1 bg-primary/30 mx-auto animate-fadeInUp delay-100"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-fadeInUp delay-200">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2072&auto=format&fit=crop"
                            alt="소아 성장"
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold font-serif text-primary">아이들의 꿈이 건강하게 자라납니다</h2>
                        <p className="text-lg text-text/80 leading-relaxed">
                            성장 부진, 성조숙증, 잦은 감기, 비염 등 소아 청소년기의 건강 문제를 관리합니다.
                            또한 수험생들의 체력 증진, 집중력 강화, 스트레스 관리를 통해 최상의 컨디션을 유지하도록 돕습니다.
                        </p>
                        <ul className="space-y-3 text-text/80">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                <span>성장 클리닉 / 성조숙증</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                <span>소아 보약 / 면역력 강화</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                <span>수험생 총명탕 / 체력 관리</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
