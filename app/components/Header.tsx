'use client';
import { Image, Link, Navbar, Text } from '@nextui-org/react';
import { usePathname } from 'next/navigation';

export default function Header() {
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Stills', path: '/stills' },
        { name: 'Studio', path: '/studio' },
    ];

    const currentRoute = usePathname();

    return (
        <header className="header">
            <Navbar>
                <Navbar.Toggle showIn="xs" />
                <Navbar.Content
                    hideIn="xs"
                    enableCursorHighlight
                    variant={'underline'}>
                    {navItems.map((item) => (
                        <Navbar.Link
                            isActive={item.path == currentRoute}
                            key={item.name}
                            href={item.path}>
                            {item.name}
                        </Navbar.Link>
                    ))}
                </Navbar.Content>
                <Navbar.Collapse>
                    {navItems.map((item) => (
                        <Navbar.CollapseItem key={item.name}>
                            <Text b color="inherit">
                                <Link color={'text'} href={item.path}>
                                    {item.name}
                                </Link>
                            </Text>
                        </Navbar.CollapseItem>
                    ))}
                </Navbar.Collapse>
                <Navbar.Brand>
                    <Image
                        src="/logo.png"
                        alt="Nathalia Trazzi"
                        width={150}
                        // height={202}
                    />
                    <Text b color="inherit">
                        {/* <Link color={'text'} href="/">
                            Nathalia Trazzi
                        </Link> */}
                    </Text>
                </Navbar.Brand>
            </Navbar>
        </header>
    );
}
