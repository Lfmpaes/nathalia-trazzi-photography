'use client';
import { Navbar, Text } from '@nextui-org/react';

export default function Header() {
    return (
        <header className="header">
            <Navbar>
                <Navbar.Content  enableCursorHighlight>
                    <Navbar.Link href="/">Home</Navbar.Link>
                    <Navbar.Link href="/about">About</Navbar.Link>
                    <Navbar.Link href="/stills">Stills</Navbar.Link>
                    <Navbar.Link href="/studio">Studio</Navbar.Link>
                </Navbar.Content>
                <Navbar.Brand>
                    <Text b color="inherit">
                        Nathalia Trazzi
                    </Text>
                </Navbar.Brand>
            </Navbar>
        </header>
    );
}
