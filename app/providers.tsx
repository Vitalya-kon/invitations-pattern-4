"use client";

import { createTheme, MantineProvider } from "@mantine/core";
import type { ReactNode } from "react";

// Палитра приглашения: бордовый + золото, чтобы компоненты Mantine
// (выделение опций, фокус, тултипы) выглядели в едином стиле
const theme = createTheme({
    primaryColor: "wine",
    colors: {
        wine: [
            "#F8EAEC",
            "#F0D2D7",
            "#DFABB4",
            "#CB818E",
            "#B65C6D",
            "#9E3D50",
            "#8B2739",
            "#7b1a2b",
            "#671523",
            "#54101c",
        ],
    },
    fontFamily: "var(--font-cormorant), serif",
    defaultRadius: "lg",
});

export default function Providers({ children }: { children: ReactNode }) {
    return <MantineProvider theme={theme}>{children}</MantineProvider>;
}
