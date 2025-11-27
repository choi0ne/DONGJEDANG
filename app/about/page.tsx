'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
    return (
        <div className="min-h-screen bg-background text-text font-sans">
            <Header />

            <main>
                {/* Hero Section with Title */}
                <section className="relative py-20 md:py-32 bg-[#FDFBF7] overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/korean-pattern.png")' }}>
                    </div>
                    <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
                        <span className="block text-primary font-bold tracking-[0.3em] uppercase mb-4 animate-fadeIn">Since 2010</span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif text-text animate-fadeInUp">
                            동제당한의원
                        </h1>
                        <div className="w-16 h-1 bg-primary/30 mx-auto mb-8 animate-fadeInUp delay-100"></div>
                        <p className="text-lg md:text-xl text-text/70 max-w-2xl mx-auto leading-relaxed font-serif animate-fadeInUp delay-200">
                            자연의 흐름을 따르는 치유,<br />
                            몸과 마음이 쉬어가는 공간입니다.
                        </p>
                    </div>
                </section>

                {/* Photo Gallery (Baekrokdam Style) */}
                <section className="py-16 bg-white">
                    <div className="max-w-[1200px] mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg group animate-fadeInUp delay-300">
                                <img
                                    src="https://images.unsplash.com/photo-1617104424032-b9bd6972d0e4?q=80&w=2070&auto=format&fit=crop"
                                    alt="한의원 내부"
                                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg group animate-fadeInUp delay-400">
                                <img
                                    src="https://images.unsplash.com/photo-1514416432279-50fac261c7dd?q=80&w=2071&auto=format&fit=crop"
                                    alt="약재"
                                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                        </div>

                        {/* Greetings Section */}
                        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start mb-24 animate-fadeInUp delay-500 text-center md:text-left">
                            <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
                                <h2 className="text-3xl font-bold font-serif text-primary mb-6">원장님 인사말</h2>
                                <div className="w-12 h-1 bg-secondary/50 mb-6"></div>
                                <p className="text-text/60 font-medium tracking-wide">Director's Message</p>
                            </div>
                            <div className="w-full md:w-2/3 prose max-w-none text-text/80 leading-loose font-serif text-lg">
                                <p className="text-2xl font-bold text-text mb-8">
                                    "환자분의 아픔을 제 아픔처럼 여기며,<br />
                                    정성을 다해 진료하겠습니다."
                                </p>
                                <p className="mb-6">
                                    안녕하세요. 동제당한의원 원장 최장혁입니다.<br />
                                    저희 한의원은 단순히 병을 고치는 곳을 넘어, 환자분들의 지친 몸과 마음을 위로하고
                                    진정한 건강을 되찾아드리는 치유의 공간이 되고자 합니다.
                                </p>
                                <p>
                                    자연의 이치에 따르는 치료, 몸의 근본적인 균형을 바로잡는 치료를 통해
                                    여러분의 삶이 더욱 건강하고 활기차질 수 있도록 늘 곁에서 함께하겠습니다.
                                </p>
                            </div>
                        </div>

                        {/* Philosophy Section */}
                        <div className="bg-[#FDFBF7] p-10 md:p-16 rounded-2xl border border-secondary/10 animate-fadeInUp delay-500">
                            <div className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-left">
                                    <h2 className="text-3xl font-bold font-serif text-primary mb-6">치료 철학</h2>
                                    <h3 className="text-xl font-bold text-accent mb-6">만 시간의 법칙, 그 이상의 정성</h3>
                                    <div className="space-y-6 text-text/80 leading-relaxed">
                                        <p>
                                            봉독과 화침이라는 치료를 시작한 지 어느덧 8년이 지났습니다.
                                            하루 10시간, 1년 300일 진료한다고 가정하면 얼추 2만 4천 시간이 넘는 시간 동안
                                            오직 환자분들의 통증 치료와 회복을 위해 매진해 왔습니다.
                                        </p>
                                        <p>
                                            어떤 분야의 전문가가 되려면 최소한 1만 시간의 훈련이 필요하다는 '1만 시간의 법칙'이 있습니다.
                                            저는 그 두 배가 넘는 시간 동안 쌓아온 풍부한 임상 경험과 노하우를 바탕으로,
                                            환자분 한 분 한 분에게 가장 적합하고 효과적인 치료를 제공해 드릴 것을 약속드립니다.
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 order-1 md:order-2">
                                    <div className="relative aspect-square rounded-full overflow-hidden border-4 border-white shadow-2xl max-w-[400px] mx-auto">
                                        <img
                                            src="https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=2000&auto=format&fit=crop"
                                            alt="정성"
                                            className="object-cover w-full h-full hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
