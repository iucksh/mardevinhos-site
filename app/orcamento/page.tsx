'use client';

import { useState } from 'react';
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';

export default function OrcamentoPage() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        empresa: '',
        tipo: '',
        descricao: '',
        orcamento: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/quotes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                toast.success('Solicitação enviada com sucesso! Entraremos em contato em breve.');
                setFormData({
                    nome: '',
                    email: '',
                    telefone: '',
                    empresa: '',
                    tipo: '',
                    descricao: '',
                    orcamento: '',
                });
            } else {
                toast.error(data.error || 'Erro ao enviar solicitação');
            }
        } catch (error) {
            toast.error('Erro ao enviar solicitação');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
            <section className="max-w-4xl mx-auto px-8 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-light leading-tight mb-8">
                        Solicitar{' '}
                        <span className="text-teal-300">
                            Orçamento
                        </span>
                    </h1>
                    <p className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
                        Conte-nos sobre seu projeto e receba uma proposta personalizada para transformar sua carta de vinhos.
                    </p>
                </div>

                {/* Benefits */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {[
                        {
                            icon: '💰',
                            title: 'Orçamento Gratuito',
                            desc: 'Proposta sem compromisso',
                        },
                        {
                            icon: '⚡',
                            title: 'Resposta Rápida',
                            desc: 'Retorno em até 24 horas',
                        },
                        { icon: '🎯', title: 'Solução Personalizada', desc: 'Adaptada ao seu negócio' },
                    ].map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                        >
                            <div className="text-4xl mb-3">
                                {benefit.icon}
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-teal-300">
                                {benefit.title}
                            </h3>
                            <p className="text-purple-200 text-sm">
                                {benefit.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Quote Form */}
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Personal Info */}
                        <div>
                            <h2 className="text-2xl font-light mb-6 text-teal-300">
                                Suas Informações
                            </h2>

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

                            <div className="grid md:grid-cols-2 gap-6 mt-6">
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
                                        Empresa *
                                    </label>
                                    <input
                                        type="text"
                                        id="empresa"
                                        name="empresa"
                                        required
                                        value={formData.empresa}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-purple-300 border border-white/30 focus:outline-none focus:border-teal-300"
                                        placeholder="Nome da sua empresa"
                                    />
                                </div>
                            </div>

                            <div className="mt-6">
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
                        </div>

                        {/* Project Details */}
                        <div>
                            <h2 className="text-2xl font-light mb-6 text-teal-300">
                                Detalhes do Projeto
                            </h2>

                            <div className="mb-6">
                                <label
                                    htmlFor="descricao"
                                    className="block text-sm font-medium text-purple-200 mb-2"
                                >
                                    Descrição do Projeto *
                                </label>
                                <textarea
                                    id="descricao"
                                    name="descricao"
                                    required
                                    rows={5}
                                    value={formData.descricao}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-purple-300 border border-white/30 focus:outline-none focus:border-teal-300 resize-none"
                                    placeholder="Descreva detalhadamente seu projeto, necessidades e objetivos..."
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="orcamento"
                                    className="block text-sm font-medium text-purple-200 mb-2"
                                >
                                    Orçamento Estimado (Opcional)
                                </label>
                                <select
                                    id="orcamento"
                                    name="orcamento"
                                    value={formData.orcamento}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:border-teal-300"
                                >
                                    <option value="">
                                        Selecione uma faixa
                                    </option>
                                    <option value="ate-5k">
                                        Até R$ 5.000
                                    </option>
                                    <option value="5k-15k">
                                        R$ 5.000 - R$ 15.000
                                    </option>
                                    <option value="15k-30k">
                                        R$ 15.000 - R$ 30.000
                                    </option>
                                    <option value="30k-50k">
                                        R$ 30.000 - R$ 50.000
                                    </option>
                                    <option value="acima-50k">
                                        Acima de R$ 50.000
                                    </option>
                                    <option value="a-definir">
                                        A definir
                                    </option>
                                </select>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-12 py-4 bg-teal-500 text-white rounded-full hover:bg-teal-400 transition-colors text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Enviando...' : 'Solicitar Orçamento'}
                            </button>

                            <p className="text-purple-300 text-sm mt-4">
                                Você receberá uma proposta personalizada em até 24 horas.
                            </p>
                        </div>
                    </form>
                </div>

                {/* Alternative Contact */}
                <div className="mt-12 text-center">
                    <p className="text-purple-200 mb-4">
                        Prefere falar diretamente conosco?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/5511999999999"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-500 transition-colors font-medium"
                        >
                            📱 WhatsApp
                        </a>
                        <Link
                            href="/contato"
                            className="px-6 py-3 border border-teal-300 rounded-full hover:bg-teal-300 hover:text-purple-900 transition-colors"
                        >
                            📧 Enviar E-mail
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}