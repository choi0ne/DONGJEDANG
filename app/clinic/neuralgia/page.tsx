import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function NeuralgiaClinic() {
    return (
        <div className="min-h-screen bg-background text-text">
            <Header />

            <main className="max-w-[1100px] mx-auto px-5 py-20">
                <h1 className="text-4xl font-bold mb-12 text-center font-serif text-primary">
                    통증/신경통 클리닉
                </h1>

                <div className="bg-white p-10 rounded-xl shadow-sm border border-secondary/20 transition-transform hover:-translate-y-1 duration-300">
                    <h2 className="text-2xl font-bold mb-6 font-serif text-primary border-b border-accent/30 pb-3 inline-block">
                        대상포진후 신경통
                    </h2>
                    <div className="prose max-w-none text-text/90 leading-relaxed">
                        <p>
                            대상포진이란 대상포진 바이러스가 신경세포에 잠복해 있다가 수 년 내지 수 십년 후 체내 면역이 떨어지는 상황이 일어났을 때 발병하는 질환을 말합니다.
                        </p>
                        <p className="mt-4">
                            그런데 대상포진이 아물고 나서 피부 병변은 사라졌으나 바이러스 신경에 바이러스가 잠복하여 따갑고 아픈 신경통이 남는 경우가 있습니다.
                        </p>
                        <div className="mt-8 p-6 bg-secondary/10 rounded-lg border-l-4 border-primary">
                            <p className="font-bold text-lg text-primary mb-2">동제당한의원의 치료법</p>
                            <p>
                                동제당한의원에서는 <strong className="text-accent">봉독요법</strong>과 <strong className="text-accent">화침</strong>을 통해 이러한 만성 통증의 근본 원인을 치료합니다.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
