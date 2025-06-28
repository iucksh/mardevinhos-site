'use client';

import { useState } from 'react';
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState('todos');
    const [email, setEmail] = useState('');
    const [isSubscribing, setIsSubscribing] = useState(false);

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

    const handleNewsletterSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubscribing(true);

        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (data.success) {
                toast.success('Inscrição realizada com sucesso! Verifique seu e-mail.');
                setEmail('');
            } else {
                toast.error(data.error || 'Erro ao realizar inscrição');
            }
        } catch (error) {
            toast.error('Erro ao realizar inscrição');
        } finally {
            setIsSubscribing(false);
        }
    };

    return (
        <div className="min-h-screen">
            <Toaster position="top-right" />
            
            {/* Hero Section */}
            <section className="max-w-6xl mx-auto px-8 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-light leading-tight mb-8">
                        Blog{' '}
                        <span className="text-teal-300">
                            Mar de Vinhos
                        </span>
                    </h1>
                    <p className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
                        Insights, tendências e conhecimento especializado sobre o mercado de vinhos
                        e o setor HORECA. Conteúdo exclusivo para profissionais do setor.
                    </p>
                </div>

                {/* Categories Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-6 py-3 rounded-full transition-all duration-300 ${
                                selectedCategory === category.id
                                    ? 'bg-teal-500 text-white'
                                    : 'bg-white/10 text-purple-200 hover:bg-white/20'
                            }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Featured Post */}
                {selectedCategory === 'todos' && featuredPost && (
                    <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="px-3 py-1 bg-teal-500 text-white text-xs rounded-full">
                                        DESTAQUE
                                    </span>
                                    <span className="text-purple-300 text-sm">
                                        {featuredPost.date} • {featuredPost.readTime} de leitura
                                    </span>
                                </div>
                                <h2 className="text-3xl font-light mb-4 text-teal-300">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-purple-200 mb-6">
                                    {featuredPost.excerpt}
                                </p>
                                <Link
                                    href={`/blog/${featuredPost.id}`}
                                    className="inline-block px-6 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-400 transition-colors"
                                >
                                    Ler Artigo Completo
                                </Link>
                            </div>
                            <div className="text-center">
                                <div className="text-8xl mb-4">
                                    {featuredPost.image}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Posts Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {(selectedCategory === 'todos' ? regularPosts : filteredPosts).map((post) => (
                        <article
                            key={post.id}
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
                        >
                            <div className="text-4xl mb-4 text-center">
                                {post.image}
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-purple-300 text-xs">
                                    {post.date}
                                </span>
                                <span className="text-purple-300 text-xs">
                                    •
                                </span>
                                <span className="text-purple-300 text-xs">
                                    {post.readTime} de leitura
                                </span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-teal-300 line-clamp-2">
                                {post.title}
                            </h3>
                            <p className="text-purple-200 text-sm mb-4 line-clamp-3">
                                {post.excerpt}
                            </p>
                            <Link
                                href={`/blog/${post.id}`}
                                className="text-teal-300 hover:text-teal-200 transition-colors text-sm font-medium"
                            >
                                Ler mais →
                            </Link>
                        </article>
                    ))}
                </div>

                {/* Newsletter Signup */}
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 text-center">
                    <h2 className="text-3xl font-light mb-6 text-teal-300">
                        Receba Nossos Insights
                    </h2>
                    <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
                        Assine nossa newsletter e receba semanalmente conteúdo exclusivo sobre o
                        mercado de vinhos e tendências do setor HORECA.
                    </p>
                    <form
                        onSubmit={handleNewsletterSubmit}
                        className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
                    >
                        <input
                            type="email"
                            placeholder="Seu melhor e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="flex-1 px-6 py-3 rounded-full bg-white/20 text-white placeholder-purple-300 border border-white/30 focus:outline-none focus:border-teal-300"
                        />

                        <button
                            type="submit"
                            disabled={isSubscribing}
                            className="px-8 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-400 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubscribing ? 'Inscrevendo...' : 'Assinar'}
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}