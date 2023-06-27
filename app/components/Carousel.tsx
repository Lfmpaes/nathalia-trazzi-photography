'use client';

import { Image } from '@nextui-org/react';
import { Carousel } from 'flowbite-react';

export default function HomeCarousel() {
    return (
        <Carousel indicators slide>
            <Image src="https://picsum.photos/800/600" alt="Lorem Ipsum" />
            <Image src="https://picsum.photos/800/600" alt="Lorem Ipsum" />
            <Image src="https://picsum.photos/800/600" alt="Lorem Ipsum" />
            <Image src="https://picsum.photos/800/600" alt="Lorem Ipsum" />
        </Carousel>
    );
}
