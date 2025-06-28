'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CasosDeSucessoPage() {
    const [activeCase, setActiveCase] = useState(0);

    const cases = [
        {
            title: 'Restaurante Bella Vista',
            category: 'Restaurante Fine Dining',
            challenge: 'Carta de vinhos desatualizada com baixo giro de estoque',
            solution:
                'Reformulação completa da carta com foco em vinhos brasileiros e harmonizações',
            results: [
                'Aumento de 150% nas vendas de vinhos',
                'Redução de 40% no estoque parado',
                'Melhoria na satisfação dos clientes',
                'Aumento da margem de lucro em 35%',
            ],

            testimonial:
                'A Mar de Vinhos transformou completamente nossa operação. Hoje o vinho é uma das nossas principais fontes de receita.',
            client: 'João Silva, Proprietário',
            image: '🍽️',
        },
        {
            title: 'Hotel Boutique Oceano',
            category: 'Hotelaria',
            challenge: 'Necessidade de criar uma carta de vinhos para o novo restaurante do hotel',
            solution:
                'Desenvolvimento de carta personalizada com vinhos que refletem a identidade do hotel',
            results: [
                'Carta criada do zero em 30 dias',
                'Treinamento completo da equipe',
                'Integração com o conceito gastronômico',
                'Reconhecimento em guias especializados',
            ],

            testimonial:
                'Profissionalismo excepcional. Criaram uma carta que é a cara do nosso hotel e nossos hóspedes adoram.',
            client: 'Maria Santos, Gerente Geral',
            image: '🏨',
        },
        {
            title: 'Bar de Vinhos Adega Central',
            category: 'Wine Bar',
            challenge: 'Dificuldade em encontrar fornecedores confiáveis com preços competitivos',
            solution:
                'Conexão direta com importadores e vinícolas, otimização da gestão de estoque',
            results: [
                'Redução de 25% nos custos de aquisição',
                'Acesso a vinhos exclusivos',
                'Melhoria no controle de estoque',
                'Aumento de 80% no faturamento',
            ],

            testimonial:
                'Finalmente encontramos parceiros que entendem nosso negócio. Os resultados falam por si só.',
            client: 'Carlos Mendes, Sócio-Proprietário',
            image: '🍷',
        },
        {
            title: 'Rede de Bistrôs Sabor & Arte',
            category: 'Rede de Restaurantes',
            challenge: 'Padronização da carta de vinhos em 5 unidades com perfis diferentes',
            solution: 'Desenvolvimento de carta base adaptável com vinhos regionais específicos',
            results: [
                'Padronização em todas as unidades',
                'Manutenção da identidade local',
                'Redução de 30% nos custos operacionais',
                'Aumento médio de 120% nas vendas de vinhos',
            ],

            testimonial:
                'Conseguiram o impossível: padronizar mantendo a personalidade de cada unidade.',
            client: 'Ana Costa, Diretora Comercial',
            image: '🏪',
        },
    ];

    return (
        <div className="min-h-screen" data-oid="9p:_u78">
            {/* Hero Section */}
            <section className="max-w-6xl mx-auto px-8 py-16" data-oid="dnuv1jd">
                <div className="text-center mb-16" data-oid="trhdl56">
                    <h1
                        className="text-5xl md:text-6xl font-light leading-tight mb-8"
                        data-oid="75gl_je"
                    >
                        Casos de{' '}
                        <span className="text-teal-300" data-oid="r-m9av.">
                            Sucesso
                        </span>
                    </h1>
                    <p
                        className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed"
                        data-oid="hkv_mtw"
                    >
                        Conheça histórias reais de transformação e crescimento dos nossos clientes.
                        Resultados que comprovam a eficácia das nossas soluções.
                    </p>
                </div>

                {/* Cases Navigation */}
                <div className="flex flex-wrap justify-center gap-4 mb-12" data-oid="5agyzcj">
                    {cases.map((case_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveCase(index)}
                            className={`px-6 py-3 rounded-full transition-all duration-300 ${
                                activeCase === index
                                    ? 'bg-teal-500 text-white'
                                    : 'bg-white/10 text-purple-200 hover:bg-white/20'
                            }`}
                            data-oid="-gzb0l7"
                        >
                            {case_.title}
                        </button>
                    ))}
                </div>

                {/* Active Case Display */}
                <div
                    className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 mb-20"
                    data-oid="__:3mob"
                >
                    <div className="grid md:grid-cols-2 gap-12" data-oid="rp6cu0i">
                        <div data-oid="ez8ddcj">
                            <div className="text-6xl mb-6 text-center" data-oid="oz21ir5">
                                {cases[activeCase].image}
                            </div>
                            <h2
                                className="text-3xl font-light mb-4 text-teal-300"
                                data-oid="pgxuj:2"
                            >
                                {cases[activeCase].title}
                            </h2>
                            <p className="text-purple-300 font-medium mb-6" data-oid="yl26h41">
                                {cases[activeCase].category}
                            </p>

                            <div className="mb-6" data-oid="g99p143">
                                <h3
                                    className="text-xl font-semibold mb-3 text-teal-300"
                                    data-oid="s2yaofa"
                                >
                                    Desafio
                                </h3>
                                <p className="text-purple-200" data-oid="sibe3-l">
                                    {cases[activeCase].challenge}
                                </p>
                            </div>

                            <div data-oid="z5f5pp8">
                                <h3
                                    className="text-xl font-semibold mb-3 text-teal-300"
                                    data-oid="d3kas29"
                                >
                                    Solução
                                </h3>
                                <p className="text-purple-200" data-oid="osrxk2i">
                                    {cases[activeCase].solution}
                                </p>
                            </div>
                        </div>

                        <div data-oid="-nvv98k">
                            <h3
                                className="text-xl font-semibold mb-6 text-teal-300"
                                data-oid="j8as2_h"
                            >
                                Resultados Alcançados
                            </h3>
                            <ul className="space-y-4 mb-8" data-oid="z5.iphm">
                                {cases[activeCase].results.map((result, index) => (
                                    <li key={index} className="flex items-start" data-oid="o--l48g">
                                        <svg
                                            className="w-6 h-6 text-teal-300 mr-3 mt-0.5 flex-shrink-0"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            data-oid="7clv8zp"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                                data-oid="et4tulv"
                                            />
                                        </svg>
                                        <span className="text-purple-200" data-oid="p:qobs5">
                                            {result}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <div className="bg-white/10 rounded-2xl p-6" data-oid="bqnhgg.">
                                <h3
                                    className="text-lg font-semibold mb-4 text-teal-300"
                                    data-oid="4rcc48z"
                                >
                                    Depoimento
                                </h3>
                                <blockquote
                                    className="text-purple-200 italic mb-4"
                                    data-oid="pepbcvy"
                                >
                                    "{cases[activeCase].testimonial}"
                                </blockquote>
                                <p className="text-purple-300 font-medium" data-oid="hg3bk7m">
                                    — {cases[activeCase].client}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Statistics */}
                <div
                    className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 mb-20"
                    data-oid="8cinooq"
                >
                    <h2
                        className="text-4xl font-light text-center mb-12 text-teal-300"
                        data-oid="mhyp-sn"
                    >
                        Resultados Consolidados
                    </h2>
                    <div className="grid md:grid-cols-4 gap-8 text-center" data-oid="6wg0e2f">
                        {[
                            { number: '150%', label: 'Aumento Médio em Vendas' },
                            { number: '35%', label: 'Melhoria na Margem' },
                            { number: '40%', label: 'Redução de Estoque Parado' },
                            { number: '95%', label: 'Taxa de Satisfação' },
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="bg-white/10 rounded-2xl p-6"
                                data-oid=".i3zwyo"
                            >
                                <div
                                    className="text-4xl font-bold text-teal-300 mb-2"
                                    data-oid="m:ym.sz"
                                >
                                    {stat.number}
                                </div>
                                <p className="text-purple-200" data-oid="6qm4ann">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sectors */}
                <div className="mb-20" data-oid="-11xn99">
                    <h2
                        className="text-4xl font-light text-center mb-12 text-teal-300"
                        data-oid="wo2aev2"
                    >
                        Setores Atendidos
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8" data-oid="57vp.4t">
                        {[
                            {
                                icon: '🍽️',
                                title: 'Restaurantes',
                                desc: 'Fine dining, casual dining e bistrôs',
                            },
                            {
                                icon: '🏨',
                                title: 'Hotéis',
                                desc: 'Hotéis boutique, resorts e pousadas',
                            },
                            {
                                icon: '🍷',
                                title: 'Wine Bars',
                                desc: 'Bares especializados e adegas',
                            },
                            {
                                icon: '🎉',
                                title: 'Eventos',
                                desc: 'Casas de festa e espaços para eventos',
                            },
                            {
                                icon: '🏪',
                                title: 'Redes',
                                desc: 'Redes de restaurantes e franquias',
                            },
                            {
                                icon: '🍸',
                                title: 'Bares',
                                desc: 'Bares tradicionais e cocktail bars',
                            },
                        ].map((sector, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
                                data-oid="map6dj7"
                            >
                                <div className="text-4xl mb-4" data-oid="h1nwqdb">
                                    {sector.icon}
                                </div>
                                <h3
                                    className="text-xl font-semibold mb-2 text-teal-300"
                                    data-oid="vn4m8hb"
                                >
                                    {sector.title}
                                </h3>
                                <p className="text-purple-200 text-sm" data-oid="9frbpf1">
                                    {sector.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center" data-oid="3wd4tga">
                    <h2 className="text-3xl font-light mb-6" data-oid="-8v1vbr">
                        Pronto para ser nosso próximo caso de sucesso?
                    </h2>
                    <p className="text-xl text-purple-200 mb-8" data-oid="_...la.">
                        Agende uma consulta gratuita e descubra como podemos transformar seu
                        negócio.
                    </p>
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        data-oid="by0ie95"
                    >
                        <Link
                            href="/agendar"
                            className="px-8 py-4 bg-teal-500 text-white rounded-full hover:bg-teal-400 transition-colors text-lg font-medium"
                            data-oid="ba3pm0u"
                        >
                            Agendar Consulta Gratuita
                        </Link>
                        <Link
                            href="/contato"
                            className="px-8 py-4 border border-teal-300 rounded-full hover:bg-teal-300 hover:text-purple-900 transition-colors text-lg"
                            data-oid=":tpaxmb"
                        >
                            Falar com Especialista
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
