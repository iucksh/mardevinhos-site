'use client';

import { useState } from 'react';
import Link from 'next/link';

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

        // Simular envio do formulário
        setTimeout(() => {
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            setFormData({
                nome: '',
                email: '',
                telefone: '',
                empresa: '',
                tipo: '',
                mensagem: '',
            });
            setIsSubmitting(false);
        }, 2000);
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
        <div className="min-h-screen" data-oid="5e:sf1a">
            {/* Hero Section */}
            <section className="max-w-6xl mx-auto px-8 py-16" data-oid="injc87n">
                <div className="text-center mb-16" data-oid="o:6vd0c">
                    <h1
                        className="text-5xl md:text-6xl font-light leading-tight mb-8"
                        data-oid="ekxir-l"
                    >
                        Entre em{' '}
                        <span className="text-teal-300" data-oid="sdmylcg">
                            Contato
                        </span>
                    </h1>
                    <p
                        className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed"
                        data-oid="grgw7a5"
                    >
                        Estamos prontos para ajudar você a transformar sua carta de vinhos. Entre em
                        contato conosco e descubra como podemos impulsionar seu negócio.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12" data-oid="1ged6p4">
                    {/* Contact Form */}
                    <div
                        className="bg-white/10 backdrop-blur-sm rounded-3xl p-8"
                        data-oid="zj-jb34"
                    >
                        <h2 className="text-3xl font-light mb-8 text-teal-300" data-oid="t::sgdv">
                            Envie sua Mensagem
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-6" data-oid="j_a7g44">
                            <div className="grid md:grid-cols-2 gap-6" data-oid="a0.qf9n">
                                <div data-oid="sk_ga9:">
                                    <label
                                        htmlFor="nome"
                                        className="block text-sm font-medium text-purple-200 mb-2"
                                        data-oid="bnxf-nn"
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
                                        data-oid="tecj_sj"
                                    />
                                </div>
                                <div data-oid="mggj2up">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-purple-200 mb-2"
                                        data-oid="fg3bigp"
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
                                        data-oid="i5puh__"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6" data-oid="1rr6:3v">
                                <div data-oid="f-va5c7">
                                    <label
                                        htmlFor="telefone"
                                        className="block text-sm font-medium text-purple-200 mb-2"
                                        data-oid="kf9u6-x"
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
                                        data-oid="l:06_en"
                                    />
                                </div>
                                <div data-oid=".t03nwi">
                                    <label
                                        htmlFor="empresa"
                                        className="block text-sm font-medium text-purple-200 mb-2"
                                        data-oid="4hdao8k"
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
                                        data-oid="4des5hx"
                                    />
                                </div>
                            </div>

                            <div data-oid="ti1f52c">
                                <label
                                    htmlFor="tipo"
                                    className="block text-sm font-medium text-purple-200 mb-2"
                                    data-oid="0s9ll4d"
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
                                    data-oid="25qj886"
                                >
                                    <option value="" data-oid="uxw2en3">
                                        Selecione uma opção
                                    </option>
                                    <option value="restaurante" data-oid="nbxz5jd">
                                        Restaurante
                                    </option>
                                    <option value="hotel" data-oid="yt9:0tv">
                                        Hotel
                                    </option>
                                    <option value="bar" data-oid="50zy7.1">
                                        Bar/Wine Bar
                                    </option>
                                    <option value="bistro" data-oid="e0i1.d7">
                                        Bistrô
                                    </option>
                                    <option value="rede" data-oid="pjh5fmt">
                                        Rede de Estabelecimentos
                                    </option>
                                    <option value="outro" data-oid="yxe.4xz">
                                        Outro
                                    </option>
                                </select>
                            </div>

                            <div data-oid="23._x-_">
                                <label
                                    htmlFor="mensagem"
                                    className="block text-sm font-medium text-purple-200 mb-2"
                                    data-oid="c3d51-t"
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
                                    data-oid="f05jli0"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-8 py-4 bg-teal-500 text-white rounded-full hover:bg-teal-400 transition-colors text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                                data-oid="mr59nev"
                            >
                                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8" data-oid="kq0q3ac">
                        {/* Contact Details */}
                        <div
                            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8"
                            data-oid="tswhm_l"
                        >
                            <h2
                                className="text-3xl font-light mb-8 text-teal-300"
                                data-oid="-dsfpuu"
                            >
                                Informações de Contato
                            </h2>

                            <div className="space-y-6" data-oid="6m0iaz3">
                                <div className="flex items-start space-x-4" data-oid="vu9_174">
                                    <div
                                        className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0"
                                        data-oid="p6-nxeh"
                                    >
                                        <svg
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="5slj2d7"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                data-oid="c2m6csh"
                                            />
                                        </svg>
                                    </div>
                                    <div data-oid="lpngn6n">
                                        <h3
                                            className="text-lg font-semibold text-teal-300 mb-1"
                                            data-oid="71smkdt"
                                        >
                                            E-mail
                                        </h3>
                                        <p className="text-purple-200" data-oid="6s04d6a">
                                            contato@mardevinhos.com
                                        </p>
                                        <p className="text-purple-200" data-oid="thx8yko">
                                            comercial@mardevinhos.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4" data-oid="z9h0f3o">
                                    <div
                                        className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0"
                                        data-oid="enshfmk"
                                    >
                                        <svg
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="kneuil7"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                data-oid="ibtynhm"
                                            />
                                        </svg>
                                    </div>
                                    <div data-oid="1uvjuj5">
                                        <h3
                                            className="text-lg font-semibold text-teal-300 mb-1"
                                            data-oid="gy49a2w"
                                        >
                                            Telefone
                                        </h3>
                                        <p className="text-purple-200" data-oid=".y.nogv">
                                            (11) 99999-9999
                                        </p>
                                        <p className="text-purple-200" data-oid="fj5l3cd">
                                            (11) 3333-3333
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4" data-oid="yolbbj:">
                                    <div
                                        className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0"
                                        data-oid="wtrzhl5"
                                    >
                                        <svg
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="v7bs0a."
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                data-oid="uzlhpv_"
                                            />

                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                data-oid="cd30:7y"
                                            />
                                        </svg>
                                    </div>
                                    <div data-oid="vtmky6l">
                                        <h3
                                            className="text-lg font-semibold text-teal-300 mb-1"
                                            data-oid="-4oyb9c"
                                        >
                                            Endereço
                                        </h3>
                                        <p className="text-purple-200" data-oid="sxj-wpn">
                                            São Paulo - SP
                                        </p>
                                        <p className="text-purple-200" data-oid="lwpdpdc">
                                            Atendemos todo o Brasil
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4" data-oid="n9pwppl">
                                    <div
                                        className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0"
                                        data-oid="dk.2_yb"
                                    >
                                        <svg
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="na2g-08"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="1wzusus"
                                            />
                                        </svg>
                                    </div>
                                    <div data-oid="gpk0j.h">
                                        <h3
                                            className="text-lg font-semibold text-teal-300 mb-1"
                                            data-oid="6k9cbqu"
                                        >
                                            Horário
                                        </h3>
                                        <p className="text-purple-200" data-oid="v9nrlxe">
                                            Segunda a Sexta: 9h às 18h
                                        </p>
                                        <p className="text-purple-200" data-oid="zdhf589">
                                            Sábado: 9h às 14h
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div
                            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8"
                            data-oid="a:7.1ud"
                        >
                            <h2
                                className="text-2xl font-light mb-6 text-teal-300"
                                data-oid="auskhso"
                            >
                                Ações Rápidas
                            </h2>

                            <div className="space-y-4" data-oid="sb9c82h">
                                <Link
                                    href="/agendar"
                                    className="block w-full px-6 py-4 bg-teal-500 text-white rounded-full hover:bg-teal-400 transition-colors text-center font-medium"
                                    data-oid="bu7ugxd"
                                >
                                    🗓️ Agendar Reunião
                                </Link>

                                <Link
                                    href="/orcamento"
                                    className="block w-full px-6 py-4 border border-teal-300 rounded-full hover:bg-teal-300 hover:text-purple-900 transition-colors text-center"
                                    data-oid="97yksbk"
                                >
                                    💰 Solicitar Orçamento
                                </Link>

                                <a
                                    href="https://wa.me/5511999999999"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full px-6 py-4 bg-green-600 text-white rounded-full hover:bg-green-500 transition-colors text-center font-medium"
                                    data-oid="wtze_ad"
                                >
                                    📱 WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-20" data-oid="vhp5hv:">
                    <h2
                        className="text-4xl font-light text-center mb-12 text-teal-300"
                        data-oid="tknte.c"
                    >
                        Perguntas Frequentes
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8" data-oid="7bwkd-:">
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
                                data-oid="sqgcguu"
                            >
                                <h3
                                    className="text-lg font-semibold mb-3 text-teal-300"
                                    data-oid="-fda_2z"
                                >
                                    {faq.question}
                                </h3>
                                <p className="text-purple-200" data-oid="fzvdmy9">
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
