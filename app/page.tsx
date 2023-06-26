'use client';
import { Button, Card, Container, Col, Row, Text } from '@nextui-org/react';

export default function Home() {
    return (
        <main className="main">
            <Container>
                <Text h1>Nathalia Trazzi</Text>

                <Row gap={1}>
                    <Col>
                        {/*<Card css={{ mw: '400px' }}>*/}
                        {/*    <Card.Body>*/}
                        {/*        <Link href="/about">About</Link>*/}
                        {/*    </Card.Body>*/}
                        {/*</Card>*/}
                        <Button size="xl">About</Button>
                    </Col>
                    <Col>
                        {/*<Card css={{ mw: '400px' }}>*/}
                        {/*    <Card.Body>*/}
                        {/*        <Link href="/stills">Stills</Link>*/}
                        {/*    </Card.Body>*/}
                        {/*</Card>*/}
                        <Button size="xl">Stills</Button>
                    </Col>
                    <Col>
                        {/*<Card css={{ mw: '400px' }}>*/}
                        {/*    <Card.Body>*/}
                        {/*        <Link href="/studio">Studio</Link>*/}
                        {/*    </Card.Body>*/}
                        {/*</Card>*/}
                        <Button size="xl">Studio</Button>
                    </Col>
                </Row>

                {/* <button className="btn btn-primary">Click me</button> */}
            </Container>
        </main>
    );
}
