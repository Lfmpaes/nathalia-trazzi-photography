import Providers from './providers';
import React from 'react';

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
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
