'use client';

import { CssBaseline, NextUIProvider, Spacer, useSSR } from '@nextui-org/react';
import Header from './components/Header';
import React from 'react';
import './globals.css';
import { lavenderTheme } from './lavender.theme';
import Footer from './components/Footer';

export default function Providers({ children }: { children: React.ReactNode }) {
    const { isBrowser } = useSSR();
    return (
        isBrowser && (
            <NextUIProvider theme={lavenderTheme}>
                <div className="app">
                    {CssBaseline.flush()}
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </div>
            </NextUIProvider>
        )
    );
}
