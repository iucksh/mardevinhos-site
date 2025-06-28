'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AgendarPage() {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        empresa: '',
        tipo: '',
        observacoes: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const availableTimes = [
        '09:00',
        '09:30',
        '10:00',
        '10:30',
        '11:00',
        '11:30',
        '14:00',
        '14:30',
        '15:00',
        '15:30',
        '16:00',
        '16:30',
        '17:00',
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simular agendamento
        setTimeout(() => {
            alert(
                `Reunião agendada com sucesso para ${selectedDate} às ${selectedTime}! Você receberá um e-mail de confirmação em breve.`,
            );
            setFormData({
                nome: '',
                email: '',
                telefone: '',
                empresa: '',
                tipo: '',
                observacoes: '',
            });
            setSelectedDate('');
            setSelectedTime('');
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

    // Gerar próximos 30 dias úteis
    const getAvailableDates = () => {
        const dates = [];
        const today = new Date();
        let currentDate = new Date(today);
        currentDate.setDate(currentDate.getDate() + 1); // Começar amanhã

        while (dates.length < 30) {
            const dayOfWeek = currentDate.getDay();
            // Apenas dias úteis (1-5 = Segunda a Sexta)
            if (dayOfWeek >= 1 && dayOfWeek <= 5) {
                dates.push(new Date(currentDate));
            }
            currentDate.setDate(currentDate.getDate() + 1);
        }
        return dates;
    };

    const availableDates = getAvailableDates();

    return (
        <div className="min-h-screen" data-oid="8vz4y-:">
            {/* Hero Section */}
            <section className="max-w-4xl mx-auto px-8 py-16" data-oid="mk8zifv">
                <div className="text-center mb-16" data-oid="qcq8l5j">
                    <h1
                        className="text-5xl md:text-6xl font-light leading-tight mb-8"
                        data-oid="scd3hng"
                    >
                        Agendar{' '}
                        <span className="text-teal-300" data-oid="5k8khmn">
                            Reunião
                        </span>
                    </h1>
                    <p
                        className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed"
                        data-oid="iwnbn3d"
                    >
                        Agende uma consulta gratuita de 30 minutos para discutir como podemos
                        transformar sua carta de vinhos e aumentar sua lucratividade.
                    </p>
                </div>

                {/* Benefits */}
                <div className="grid md:grid-cols-3 gap-6 mb-12" data-oid="wyaawbk">
                    {[
                        {
                            icon: '🆓',
                            title: 'Consulta Gratuita',
                            desc: '30 minutos sem compromisso',
                        },
                        {
                            icon: '📊',
                            title: 'Análise Personalizada',
                            desc: 'Diagnóstico do seu negócio',
                        },
                        { icon: '💡', title: 'Soluções Práticas', desc: 'Estratégias aplicáveis' },
                    ].map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                            data-oid=".bos2rv"
                        >
                            <div className="text-4xl mb-3" data-oid="a2i00m5">
                                {benefit.icon}
                            </div>
                            <h3
                                className="text-lg font-semibold mb-2 text-teal-300"
                                data-oid="1:v:af5"
                            >
                                {benefit.title}
                            </h3>
                            <p className="text-purple-200 text-sm" data-oid="u0hwq:s">
                                {benefit.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Scheduling Form */}
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8" data-oid="mp6jb9n">
                    <form onSubmit={handleSubmit} className="space-y-8" data-oid="-xb3dlv">
                        {/* Personal Info */}
                        <div data-oid="u8nbcsb">
                            <h2
                                className="text-2xl font-light mb-6 text-teal-300"
                                data-oid="8ne870u"
                            >
                                Suas Informações
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6" data-oid="fj0tt:7">
                                <div data-oid="wit:ui8">
                                    <label
                                        htmlFor="nome"
                                        className="block text-sm font-medium text-purple-200 mb-2"
                                        data-oid="b7hm4rv"
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
                                        data-oid=":q-_jrp"
                                    />
                                </div>
                                <div data-oid="g3ti8jg">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-purple-200 mb-2"
                                        data-oid="gozm6n6"
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
                                        data-oid="ycnh9n."
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mt-6" data-oid="g:zd.uv">
                                <div data-oid="2ni-h_e">
                                    <label
                                        htmlFor="telefone"
                                        className="block text-sm font-medium text-purple-200 mb-2"
                                        data-oid="44vgp7w"
                                    >
                                        Telefone *
                                    </label>
                                    <input
                                        type="tel"
                                        id="telefone"
                                        name="telefone"
                                        required
                                        value={formData.telefone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-purple-300 border border-white/30 focus:outline-none focus:border-teal-300"
                                        placeholder="(11) 99999-9999"
                                        data-oid="vvyc944"
                                    />
                                </div>
                                <div data-oid="3s45gdj">
                                    <label
                                        htmlFor="empresa"
                                        className="block text-sm font-medium text-purple-200 mb-2"
                                        data-oid="0cadb4c"
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
                                        data-oid="vn67plv"
                                    />
                                </div>
                            </div>

                            <div className="mt-6" data-oid="fbr23bt">
                                <label
                                    htmlFor="tipo"
                                    className="block text-sm font-medium text-purple-200 mb-2"
                                    data-oid="fhf2zga"
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
                                    data-oid="wz-8c-x"
                                >
                                    <option value="" data-oid="rmewgir">
                                        Selecione uma opção
                                    </option>
                                    <option value="restaurante" data-oid="wge.7b2">
                                        Restaurante
                                    </option>
                                    <option value="hotel" data-oid="9sj398r">
                                        Hotel
                                    </option>
                                    <option value="bar" data-oid="82acrpk">
                                        Bar/Wine Bar
                                    </option>
                                    <option value="bistro" data-oid=".n:he7_">
                                        Bistrô
                                    </option>
                                    <option value="rede" data-oid="gh8v76i">
                                        Rede de Estabelecimentos
                                    </option>
                                    <option value="outro" data-oid="vb.3zle">
                                        Outro
                                    </option>
                                </select>
                            </div>
                        </div>

                        {/* Date Selection */}
                        <div data-oid="ieflywv">
                            <h2
                                className="text-2xl font-light mb-6 text-teal-300"
                                data-oid=":1oueee"
                            >
                                Escolha a Data
                            </h2>

                            <div
                                className="grid grid-cols-2 md:grid-cols-5 gap-3"
                                data-oid="s9ea.8m"
                            >
                                {availableDates.slice(0, 15).map((date, index) => {
                                    const dateStr = date.toISOString().split('T')[0];
                                    const dayName = date.toLocaleDateString('pt-BR', {
                                        weekday: 'short',
                                    });
                                    const dayNumber = date.getDate();
                                    const monthName = date.toLocaleDateString('pt-BR', {
                                        month: 'short',
                                    });

                                    return (
                                        <button
                                            key={index}
                                            type="button"
                                            onClick={() => setSelectedDate(dateStr)}
                                            className={`p-3 rounded-lg text-center transition-all duration-300 ${
                                                selectedDate === dateStr
                                                    ? 'bg-teal-500 text-white'
                                                    : 'bg-white/20 text-purple-200 hover:bg-white/30'
                                            }`}
                                            data-oid="-5wqy0_"
                                        >
                                            <div className="text-xs uppercase" data-oid=".j_-_io">
                                                {dayName}
                                            </div>
                                            <div
                                                className="text-lg font-semibold"
                                                data-oid="qjw-h6c"
                                            >
                                                {dayNumber}
                                            </div>
                                            <div className="text-xs" data-oid="du-qlrh">
                                                {monthName}
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Time Selection */}
                        {selectedDate && (
                            <div data-oid="bclwfe4">
                                <h2
                                    className="text-2xl font-light mb-6 text-teal-300"
                                    data-oid="8gwsli:"
                                >
                                    Escolha o Horário
                                </h2>

                                <div
                                    className="grid grid-cols-3 md:grid-cols-6 gap-3"
                                    data-oid="mi146-n"
                                >
                                    {availableTimes.map((time, index) => (
                                        <button
                                            key={index}
                                            type="button"
                                            onClick={() => setSelectedTime(time)}
                                            className={`p-3 rounded-lg text-center transition-all duration-300 ${
                                                selectedTime === time
                                                    ? 'bg-teal-500 text-white'
                                                    : 'bg-white/20 text-purple-200 hover:bg-white/30'
                                            }`}
                                            data-oid="bplz:-s"
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Additional Info */}
                        <div data-oid="alvgi33">
                            <label
                                htmlFor="observacoes"
                                className="block text-sm font-medium text-purple-200 mb-2"
                                data-oid="n8c1-vi"
                            >
                                Observações (Opcional)
                            </label>
                            <textarea
                                id="observacoes"
                                name="observacoes"
                                rows={3}
                                value={formData.observacoes}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-purple-300 border border-white/30 focus:outline-none focus:border-teal-300 resize-none"
                                placeholder="Conte-nos brevemente sobre seus desafios ou objetivos..."
                                data-oid="79r4:i_"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="text-center" data-oid="2wxaw1a">
                            <button
                                type="submit"
                                disabled={!selectedDate || !selectedTime || isSubmitting}
                                className="px-12 py-4 bg-teal-500 text-white rounded-full hover:bg-teal-400 transition-colors text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                                data-oid="xv8psn8"
                            >
                                {isSubmitting ? 'Agendando...' : 'Confirmar Agendamento'}
                            </button>

                            <p className="text-purple-300 text-sm mt-4" data-oid="vm9-ky_">
                                Você receberá um e-mail de confirmação com o link da reunião online.
                            </p>
                        </div>
                    </form>
                </div>

                {/* Alternative Contact */}
                <div className="mt-12 text-center" data-oid="g2n8jt9">
                    <p className="text-purple-200 mb-4" data-oid=":puop71">
                        Prefere falar diretamente conosco?
                    </p>
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        data-oid="exudzd_"
                    >
                        <a
                            href="https://wa.me/5511999999999"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-500 transition-colors font-medium"
                            data-oid="qabk:81"
                        >
                            📱 WhatsApp
                        </a>
                        <Link
                            href="/contato"
                            className="px-6 py-3 border border-teal-300 rounded-full hover:bg-teal-300 hover:text-purple-900 transition-colors"
                            data-oid="4la-83-"
                        >
                            📧 Enviar E-mail
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
