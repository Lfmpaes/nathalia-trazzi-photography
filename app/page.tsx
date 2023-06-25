import Link from 'next/link';
import Photo from './components/Photo';

export default function Home() {
    return (
        <main className="main">
            <h1>Nathalia Trazzi</h1>
            <Link href="/about">About</Link>
            <br />
            <Link href="/faq">FAQ</Link>
            <br />
            <Link href="/portfolio">Portfolio</Link>
            <br />
            <Photo />
        </main>
    );
}
