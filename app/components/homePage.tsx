import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const HeaderComponent: React.FC = () => {
    return (
        <header>
            <nav className="nav-links">
                <a href="/sobre"> Sobre mim </a>
                <a href="/still"> Still </a>
                <a href="/studio"> Studio </a>
                <a href="/fineArt"> Fine Art </a>
            </nav>
        </header>
    );
};

export const SlideComponent: React.FC = () => {
    return (
        <section className="slide-container">
            <div className="slide">
                <Image src="/favicon.ico" alt="Hey" width={32} height={32} />
            </div>
            <div className="slide2">
                <Image src="/favicon.ico" alt="Hey" width={32} height={32} />
            </div>
            <div className="slide3">
                <Image src="/favicon.ico" alt="Hey" width={32} height={32} />
            </div>
            <div className="slide4">
                <Image src="/favicon.ico" alt="Hey" width={32} height={32} />
            </div>
        </section>
    );
};

export const FooterComponent: React.FC = () => {
    return (
        <footer className="footer-container">
            <p> Nathalia Trazzi Photography</p>
        </footer>
    );
};
