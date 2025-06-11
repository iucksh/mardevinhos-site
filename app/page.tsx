'use client';

import { useState, useEffect } from 'react';

export default function Page() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-teal-600 text-white"
            data-oid="z9g9nfq"
        >
            {/* Navigation */}
            <nav className="py-6 px-8 flex justify-between items-center" data-oid="6sy8zdt">
                <div className="flex items-center space-x-3" data-oid="h5kn76.">
                    <div
                        className="w-12 h-12 border-2 border-teal-300 rounded-full flex items-center justify-center"
                        data-oid="4ufi0da"
                    >
                        <div
                            className="w-6 h-8 border border-teal-300 rounded-t-full"
                            data-oid="ubl-v-o"
                        ></div>
                    </div>
                    <span
                        className="text-xl font-light tracking-wide text-teal-300"
                        data-oid="dmt-s46"
                    >
                        MAR DE VINHOS
                    </span>
                </div>
                <button
                    className="px-6 py-2 border border-teal-300 rounded-full text-sm hover:bg-teal-300 hover:text-purple-900 transition-all duration-300"
                    data-oid="y4l:vg0"
                >
                    Agendar Reunião
                </button>
            </nav>

            {/* Hero Section */}
            <main className="max-w-6xl mx-auto px-8 py-16" data-oid="kjvlxad">
                <div
                    className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    data-oid="nxx5msa"
                >
                    <h1
                        className="text-5xl md:text-7xl font-light leading-tight mb-8"
                        data-oid="h1:9h0p"
                    >
                        Conectando seu negócio a
                        <br data-oid="5-c_5x_" />
                        <span className="text-teal-300" data-oid="timzn-j">
                            importadores e vinícolas
                        </span>
                    </h1>

                    <p
                        className="text-xl text-purple-200 max-w-2xl mb-12 leading-relaxed"
                        data-oid="_9.pdq0"
                    >
                        Especialistas na criação, gestão e otimização da carta de vinhos para o
                        setor HORECA. Eliminamos intermediários, garantindo preços competitivos e
                        maior lucratividade.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 mb-16" data-oid="eggsvaz">
                        <button
                            className="px-8 py-4 bg-teal-500 text-white rounded-full hover:bg-teal-400 transition-colors text-lg font-medium"
                            data-oid="i65drof"
                        >
                            Vamos Conversar?
                        </button>
                        <button
                            className="px-8 py-4 border border-teal-300 rounded-full hover:bg-teal-300 hover:text-purple-900 transition-colors text-lg"
                            data-oid="9s4sh_v"
                        >
                            Conhecer Soluções
                        </button>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-20" data-oid="y:4:dgf">
                    <div
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
                        data-oid="5a_wwp6"
                    >
                        <div
                            className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mb-6"
                            data-oid="hy_5r82"
                        >
                            <svg
                                className="w-8 h-8 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="b-iaexv"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    data-oid="sx:bxzq"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-teal-300" data-oid="me-39-8">
                            Investimento Zero
                        </h3>
                        <p className="text-purple-200" data-oid="z8k6p:d">
                            O investimento para implementar nossa solução é ZERO. Comece hoje mesmo.
                        </p>
                    </div>

                    <div
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
                        data-oid="nop9n81"
                    >
                        <div
                            className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mb-6"
                            data-oid="-lywzw:"
                        >
                            <svg
                                className="w-8 h-8 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="9u8eqzw"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                    data-oid=".sy-c_o"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-teal-300" data-oid="84b5r.g">
                            Margem Atrativa
                        </h3>
                        <p className="text-purple-200" data-oid="-3sjc_h">
                            Aumento nas vendas devido a margem atrativa para o restaurante e cliente
                            final.
                        </p>
                    </div>

                    <div
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
                        data-oid="w0z3xyl"
                    >
                        <div
                            className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mb-6"
                            data-oid="-.liczz"
                        >
                            <svg
                                className="w-8 h-8 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="p0dxt7_"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                    data-oid="dxah:12"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-teal-300" data-oid="4zyiqoa">
                            Experiência Completa
                        </h3>
                        <p className="text-purple-200" data-oid="0xzw85r">
                            Carta personalizada, treinamentos e suporte contínuo para sua equipe.
                        </p>
                    </div>
                </div>

                {/* Process Section */}
                <div className="text-center mb-20" data-oid="m:v-v.c">
                    <h2 className="text-4xl font-light mb-12 text-teal-300" data-oid="h9gb4r.">
                        Nosso Processo
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8" data-oid="h4k1gg7">
                        <div className="relative" data-oid="akydppt">
                            <div
                                className="w-20 h-20 bg-purple-700 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold"
                                data-oid="l.if-q1"
                            >
                                1
                            </div>
                            <h3 className="text-xl font-semibold mb-4" data-oid="0oy1opp">
                                Diagnóstico
                            </h3>
                            <p className="text-purple-200" data-oid="8:.pm_m">
                                Análise da carta atual, contagem de estoque e definições.
                            </p>
                        </div>
                        <div className="relative" data-oid="j5cp7lo">
                            <div
                                className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold"
                                data-oid="c_lqh11"
                            >
                                2
                            </div>
                            <h3 className="text-xl font-semibold mb-4" data-oid="f83jmqd">
                                Planejamento
                            </h3>
                            <p className="text-purple-200" data-oid="h6nb34c">
                                Criação de um plano estratégico e personalizado para alteração.
                            </p>
                        </div>
                        <div className="relative" data-oid="qmz4pl-">
                            <div
                                className="w-20 h-20 bg-purple-700 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold"
                                data-oid="dy6ruip"
                            >
                                3
                            </div>
                            <h3 className="text-xl font-semibold mb-4" data-oid="j0dl3nr">
                                Execução
                            </h3>
                            <p className="text-purple-200" data-oid="r76641n">
                                Implementação das soluções com treinamento e acompanhamento.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div
                    className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 text-center"
                    data-oid="w4i6q-o"
                >
                    <h2 className="text-3xl font-light mb-6" data-oid="zw.4rb7">
                        Gostariamos de agendar uma reunião para discutir
                        <br data-oid="ziu2lut" />
                        detalhadamente como trabalhamos e tirar suas dúvidas!
                    </h2>
                    <p className="text-xl text-teal-300 font-semibold mb-8" data-oid="tmd:y94">
                        PARA AGENDAR CLIQUE NO LINK ABAIXO:
                    </p>
                    <button
                        className="px-12 py-4 bg-gradient-to-r from-purple-700 to-purple-600 rounded-full text-xl font-semibold hover:from-purple-600 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
                        data-oid="87j-ua7"
                    >
                        🔗 AGENDAR
                    </button>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-white/20 py-12 px-8 text-center" data-oid="rjtjxk7">
                <div className="max-w-4xl mx-auto" data-oid="yv_e5ub">
                    <div
                        className="flex items-center justify-center space-x-3 mb-6"
                        data-oid="dlpyofk"
                    >
                        <div
                            className="w-12 h-12 border-2 border-teal-300 rounded-full flex items-center justify-center"
                            data-oid="_93i3u9"
                        >
                            <div
                                className="w-6 h-8 border border-teal-300 rounded-t-full"
                                data-oid=".0dxgc6"
                            ></div>
                        </div>
                        <span
                            className="text-xl font-light tracking-wide text-teal-300"
                            data-oid=".8az08u"
                        >
                            MAR DE VINHOS
                        </span>
                    </div>
                    <p className="text-purple-200 mb-4" data-oid="eelx28w">
                        Solicite nossa política comercial
                    </p>
                    <div className="flex justify-center space-x-8 text-sm" data-oid="zavq76m">
                        <span data-oid="ixcgg.6">📧 @mardevinhos.br</span>
                        <span data-oid="olfe4:p">🌐 www.mardevinhos.com</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
