import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function DetoxClinic() {
    return (
        <div className="min-h-screen bg-background text-text">
            <Header />

            <main className="max-w-[1100px] mx-auto px-5 py-20">
                <h1 className="text-4xl font-bold mb-12 text-center font-serif text-primary">
                    해독요법 클리닉
                </h1>

                {/* Introduction */}
                <div className="bg-white p-10 rounded-xl shadow-sm border border-secondary/20 mb-10 transition-transform hover:-translate-y-1 duration-300">
                    <h2 className="text-2xl font-bold mb-6 font-serif text-primary border-b border-accent/30 pb-3 inline-block">
                        상황에 맞는 해독요법
                    </h2>
                    <div className="prose max-w-none text-text/90 leading-relaxed">
                        <p>
                            해독요법은 몸안으로 들어가는 음식물을 조절함으로 몸의 노폐물을 제거함으로써 몸의 정상적인 상태로 만드는 요법입니다.
                        </p>
                        <p className="mt-4">
                            그러나, 사람의 상태에 따라서 완전한 금식을 통한 <strong className="text-accent">절식해독요법</strong>과 체질맞는 음식을 통해서 하는 <strong className="text-accent">체질식해독요법</strong>으로 나누어서 접근해야합니다.
                        </p>
                    </div>
                </div>

                {/* Constitutional Detox */}
                <div className="bg-white p-10 rounded-xl shadow-sm border border-secondary/20 mb-10 transition-transform hover:-translate-y-1 duration-300">
                    <h2 className="text-2xl font-bold mb-6 font-serif text-primary border-b border-accent/30 pb-3 inline-block">
                        체질식 해독요법
                    </h2>
                    <div className="prose max-w-none text-text/90 leading-relaxed">
                        <p>
                            저희 한의원의 해독다이어트 프로그램은 과도한 식사량 제한을 통한 다이어트를 지양하고 올바른 식습관을 통해 건강해지고 요요없는 다이어트를 목표로 합니다.
                        </p>
                        <h3 className="text-xl font-bold mt-8 mb-4 text-primary/90">왜 굶는 것이 나쁘냐?</h3>
                        <p>
                            과도한 식사량 제한은 단기간은 효과를 볼 수도 있으나 결국은 근육량이 줄게 되어 기초대사량이 줄어들게 되기 때문입니다.
                        </p>
                        <p className="mt-2">
                            그래서 나중에는 식사량을 아무리 줄여도 체지방이 늘어날 수밖에 없는 상태가 되어 버립니다.
                        </p>
                    </div>
                </div>

                {/* Fasting Detox */}
                <div className="bg-white p-10 rounded-xl shadow-sm border border-secondary/20 transition-transform hover:-translate-y-1 duration-300">
                    <h2 className="text-2xl font-bold mb-6 font-serif text-primary border-b border-accent/30 pb-3 inline-block">
                        절식 해독요법
                    </h2>
                    <div className="prose max-w-none text-text/90 leading-relaxed">
                        <h3 className="text-xl font-bold mt-2 mb-4 text-primary/90">해독다이어트 중 주의사항</h3>
                        <div className="bg-secondary/10 p-6 rounded-lg border-l-4 border-accent">
                            <ul className="list-none space-y-4">
                                <li>
                                    <strong className="block text-lg text-primary mb-2">초반에 체수분의 변동으로 인해서 혈압의 변화가 옵니다.</strong>
                                    <p>
                                        원래 부종이 많으시거나 신장의 기능이 안 좋으신분들은 가슴뜀과 불면등을 느낄 수 있습니다.<br />
                                        그러므로, 꼭 더욱더 철저히 짠 음식을 조심하시고 물을 충분히 드셔야합니다.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
