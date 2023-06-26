'use client';

import {NextUIProvider} from "@nextui-org/react";
import Header from "./components/Header";
import React from "react";

export default function Providers({children}: {
    children: React.ReactNode;
}) {
    return (
        <NextUIProvider>
            <Header/>
            <main>
                {children}
            </main>
        </NextUIProvider>
    )

}
