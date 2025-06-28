'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ServicosPage() {
    const [activeService, setActiveService] = useState(0);

    const services = [
        {
            title: 'Consultoria em Carta de Vinhos',
            description:
                'Análise completa da sua carta atual e desenvolvimento de estratégias personalizadas',
            features: [
                'Diagnóstico da carta atual',
                'Análise de margem e lucratividade',
                'Seleção de vinhos adequados ao perfil do estabelecimento',
                'Precificação estratégica',
                'Harmonização com o cardápio',
            ],

            icon: '📋',
        },
        {
            title: 'Treinamento de Equipe',
            description:
                'Capacitação completa da sua equipe para vendas e atendimento especializado',
            features: [
                'Treinamento em degustação',
                'Técnicas de venda consultiva',
                'Conhecimento sobre regiões vinícolas',
                'Harmonização gastronômica',
                'Atendimento ao cliente especializado',
            ],

            icon: '👥',
        },
        {
            title: 'Gestão de Estoque',
            description:
                'Otimização do seu estoque com controle inteligente e reposição estratégica',
            features: [
                'Controle de estoque automatizado',
                'Análise de giro de produtos',
                'Previsão de demanda',
                'Gestão de fornecedores',
                'Relatórios de performance',
            ],

            icon: '📊',
        },
        {
            title: 'Conexão com Fornecedores',
            description:
                'Acesso direto a importadores e vinícolas com melhores condições comerciais',
            features: [
                'Rede de fornecedores qualificados',
                'Negociação de melhores preços',
                'Produtos exclusivos',
                'Condições de pagamento flexíveis',
                'Suporte logístico',
            ],

            icon: '🤝',
        },
    ];

    return (
        <div className="min-h-screen" data-oid=":gxz1ni">
            {/* Hero Section */}
            <section className="max-w-6xl mx-auto px-8 py-16" data-oid="sjwd0sp">
                <div className="text-center mb-16" data-oid="si4dybg">
                    <h1
                        className="text-5xl md:text-6xl font-light leading-tight mb-8"
                        data-oid="xw6c_pm"
                    >
                        Nossos{' '}
                        <span className="text-teal-300" data-oid="e9y65v.">
                            Serviços
                        </span>
                    </h1>
                    <p
                        className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed"
                        data-oid="d153h2h"
                    >
                        Soluções completas para transformar sua carta de vinhos em uma ferramenta de
                        lucratividade e diferenciação no mercado HORECA.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-20" data-oid="ke.6k4v">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 cursor-pointer transition-all duration-300 ${
                                activeService === index
                                    ? 'bg-white/20 scale-105'
                                    : 'hover:bg-white/15'
                            }`}
                            onClick={() => setActiveService(index)}
                            data-oid="vmi3zqq"
                        >
                            <div className="text-4xl mb-4" data-oid="bq9f1z.">
                                {service.icon}
                            </div>
                            <h3
                                className="text-2xl font-semibold mb-4 text-teal-300"
                                data-oid="nklh.wu"
                            >
                                {service.title}
                            </h3>
                            <p className="text-purple-200 mb-6" data-oid="bwk4923">
                                {service.description}
                            </p>
                            <ul className="space-y-2" data-oid="omhflf:">
                                {service.features.map((feature, featureIndex) => (
                                    <li
                                        key={featureIndex}
                                        className="flex items-center text-sm text-purple-200"
                                        data-oid="_b0.uq6"
                                    >
                                        <svg
                                            className="w-4 h-4 text-teal-300 mr-2"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            data-oid="payviqb"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                                data-oid="xxcrt34"
                                            />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Process Section */}
                <div
                    className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 mb-20"
                    data-oid="yoj4wo3"
                >
                    <h2
                        className="text-4xl font-light text-center mb-12 text-teal-300"
                        data-oid="q422gp6"
                    >
                        Como Trabalhamos
                    </h2>
                    <div className="grid md:grid-cols-4 gap-8" data-oid="k1erran">
                        {[
                            {
                                step: '1',
                                title: 'Diagnóstico',
                                desc: 'Análise completa da situação atual',
                            },
                            {
                                step: '2',
                                title: 'Planejamento',
                                desc: 'Estratégia personalizada para seu negócio',
                            },
                            {
                                step: '3',
                                title: 'Implementação',
                                desc: 'Execução das soluções propostas',
                            },
                            {
                                step: '4',
                                title: 'Acompanhamento',
                                desc: 'Suporte contínuo e otimizações',
                            },
                        ].map((item, index) => (
                            <div key={index} className="text-center" data-oid="34f6jr1">
                                <div
                                    className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                                    data-oid="tpwwcrb"
                                >
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-semibold mb-2" data-oid="77lc.2u">
                                    {item.title}
                                </h3>
                                <p className="text-purple-200 text-sm" data-oid="z86k9hp">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center" data-oid="-10yax4">
                    <h2 className="text-3xl font-light mb-6" data-oid="h0p-5h2">
                        Pronto para transformar sua carta de vinhos?
                    </h2>
                    <p className="text-xl text-purple-200 mb-8" data-oid="zkce2c-">
                        Agende uma consulta gratuita e descubra como podemos ajudar seu negócio.
                    </p>
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        data-oid="-oi71is"
                    >
                        <Link
                            href="/agendar"
                            className="px-8 py-4 bg-teal-500 text-white rounded-full hover:bg-teal-400 transition-colors text-lg font-medium"
                            data-oid="1ev_tjw"
                        >
                            Agendar Consulta Gratuita
                        </Link>
                        <Link
                            href="/contato"
                            className="px-8 py-4 border border-teal-300 rounded-full hover:bg-teal-300 hover:text-purple-900 transition-colors text-lg"
                            data-oid="b6ee67e"
                        >
                            Falar com Especialista
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
