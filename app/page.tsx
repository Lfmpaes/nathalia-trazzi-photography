import Photo from './components/Photo';
import {HeaderComponent, SlideComponent, FooterComponent} from './components/homePage'

export default function Home() {
    return (
        <main className="main">
            <h1>Nathalia Trazzi</h1>
            <p>Photos</p>
            <Photo />
            <HeaderComponent/>
            <SlideComponent/>
            <FooterComponent/>
        </main>
    );
}
