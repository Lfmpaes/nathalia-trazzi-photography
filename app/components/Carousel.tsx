'use client';

import { Image } from '@nextui-org/react';
import { Carousel } from 'flowbite-react';

export default function HomeCarousel() {
    return (
        <Carousel indicators slide>
            <Image src="https://picsum.photos/720/480" alt="Lorem Ipsum" />
            <Image src="https://picsum.photos/721/481" alt="Lorem Ipsum" />
            <Image src="https://picsum.photos/722/482" alt="Lorem Ipsum" />
            <Image src="https://picsum.photos/723/483" alt="Lorem Ipsum" />
        </Carousel>
    );
}
