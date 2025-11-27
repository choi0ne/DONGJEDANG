import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ObesityClinic() {
    return (
        <div className="min-h-screen bg-background text-text">
            <Header />

            <main className="max-w-[1100px] mx-auto px-5 py-20">
                <h1 className="text-4xl font-bold mb-12 text-center font-serif text-primary">
                    비만 클리닉
                </h1>

                <div className="bg-white p-10 rounded-xl shadow-sm border border-secondary/20 transition-transform hover:-translate-y-1 duration-300">
                    <h2 className="text-2xl font-bold mb-6 font-serif text-primary border-b border-accent/30 pb-3 inline-block">
                        30대 이후의 다이어트
                    </h2>
                    <div className="prose max-w-none text-text/90 leading-relaxed">
                        <p>
                            대사증후군의 변화가 생기는 시점이 30대 이후가 됩니다.<br />
                            <span className="text-text/70 text-sm">(특히 여성의 경우 이 무렵에는 결혼 후 출산을 하는 시점이기도 하죠. 출산 후 산후 관리가 되지 못하면 이런 변화는 가속화됩니다.)</span>
                        </p>
                        <p className="mt-6">
                            30대 이전에는 피도 깨끗하고(?) 몸속 염증도 별로 없고 콩팥의 대사도 좋아서 다이어트를 할 때 식욕의 증가만 잡아주면 만사 OK이지만,
                        </p>
                        <p className="mt-4 text-lg font-bold text-primary">
                            30대 이후에는 식욕 컨트롤 뿐만 아니라 체내의 해독과 신진대사의 증가가 반드시 필요합니다.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
