'use client';

import { useState } from 'react';
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';

export default function ContatoPage() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        empresa: '',
        tipo: '',
        mensagem: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                setFormData({
                    nome: '',
                    email: '',
                    telefone: '',
                    empresa: '',
                    tipo: '',
                    mensagem: '',
                });
            } else {
                toast.error(data.error || 'Erro ao enviar mensagem');
            }
        } catch (error) {
            toast.error('Erro ao enviar mensagem');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="min-h-screen">
            <Toaster position="top-right" />
            
            {/* Hero Section */}
            <section className="max-w-6xl mx-auto px-8 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-light leading-tight mb-8">
                        Entre em{' '}
                        <span className="text-teal-300">
                            Contato
                        </span>
                    </h1>
                    <p className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
                        Estamos prontos para ajudar você a transformar sua carta de vinhos. Entre em
                        contato conosco e descubra como podemos impulsionar seu negócio.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                        <h2 className="text-3xl font-light mb-8 text-teal-300">
                            Envie sua Mensagem
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="nome"
                                        className="block text-sm font-medium text-purple-200 mb-2"
                                    >
                                        Nome Completo *
                                    </label>
                                    <input
                                        type="text"
                                        id="nome"
                                        name="nome"
                                        required
                                        value={formData.nome}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-purple-300 border border-white/30 focus:outline-none focus:border-teal-300"
                                        placeholder="Seu nome completo"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-purple-200 mb-2"
                                    >
                                        E-mail *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-purple-300 border border-white/30 focus:outline-none focus:border-teal-300"
                                        placeholder="seu@email.com"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="telefone"
                                        className="block text-sm font-medium text-purple-200 mb-2"
                                    >
                                        Telefone
                                    </label>
                                    <input
                                        type="tel"
                                        id="telefone"
                                        name="telefone"
                                        value={formData.telefone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-purple-300 border border-white/30 focus:outline-none focus:border-teal-300"
                                        placeholder="(11) 99999-9999"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="empresa"
                                        className="block text-sm font-medium text-purple-200 mb-2"
                                    >
                                        Empresa
                                    </label>
                                    <input
                                        type="text"
                                        id="empresa"
                                        name="empresa"
                                        value={formData.empresa}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-purple-300 border border-white/30 focus:outline-none focus:border-teal-300"
                                        placeholder="Nome da sua empresa"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="tipo"
                                    className="block text-sm font-medium text-purple-200 mb-2"
                                >
                                    Tipo de Estabelecimento *
                                </label>
                                <select
                                    id="tipo"
                                    name="tipo"
                                    required
                                    value={formData.tipo}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:border-teal-300"
                                >
                                    <option value="">
                                        Selecione uma opção
                                    </option>
                                    <option value="restaurante">
                                        Restaurante
                                    </option>
                                    <option value="hotel">
                                        Hotel
                                    </option>
                                    <option value="bar">
                                        Bar/Wine Bar
                                    </option>
                                    <option value="bistro">
                                        Bistrô
                                    </option>
                                    <option value="rede">
                                        Rede de Estabelecimentos
                                    </option>
                                    <option value="outro">
                                        Outro
                                    </option>
                                </select>
                            </div>

                            <div>
                                <label
                                    htmlFor="mensagem"
                                    className="block text-sm font-medium text-purple-200 mb-2"
                                >
                                    Mensagem *
                                </label>
                                <textarea
                                    id="mensagem"
                                    name="mensagem"
                                    required
                                    rows={5}
                                    value={formData.mensagem}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-purple-300 border border-white/30 focus:outline-none focus:border-teal-300 resize-none"
                                    placeholder="Conte-nos sobre seu projeto e como podemos ajudar..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-8 py-4 bg-teal-500 text-white rounded-full hover:bg-teal-400 transition-colors text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        {/* Contact Details */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                            <h2 className="text-3xl font-light mb-8 text-teal-300">
                                Informações de Contato
                            </h2>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-teal-300 mb-1">
                                            E-mail
                                        </h3>
                                        <p className="text-purple-200">
                                            contato@mardevinhos.com
                                        </p>
                                        <p className="text-purple-200">
                                            comercial@mardevinhos.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-teal-300 mb-1">
                                            Telefone
                                        </h3>
                                        <p className="text-purple-200">
                                            (11) 99999-9999
                                        </p>
                                        <p className="text-purple-200">
                                            (11) 3333-3333
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />

                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-teal-300 mb-1">
                                            Endereço
                                        </h3>
                                        <p className="text-purple-200">
                                            São Paulo - SP
                                        </p>
                                        <p className="text-purple-200">
                                            Atendemos todo o Brasil
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-teal-300 mb-1">
                                            Horário
                                        </h3>
                                        <p className="text-purple-200">
                                            Segunda a Sexta: 9h às 18h
                                        </p>
                                        <p className="text-purple-200">
                                            Sábado: 9h às 14h
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                            <h2 className="text-2xl font-light mb-6 text-teal-300">
                                Ações Rápidas
                            </h2>

                            <div className="space-y-4">
                                <Link
                                    href="/agendar"
                                    className="block w-full px-6 py-4 bg-teal-500 text-white rounded-full hover:bg-teal-400 transition-colors text-center font-medium"
                                >
                                    🗓️ Agendar Reunião
                                </Link>

                                <Link
                                    href="/orcamento"
                                    className="block w-full px-6 py-4 border border-teal-300 rounded-full hover:bg-teal-300 hover:text-purple-900 transition-colors text-center"
                                >
                                    💰 Solicitar Orçamento
                                </Link>

                                <a
                                    href="https://wa.me/5511999999999"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full px-6 py-4 bg-green-600 text-white rounded-full hover:bg-green-500 transition-colors text-center font-medium"
                                >
                                    📱 WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-20">
                    <h2 className="text-4xl font-light text-center mb-12 text-teal-300">
                        Perguntas Frequentes
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                question: 'Qual o investimento necessário?',
                                answer: 'Nosso investimento inicial é ZERO. Trabalhamos com modelo de parceria que se paga com os resultados obtidos.',
                            },
                            {
                                question: 'Quanto tempo leva a implementação?',
                                answer: 'O processo completo leva entre 30 a 60 dias, dependendo do tamanho e complexidade do estabelecimento.',
                            },
                            {
                                question: 'Atendem todo o Brasil?',
                                answer: 'Sim, atendemos todo o território nacional. Para locais mais distantes, adaptamos nossa metodologia de trabalho.',
                            },
                            {
                                question: 'Oferecem suporte contínuo?',
                                answer: 'Sim, oferecemos suporte contínuo e acompanhamento dos resultados por pelo menos 6 meses após a implementação.',
                            },
                        ].map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
                            >
                                <h3 className="text-lg font-semibold mb-3 text-teal-300">
                                    {faq.question}
                                </h3>
                                <p className="text-purple-200">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}