'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SubPageHeader from '../../components/SubPageHeader';

export default function ENTClinicPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans text-text bg-background">
            <Header />
            <SubPageHeader title="이비인후과 클리닉" subtitle="숨쉬는 즐거움, 듣는 기쁨을 되찾아드립니다" />

            <main className="flex-1 py-20">
                <div className="max-w-[1000px] mx-auto px-6">

                    {/* Intro Section */}
                    <section className="mb-20 text-center animate-fadeInUp">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
                            답답한 코와 귀, <br className="md:hidden" />
                            <span className="text-text">근본적인 원인을 치료합니다</span>
                        </h2>
                        <p className="text-lg text-text/70 leading-relaxed max-w-3xl mx-auto">
                            반복되는 비염, 축농증, 이명 등으로 고생하고 계신가요?<br />
                            동제당한의원은 단순히 증상만을 억제하는 것이 아니라,<br />
                            호흡기 면역력을 강화하여 재발을 막는 근본 치료를 시행합니다.
                        </p>
                    </section>

                    {/* Key Features Grid */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 animate-fadeInUp delay-100">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/10 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
                            </div>
                            <h3 className="font-serif text-xl font-bold mb-3">호흡기 면역 강화</h3>
                            <p className="text-text/70 leading-relaxed">
                                폐와 기관지의 기능을 강화하여, <br />
                                외부 알레르기 물질이나 바이러스에 대한 저항력을 높입니다.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/10 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                            </div>
                            <h3 className="font-serif text-xl font-bold mb-3">염증 및 노폐물 제거</h3>
                            <p className="text-text/70 leading-relaxed">
                                코와 부비동, 귀 주변에 쌓인 농과 염증을 배출시켜, <br />
                                빠른 증상 완화와 함께 기능을 회복시킵니다.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/10 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                            </div>
                            <h3 className="font-serif text-xl font-bold mb-3">1:1 맞춤 한약</h3>
                            <p className="text-text/70 leading-relaxed">
                                환자의 체질과 증상의 경중에 따라 <br />
                                가장 효과적인 한약재를 선별하여 처방합니다.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/10 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <h3 className="font-serif text-xl font-bold mb-3">침구 치료 병행</h3>
                            <p className="text-text/70 leading-relaxed">
                                경혈을 자극하여 기혈 순환을 돕고, <br />
                                염증을 가라앉히는 침구 치료를 병행하여 효과를 높입니다.
                            </p>
                        </div>
                    </section>

                    {/* Treatment Areas */}
                    <section className="animate-fadeInUp delay-200">
                        <h3 className="font-serif text-2xl font-bold text-center mb-10">주요 진료 과목</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                            {['알레르기 비염', '만성 비염', '축농증 (부비동염)', '이명', '난청', '어지럼증'].map((item, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl text-center border border-secondary/10 hover:border-primary/30 transition-colors">
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
