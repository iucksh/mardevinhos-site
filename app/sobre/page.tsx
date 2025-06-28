'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function SobrePage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const team = [
        {
            name: 'Carlos Silva',
            role: 'Fundador & Sommelier',
            description:
                'Mais de 15 anos de experiência no mercado de vinhos, especialista em harmonização gastronômica.',
            image: '👨‍💼',
        },
        {
            name: 'Ana Costa',
            role: 'Consultora Comercial',
            description:
                'Especialista em gestão comercial para o setor HORECA, com foco em otimização de resultados.',
            image: '👩‍💼',
        },
        {
            name: 'Roberto Mendes',
            role: 'Especialista em Vinhos',
            description:
                'Enólogo com vasta experiência em seleção e avaliação de vinhos para diferentes perfis de estabelecimentos.',
            image: '👨‍🔬',
        },
    ];

    const values = [
        {
            title: 'Excelência',
            description: 'Buscamos sempre a mais alta qualidade em nossos serviços e produtos.',
            icon: '⭐',
        },
        {
            title: 'Transparência',
            description: 'Relacionamentos baseados na confiança e comunicação clara.',
            icon: '🤝',
        },
        {
            title: 'Inovação',
            description: 'Sempre em busca de novas soluções para o mercado de vinhos.',
            icon: '💡',
        },
        {
            title: 'Parceria',
            description: 'Trabalhamos como parceiros de longo prazo dos nossos clientes.',
            icon: '🤝',
        },
    ];

    return (
        <div className="min-h-screen" data-oid="xt2:ev:">
            {/* Hero Section */}
            <section className="max-w-6xl mx-auto px-8 py-16" data-oid="bi.dbth">
                <div
                    className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    data-oid="6zrx5qf"
                >
                    <div className="text-center mb-16" data-oid="hltf7vf">
                        <h1
                            className="text-5xl md:text-6xl font-light leading-tight mb-8"
                            data-oid="qodtngr"
                        >
                            Sobre a{' '}
                            <span className="text-teal-300" data-oid="1spf3ek">
                                Mar de Vinhos
                            </span>
                        </h1>
                        <p
                            className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed"
                            data-oid="4bpln:6"
                        >
                            Nascemos da paixão pelo vinho e da visão de transformar o mercado HORECA
                            brasileiro, conectando estabelecimentos diretamente com os melhores
                            produtores e importadores.
                        </p>
                    </div>
                </div>

                {/* Nossa História */}
                <div className="grid md:grid-cols-2 gap-12 mb-20" data-oid="nh7wgpp">
                    <div
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
                        data-oid="x36l.ln"
                    >
                        <h2 className="text-3xl font-light mb-6 text-teal-300" data-oid="qvrtwet">
                            Nossa História
                        </h2>
                        <p className="text-purple-200 mb-4" data-oid="owv78ii">
                            A Mar de Vinhos foi fundada em 2020 com o objetivo de revolucionar a
                            forma como restaurantes, bares e hotéis trabalham com vinhos no Brasil.
                        </p>
                        <p className="text-purple-200 mb-4" data-oid="pjf2468">
                            Percebemos que muitos estabelecimentos enfrentavam dificuldades para
                            criar cartas de vinhos atrativas e lucrativas, além de lidar com
                            intermediários que encareciam os produtos.
                        </p>
                        <p className="text-purple-200" data-oid="af4g9r-">
                            Decidimos então criar uma ponte direta entre o setor HORECA e os
                            produtores, oferecendo consultoria especializada e condições comerciais
                            diferenciadas.
                        </p>
                    </div>

                    <div
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
                        data-oid="0s4nefq"
                    >
                        <h2 className="text-3xl font-light mb-6 text-teal-300" data-oid="r4-k70m">
                            Nossa Missão
                        </h2>
                        <p className="text-purple-200 mb-4" data-oid="cm96yel">
                            <strong data-oid=":d6nb51">Missão:</strong> Democratizar o acesso a
                            vinhos de qualidade no setor HORECA, oferecendo soluções completas que
                            aumentem a lucratividade e satisfação dos clientes.
                        </p>
                        <p className="text-purple-200 mb-4" data-oid="fzqm4je">
                            <strong data-oid="rov9b8r">Visão:</strong> Ser a principal referência em
                            consultoria de vinhos para o setor HORECA no Brasil.
                        </p>
                        <p className="text-purple-200" data-oid="x2gisou">
                            <strong data-oid="a5gy-3:">Valores:</strong> Excelência, transparência,
                            inovação e parceria de longo prazo.
                        </p>
                    </div>
                </div>

                {/* Nossos Valores */}
                <div className="mb-20" data-oid="eq_ihtj">
                    <h2
                        className="text-4xl font-light text-center mb-12 text-teal-300"
                        data-oid="gocnu:w"
                    >
                        Nossos Valores
                    </h2>
                    <div className="grid md:grid-cols-4 gap-6" data-oid="zfll8ko">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
                                data-oid=":ik_srg"
                            >
                                <div className="text-4xl mb-4" data-oid="i0ucl4v">
                                    {value.icon}
                                </div>
                                <h3
                                    className="text-xl font-semibold mb-3 text-teal-300"
                                    data-oid="j1fm35b"
                                >
                                    {value.title}
                                </h3>
                                <p className="text-purple-200 text-sm" data-oid="t9qb03p">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Nossa Equipe */}
                <div className="mb-20" data-oid="5ilr5w9">
                    <h2
                        className="text-4xl font-light text-center mb-12 text-teal-300"
                        data-oid="7g-lkdm"
                    >
                        Nossa Equipe
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8" data-oid="g38alys">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300"
                                data-oid="v2x-rk7"
                            >
                                <div className="text-6xl mb-4" data-oid="ui0t.76">
                                    {member.image}
                                </div>
                                <h3
                                    className="text-xl font-semibold mb-2 text-teal-300"
                                    data-oid="uzzccr8"
                                >
                                    {member.name}
                                </h3>
                                <p className="text-purple-300 font-medium mb-4" data-oid="qd44pwj">
                                    {member.role}
                                </p>
                                <p className="text-purple-200 text-sm" data-oid="jk-fnpg">
                                    {member.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Números */}
                <div
                    className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 mb-20"
                    data-oid="8lbjgtb"
                >
                    <h2
                        className="text-4xl font-light text-center mb-12 text-teal-300"
                        data-oid=".zk8es-"
                    >
                        Nossos Números
                    </h2>
                    <div className="grid md:grid-cols-4 gap-8 text-center" data-oid="ccl809u">
                        {[
                            { number: '200+', label: 'Clientes Atendidos' },
                            { number: '50+', label: 'Fornecedores Parceiros' },
                            { number: '1000+', label: 'Vinhos Catalogados' },
                            { number: '95%', label: 'Satisfação dos Clientes' },
                        ].map((stat, index) => (
                            <div key={index} data-oid="bbiqd2b">
                                <div
                                    className="text-4xl font-bold text-teal-300 mb-2"
                                    data-oid="wo.f5vs"
                                >
                                    {stat.number}
                                </div>
                                <p className="text-purple-200" data-oid="l:23ibi">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center" data-oid="hyyub4h">
                    <h2 className="text-3xl font-light mb-6" data-oid="0ul8kbg">
                        Quer conhecer melhor nosso trabalho?
                    </h2>
                    <p className="text-xl text-purple-200 mb-8" data-oid="udpo450">
                        Agende uma conversa e descubra como podemos ajudar seu estabelecimento.
                    </p>
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        data-oid="0ub_0dc"
                    >
                        <Link
                            href="/agendar"
                            className="px-8 py-4 bg-teal-500 text-white rounded-full hover:bg-teal-400 transition-colors text-lg font-medium"
                            data-oid="f5lv2t4"
                        >
                            Agendar Reunião
                        </Link>
                        <Link
                            href="/casos-de-sucesso"
                            className="px-8 py-4 border border-teal-300 rounded-full hover:bg-teal-300 hover:text-purple-900 transition-colors text-lg"
                            data-oid="ipkytja"
                        >
                            Ver Casos de Sucesso
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
