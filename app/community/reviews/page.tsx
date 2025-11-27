import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Reviews() {
    return (
        <div className="min-h-screen bg-background text-text">
            <Header />

            <main className="max-w-[1100px] mx-auto px-5 py-20">
                <h1 className="text-4xl font-bold mb-12 text-center font-serif text-primary">
                    치료 후기 및 임상 사례
                </h1>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-secondary/20 mb-10 text-center">
                    <p className="text-lg text-text/80">
                        이 게시판은 저희 동제당한의원에서의 치료 경험이자 자산입니다.<br />
                        주로 <strong className="text-primary">면역봉독</strong>과 <strong className="text-primary">화침</strong> 그리고 <strong className="text-primary">다이어트</strong> 치료 결과입니다.
                    </p>
                </div>

                {/* Recovered Review Item */}
                <div className="bg-white p-10 rounded-xl shadow-sm border border-secondary/20 transition-transform hover:-translate-y-1 duration-300">
                    <div className="flex justify-between items-start mb-6 border-b border-secondary/20 pb-4">
                        <h2 className="text-2xl font-bold font-serif text-primary">
                            [후기] 테니스엘보
                        </h2>
                        <div className="text-sm text-secondary text-right">
                            <span className="block">작성자: dalin79</span>
                            <span className="block">2016-06-12</span>
                        </div>
                    </div>

                    <div className="prose max-w-none text-text/90 leading-relaxed">
                        <p className="font-bold text-lg mb-4">김00(남성/37세)</p>
                        <p>
                            오른쪽 테니스엘보로 오랫동안 고생하신 남자 환자분의 치료후기입니다.
                        </p>
                        <p className="mt-4">
                            저희 동제당한의원에서 봉독, 화침, 한약 그리고 침치료 등으로 다소 오래(4개월여) 치료하셔서 좋은 결과가 있으셨습니다.
                        </p>
                        <p className="mt-4 text-accent font-medium">
                            앞으로도 자필후기 부탁드립니다.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
