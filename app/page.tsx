'use client';
import { Button, Container, Col, Row, Text, Spacer } from '@nextui-org/react';
import HomeCarousel from './components/Carousel';

export default function Home() {
    return (
        <main className="main">
            <Spacer y={1} />
            <Container>
                <Text b size="xl">
                    Nathalia Trazzi
                </Text>
                <HomeCarousel />
            </Container>
        </main>
    );
}
