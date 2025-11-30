'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SubPageHeader from '../../components/SubPageHeader';

export default function SkinClinicPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans text-text bg-background">
            <Header />
            <SubPageHeader title="피부질환 클리닉" subtitle="맑고 깨끗한 피부, 몸속부터 다스립니다" />

            <main className="flex-1 py-20">
                <div className="max-w-[1000px] mx-auto px-6">

                    {/* Intro Section */}
                    <section className="mb-20 text-center animate-fadeInUp">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
                            피부 질환, <br className="md:hidden" />
                            <span className="text-text">보이는 것 그 이상을 치료합니다</span>
                        </h2>
                        <p className="text-lg text-text/70 leading-relaxed max-w-3xl mx-auto">
                            피부는 우리 몸의 내부 상태를 비추는 거울입니다.<br />
                            단순히 피부 표면의 증상만을 완화하는 것이 아니라,<br />
                            체질 개선과 면역력 강화를 통해 재발 없는 근본 치료를 지향합니다.
                        </p>
                    </section>

                    {/* Key Features Grid */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 animate-fadeInUp delay-100">
                        <div className="bg-background p-8 rounded-2xl shadow-sm border border-secondary/10 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                            </div>
                            <h3 className="font-serif text-xl font-bold mb-3">체질별 맞춤 처방</h3>
                            <p className="text-text/70 leading-relaxed">
                                개개인의 체질과 피부 특성을 정밀하게 분석하여, <br />
                                가장 적합한 한약과 외용제를 처방합니다.
                            </p>
                        </div>
                        <div className="bg-background p-8 rounded-2xl shadow-sm border border-secondary/10 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <h3 className="font-serif text-xl font-bold mb-3">면역력 강화</h3>
                            <p className="text-text/70 leading-relaxed">
                                피부 장벽을 튼튼하게 하고 면역 체계를 바로잡아, <br />
                                외부 자극에도 쉽게 흔들리지 않는 건강한 피부를 만듭니다.
                            </p>
                        </div>
                        <div className="bg-background p-8 rounded-2xl shadow-sm border border-secondary/10 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            <h3 className="font-serif text-xl font-bold mb-3">독소 배출</h3>
                            <p className="text-text/70 leading-relaxed">
                                체내에 쌓인 열독과 노폐물을 원활하게 배출시켜, <br />
                                피부 트러블의 근본 원인을 제거합니다.
                            </p>
                        </div>
                        <div className="bg-background p-8 rounded-2xl shadow-sm border border-secondary/10 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <h3 className="font-serif text-xl font-bold mb-3">심리적 안정</h3>
                            <p className="text-text/70 leading-relaxed">
                                스트레스로 인한 피부 악화를 방지하기 위해, <br />
                                마음의 안정까지 고려한 통합적인 치료를 진행합니다.
                            </p>
                        </div>
                    </section>

                    {/* Treatment Areas */}
                    <section className="animate-fadeInUp delay-200">
                        <h3 className="font-serif text-2xl font-bold text-center mb-10">주요 진료 과목</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                            {['아토피 피부염', '건선', '지루성 피부염', '한포진', '두드러기', '여드름'].map((item, index) => (
                                <div key={index} className="bg-background p-6 rounded-xl text-center border border-secondary/10 hover:border-primary/30 transition-colors">
                                    <span className="font-medium text-lg text-text/80">{item}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>
            </main>

            <Footer />
        </div>
    );
}
