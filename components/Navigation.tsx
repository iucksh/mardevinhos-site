'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { href: '/', label: 'Início' },
        { href: '/servicos', label: 'Serviços' },
        { href: '/sobre', label: 'Sobre' },
        { href: '/casos-de-sucesso', label: 'Casos de Sucesso' },
        { href: '/blog', label: 'Blog' },
        { href: '/contato', label: 'Contato' },
    ];

    return (
        <nav
            className="py-6 px-8 flex justify-between items-center relative z-50"
            data-oid="vol_mcy"
        >
            <Link href="/" className="flex items-center space-x-3" data-oid="a20fm63">
                <div
                    className="w-12 h-12 border-2 border-teal-300 rounded-full flex items-center justify-center"
                    data-oid="6djwxld"
                >
                    <div
                        className="w-6 h-8 border border-teal-300 rounded-t-full"
                        data-oid="o6k0ny6"
                    ></div>
                </div>
                <span className="text-xl font-light tracking-wide text-teal-300" data-oid="a9:zusq">
                    MAR DE VINHOS
                </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8" data-oid="x5.c34i">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`text-sm hover:text-teal-300 transition-colors ${
                            pathname === item.href ? 'text-teal-300' : 'text-white'
                        }`}
                        data-oid="xt05aa6"
                    >
                        {item.label}
                    </Link>
                ))}
                <Link
                    href="/agendar"
                    className="px-6 py-2 border border-teal-300 rounded-full text-sm hover:bg-teal-300 hover:text-purple-900 transition-all duration-300"
                    data-oid="hl:r349"
                >
                    Agendar Reunião
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="lg:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                data-oid="d88gc8h"
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="t-oy-0_"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                        data-oid="vj9ce:6"
                    />
                </svg>
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div
                    className="absolute top-full left-0 right-0 bg-purple-900/95 backdrop-blur-sm lg:hidden"
                    data-oid="a:prrcr"
                >
                    <div className="flex flex-col space-y-4 p-8" data-oid="ahrk8vm">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-sm hover:text-teal-300 transition-colors ${
                                    pathname === item.href ? 'text-teal-300' : 'text-white'
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                                data-oid="e36mm1m"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            href="/agendar"
                            className="px-6 py-2 border border-teal-300 rounded-full text-sm hover:bg-teal-300 hover:text-purple-900 transition-all duration-300 text-center"
                            onClick={() => setIsMenuOpen(false)}
                            data-oid="q_f9dr8"
                        >
                            Agendar Reunião
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
