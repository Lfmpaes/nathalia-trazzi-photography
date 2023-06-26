'use client';

import { CssBaseline, NextUIProvider, useSSR } from '@nextui-org/react';
import Header from './components/Header';
import React from 'react';
import './globals.css';

export default function Providers({ children }: { children: React.ReactNode }) {
    const { isBrowser } = useSSR();
    return (
        isBrowser && (
            <NextUIProvider>
                <div className="app">
                    {CssBaseline.flush()}
                    <Header />
                    <main>{children}</main>
                </div>
            </NextUIProvider>
        )
    );
}
