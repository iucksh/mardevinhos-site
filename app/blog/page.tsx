'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState('todos');

    const categories = [
        { id: 'todos', name: 'Todos os Posts' },
        { id: 'mercado', name: 'Mercado HORECA' },
        { id: 'vinhos', name: 'Vinhos & Degustação' },
        { id: 'gestao', name: 'Gestão' },
        { id: 'tendencias', name: 'Tendências' },
    ];

    const posts = [
        {
            id: 1,
            title: 'Como Aumentar a Margem de Lucro com Vinhos no seu Restaurante',
            excerpt:
                'Estratégias práticas para otimizar sua carta de vinhos e aumentar significativamente a lucratividade do seu estabelecimento.',
            category: 'gestao',
            date: '15 Jan 2024',
            readTime: '5 min',
            image: '📊',
            featured: true,
        },
        {
            id: 2,
            title: 'Tendências do Mercado de Vinhos para 2024',
            excerpt:
                'Descubra as principais tendências que estão moldando o mercado de vinhos e como se preparar para elas.',
            category: 'tendencias',
            date: '12 Jan 2024',
            readTime: '7 min',
            image: '📈',
        },
        {
            id: 3,
            title: 'Harmonização Perfeita: Guia Completo para Restaurantes',
            excerpt:
                'Aprenda as técnicas fundamentais de harmonização entre vinhos e pratos para encantar seus clientes.',
            category: 'vinhos',
            date: '10 Jan 2024',
            readTime: '8 min',
            image: '🍷',
        },
        {
            id: 4,
            title: 'O Setor HORECA Pós-Pandemia: Oportunidades e Desafios',
            excerpt:
                'Análise completa das mudanças no setor HORECA e como se adaptar ao novo cenário do mercado.',
            category: 'mercado',
            date: '8 Jan 2024',
            readTime: '6 min',
            image: '🏨',
        },
        {
            id: 5,
            title: 'Gestão de Estoque de Vinhos: Evitando Perdas e Maximizando Lucros',
            excerpt:
                'Técnicas avançadas para gerenciar seu estoque de vinhos de forma eficiente e lucrativa.',
            category: 'gestao',
            date: '5 Jan 2024',
            readTime: '6 min',
            image: '📦',
        },
        {
            id: 6,
            title: 'Vinhos Brasileiros: A Revolução Silenciosa no Mercado Nacional',
            excerpt:
                'Como os vinhos nacionais estão conquistando espaço e reconhecimento no mercado brasileiro.',
            category: 'vinhos',
            date: '3 Jan 2024',
            readTime: '9 min',
            image: '🇧🇷',
        },
        {
            id: 7,
            title: 'Treinamento de Equipe: Transformando Garçons em Consultores de Vinho',
            excerpt:
                'Estratégias para capacitar sua equipe e transformar o atendimento em uma ferramenta de vendas.',
            category: 'gestao',
            date: '1 Jan 2024',
            readTime: '7 min',
            image: '👥',
        },
        {
            id: 8,
            title: 'Sustentabilidade no Mercado de Vinhos: Tendência ou Necessidade?',
            excerpt:
                'A importância da sustentabilidade na produção e comercialização de vinhos no século XXI.',
            category: 'tendencias',
            date: '28 Dez 2023',
            readTime: '5 min',
            image: '🌱',
        },
    ];

    const filteredPosts =
        selectedCategory === 'todos'
            ? posts
            : posts.filter((post) => post.category === selectedCategory);

    const featuredPost = posts.find((post) => post.featured);
    const regularPosts = posts.filter((post) => !post.featured);

    return (
        <div className="min-h-screen" data-oid="_.m44_8">
            {/* Hero Section */}
            <section className="max-w-6xl mx-auto px-8 py-16" data-oid="0y9:6va">
                <div className="text-center mb-16" data-oid="5iqsydl">
                    <h1
                        className="text-5xl md:text-6xl font-light leading-tight mb-8"
                        data-oid="z.usual"
                    >
                        Blog{' '}
                        <span className="text-teal-300" data-oid="364tnxc">
                            Mar de Vinhos
                        </span>
                    </h1>
                    <p
                        className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed"
                        data-oid="5jta4n."
                    >
                        Insights, tendências e conhecimento especializado sobre o mercado de vinhos
                        e o setor HORECA. Conteúdo exclusivo para profissionais do setor.
                    </p>
                </div>

                {/* Categories Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12" data-oid="dc2xbdz">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-6 py-3 rounded-full transition-all duration-300 ${
                                selectedCategory === category.id
                                    ? 'bg-teal-500 text-white'
                                    : 'bg-white/10 text-purple-200 hover:bg-white/20'
                            }`}
                            data-oid="wne::rf"
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Featured Post */}
                {selectedCategory === 'todos' && featuredPost && (
                    <div
                        className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12"
                        data-oid="_:ycdo1"
                    >
                        <div className="grid md:grid-cols-2 gap-8 items-center" data-oid="muu7tp.">
                            <div data-oid="wq7d1gv">
                                <div className="flex items-center gap-4 mb-4" data-oid="pp42niy">
                                    <span
                                        className="px-3 py-1 bg-teal-500 text-white text-xs rounded-full"
                                        data-oid="ysbwrso"
                                    >
                                        DESTAQUE
                                    </span>
                                    <span className="text-purple-300 text-sm" data-oid="f_zd1vr">
                                        {featuredPost.date} • {featuredPost.readTime} de leitura
                                    </span>
                                </div>
                                <h2
                                    className="text-3xl font-light mb-4 text-teal-300"
                                    data-oid="kf-la60"
                                >
                                    {featuredPost.title}
                                </h2>
                                <p className="text-purple-200 mb-6" data-oid="q0j:g51">
                                    {featuredPost.excerpt}
                                </p>
                                <Link
                                    href={`/blog/${featuredPost.id}`}
                                    className="inline-block px-6 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-400 transition-colors"
                                    data-oid="ljy.ewm"
                                >
                                    Ler Artigo Completo
                                </Link>
                            </div>
                            <div className="text-center" data-oid="bcp:e6k">
                                <div className="text-8xl mb-4" data-oid="c_uwiqw">
                                    {featuredPost.image}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Posts Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20" data-oid="lg3._oz">
                    {(selectedCategory === 'todos' ? regularPosts : filteredPosts).map((post) => (
                        <article
                            key={post.id}
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
                            data-oid="p-24ook"
                        >
                            <div className="text-4xl mb-4 text-center" data-oid="iz93--1">
                                {post.image}
                            </div>
                            <div className="flex items-center gap-2 mb-3" data-oid="ugkhioh">
                                <span className="text-purple-300 text-xs" data-oid="ocbgf52">
                                    {post.date}
                                </span>
                                <span className="text-purple-300 text-xs" data-oid="1bhv2ud">
                                    •
                                </span>
                                <span className="text-purple-300 text-xs" data-oid="4y3-e7-">
                                    {post.readTime} de leitura
                                </span>
                            </div>
                            <h3
                                className="text-xl font-semibold mb-3 text-teal-300 line-clamp-2"
                                data-oid="fevok72"
                            >
                                {post.title}
                            </h3>
                            <p
                                className="text-purple-200 text-sm mb-4 line-clamp-3"
                                data-oid="7-qfeww"
                            >
                                {post.excerpt}
                            </p>
                            <Link
                                href={`/blog/${post.id}`}
                                className="text-teal-300 hover:text-teal-200 transition-colors text-sm font-medium"
                                data-oid="qg4y8oi"
                            >
                                Ler mais →
                            </Link>
                        </article>
                    ))}
                </div>

                {/* Newsletter Signup */}
                <div
                    className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 text-center"
                    data-oid="ciamer7"
                >
                    <h2 className="text-3xl font-light mb-6 text-teal-300" data-oid="xct3:cz">
                        Receba Nossos Insights
                    </h2>
                    <p
                        className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto"
                        data-oid="1azs5ip"
                    >
                        Assine nossa newsletter e receba semanalmente conteúdo exclusivo sobre o
                        mercado de vinhos e tendências do setor HORECA.
                    </p>
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
                        data-oid="zjvfwmx"
                    >
                        <input
                            type="email"
                            placeholder="Seu melhor e-mail"
                            className="flex-1 px-6 py-3 rounded-full bg-white/20 text-white placeholder-purple-300 border border-white/30 focus:outline-none focus:border-teal-300"
                            data-oid="atiogm1"
                        />

                        <button
                            className="px-8 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-400 transition-colors font-medium"
                            data-oid=".8dm1vv"
                        >
                            Assinar
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
