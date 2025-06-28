import Link from 'next/link';

export function Footer() {
    return (
        <footer className="border-t border-white/20 py-12 px-8" data-oid="1-7qs:l">
            <div className="max-w-6xl mx-auto" data-oid="q8317sr">
                <div className="grid md:grid-cols-4 gap-8 mb-8" data-oid=":t66s6o">
                    {/* Logo e Descrição */}
                    <div className="md:col-span-2" data-oid="rwatkg7">
                        <div className="flex items-center space-x-3 mb-6" data-oid="atsbx8p">
                            <div
                                className="w-12 h-12 border-2 border-teal-300 rounded-full flex items-center justify-center"
                                data-oid="qjr9udf"
                            >
                                <div
                                    className="w-6 h-8 border border-teal-300 rounded-t-full"
                                    data-oid="98nmz8s"
                                ></div>
                            </div>
                            <span
                                className="text-xl font-light tracking-wide text-teal-300"
                                data-oid="jzuj8ec"
                            >
                                MAR DE VINHOS
                            </span>
                        </div>
                        <p className="text-purple-200 mb-4 max-w-md" data-oid="p3cm3m_">
                            Especialistas na criação, gestão e otimização da carta de vinhos para o
                            setor HORECA. Conectando seu negócio a importadores e vinícolas.
                        </p>
                    </div>

                    {/* Links Rápidos */}
                    <div data-oid="5i8ryeu">
                        <h3 className="text-teal-300 font-semibold mb-4" data-oid="zohrv:f">
                            Links Rápidos
                        </h3>
                        <ul className="space-y-2 text-purple-200" data-oid=".eie6zo">
                            <li data-oid="aycpbgu">
                                <Link
                                    href="/servicos"
                                    className="hover:text-teal-300 transition-colors"
                                    data-oid="n2g8w4:"
                                >
                                    Serviços
                                </Link>
                            </li>
                            <li data-oid="j.abs2p">
                                <Link
                                    href="/sobre"
                                    className="hover:text-teal-300 transition-colors"
                                    data-oid="k.ktag6"
                                >
                                    Sobre Nós
                                </Link>
                            </li>
                            <li data-oid="664_z49">
                                <Link
                                    href="/casos-de-sucesso"
                                    className="hover:text-teal-300 transition-colors"
                                    data-oid="ayu7dbm"
                                >
                                    Casos de Sucesso
                                </Link>
                            </li>
                            <li data-oid="wdzwuws">
                                <Link
                                    href="/blog"
                                    className="hover:text-teal-300 transition-colors"
                                    data-oid="7x:_8:c"
                                >
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contato */}
                    <div data-oid="b4-uk3z">
                        <h3 className="text-teal-300 font-semibold mb-4" data-oid="fzy0xzd">
                            Contato
                        </h3>
                        <ul className="space-y-2 text-purple-200" data-oid="iy7ietl">
                            <li data-oid="xg5vaz7">📧 contato@mardevinhos.com</li>
                            <li data-oid="t6mr0ej">🌐 www.mardevinhos.com</li>
                            <li data-oid="f7a4nwm">
                                <Link
                                    href="/contato"
                                    className="hover:text-teal-300 transition-colors"
                                    data-oid="qt2m-t:"
                                >
                                    Fale Conosco
                                </Link>
                            </li>
                            <li data-oid="4nzsc88">
                                <Link
                                    href="/agendar"
                                    className="hover:text-teal-300 transition-colors"
                                    data-oid="go01i-_"
                                >
                                    Agendar Reunião
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    className="border-t border-white/20 pt-8 text-center text-purple-200"
                    data-oid="q7.4xn8"
                >
                    <p data-oid="vmjvabx">
                        &copy; 2024 Mar de Vinhos. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
