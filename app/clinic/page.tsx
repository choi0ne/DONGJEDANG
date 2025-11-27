import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function ClinicLanding() {
    return (
        <div className="min-h-screen bg-background text-text">
            <Header />

            <main className="max-w-[1100px] mx-auto px-5 py-20">
                <h1 className="text-4xl font-bold mb-12 text-center font-serif text-primary">
                    진료 클리닉
                </h1>

                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <p className="text-lg text-text/80 leading-relaxed">
                        동제당한의원은 환자분들의 증상과 체질에 맞는 맞춤형 치료를 제공합니다.<br />
                        아래의 전문 클리닉을 통해 더 건강한 삶을 되찾으세요.
                    </p>
                </div>

                <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
                    {[
                        {
                            title: '해독 다이어트',
                            desc: '몸안의 독소를 배출하고 신진대사를 정상화하여 요요 없는 건강한 체중 감량을 도와드립니다.',
                            link: '/clinic/detox',
                            icon: '🌿'
                        },
                        {
                            title: '통증/신경통 클리닉',
                            desc: '봉독요법과 화침을 통해 디스크, 관절염, 대상포진 후 신경통 등 만성 통증의 근본 원인을 치료합니다.',
                            link: '/clinic/neuralgia',
                            icon: '⚡'
                        },
                        {
                            title: '비만 클리닉',
                            desc: '30대 이후의 다이어트, 체내 해독과 신진대사 증가를 통한 근본적 비만 치료와 체질 개선.',
                            link: '/clinic/obesity',
                            icon: '⚖️'
                        }
                    ].map((card) => (
                        <Link key={card.title} href={card.link} className="block group">
                            <div className="bg-white p-10 rounded-xl border border-secondary/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg h-full flex flex-col items-center text-center">
                                <div className="text-5xl mb-6">{card.icon}</div>
                                <h3 className="font-serif text-2xl mb-4 text-primary group-hover:text-accent transition-colors">{card.title}</h3>
                                <p className="text-text/80 leading-relaxed mb-6">{card.desc}</p>
                                <div className="mt-auto text-sm font-bold text-secondary group-hover:text-primary transition-colors flex items-center">
                                    자세히 보기
                                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
