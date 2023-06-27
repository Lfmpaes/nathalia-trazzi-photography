/* eslint-disable @next/next/no-img-element */
import { Col, Container, Row, Spacer, Text, User } from '@nextui-org/react';

export default function AuthorCard() {
    return (
        <Container className="author-card">
            <Row align="center">
                <Col span={4}>
                    <div className="h-20 w-20 mb-4 lg:mb-0 mr-4 md:h-36 md:w-36 lg:h-48 lg:w-48">
                        <img
                            src="/nath-sqr.jpg"
                            alt="Nathalia Trazzi"
                            className="h-full w-full rounded-full overflow-hidden shadow"
                        />
                    </div>
                </Col>
                <Spacer y={1} />
                <Col span={8}>
                    <Text h4 b>
                        Nathália Trazzi
                    </Text>
                    <Text>nathaliafranz.fotografie@outlook.de</Text>
                </Col>
            </Row>
            <Spacer y={6} />
        </Container>
    );
}
