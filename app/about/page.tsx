'use client';
import { Container, Spacer, Text } from '@nextui-org/react';
import Link from 'next/link';
import AuthorCard from '../components/AuthorCard';

export default function About() {
    return (
        <Container className="main">
            <Spacer y={4} />
            <Text>
                Nathália teve seu primeiro contato com a fotografia desde muito
                cedo, ainda criança decidiu que esse seria o caminho que
                seguiria mais tarde. A mesma é uma fotografa apaixonada pelo o
                que faz, encantada e fascinada por surrealismo e fantasia,
                decidiu transmitir isso em cada imagem que cria.
            </Text>
            <Spacer y={1} />
            <Text>
                Concluiu sua formação em 2016 pela Panamericana de Arte e Design
                localizada no bairro de Higienópolis em São Paulo, durante esse
                seu tempo na Panamericana, estudou linguagem visual, linguagem
                publicitária, linguagem editorial e jornalismo e
                desenvolvimentos de trabalhos autorais; Aprendeu também a usar
                técnicas de produção, iluminação, direção e edição a favor de
                pessoas, alimentos e produtos.
            </Text>
            <Spacer y={1} />
            <Text>
                Ainda para completar seu curriculum a mesma também tem um curso
                de história da arte também pela Panamericana no qual, usa sua
                grande inspirações de pintores de época para compor sua
                iluminação, fez alguns cursos de especialização em fine art com
                fotógrafos reconhecidos mundialmente como David Talley e Brooke
                shaden, a mesma sempre está em busca de aperfeiçoamento e
                técnicas novas que complementam seu trabalho.
            </Text>
            <Spacer y={4} />
            <AuthorCard />
        </Container>
    );
}
