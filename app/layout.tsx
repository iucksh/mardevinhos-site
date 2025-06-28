import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Mar de Vinhos - Especialistas em Carta de Vinhos HORECA',
    description:
        'Conectando seu negócio a importadores e vinícolas. Especialistas na criação, gestão e otimização da carta de vinhos para o setor HORECA.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="pt-BR" data-oid="qn8lv4l">
            <body
                className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-teal-600 text-white"
                data-oid="4cxo0sa"
            >
                <Navigation data-oid="cb06cy9" />
                {children}
                <Footer data-oid="b0hkl0s" />
                <Script src="/builtwith.js" strategy="afterInteractive" data-oid="0u3-_vk" />
            </body>
        </html>
    );
}
