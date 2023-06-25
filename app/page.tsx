import Link from 'next/link';
import Photo from './components/Photo';

export default function Home() {
    return (
        <main className="main">
            <h1>Nathalia Trazzi</h1>
            <Link href="/about">About</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Photo />
        </main>
    );
}
