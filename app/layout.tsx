'use client';
// import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import { NextUIProvider } from '@nextui-org/react';

// const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Nathalia Trazzi Photography',
    description: 'Photography',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br">
            <NextUIProvider>
                <body>
                    {/* <body className={inter.className}> */}
                    <Header />
                    {children}
                </body>
            </NextUIProvider>
        </html>
    );
}
