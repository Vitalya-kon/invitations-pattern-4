"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const OFFSET = 40;

const hiddenByDirection: Record<Direction, { x: number; y: number }> = {
    up: { x: 0, y: OFFSET },
    down: { x: 0, y: -OFFSET },
    left: { x: OFFSET, y: 0 },
    right: { x: -OFFSET, y: 0 },
    none: { x: 0, y: 0 },
};

type RevealProps = {
    children: ReactNode;
    /** Направление, откуда въезжает блок */
    direction?: Direction;
    /** Задержка запуска в секундах */
    delay?: number;
    /** Длительность в секундах */
    duration?: number;
    /** Показывать только один раз при первом появлении */
    once?: boolean;
    className?: string;
};

/**
 * Плавное появление блока при попадании в область видимости.
 * Использует Motion (motion/react) с whileInView.
 */
export default function Reveal({
    children,
    direction = "up",
    delay = 0,
    duration = 0.7,
    once = true,
    className,
}: RevealProps) {
    const start = hiddenByDirection[direction];

    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, ...start }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once, amount: 0.25 }}
            transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
}

/**
 * Контейнер со stagger-эффектом: дочерние <RevealItem /> появляются каскадом.
 */
export function RevealGroup({
    children,
    stagger = 0.12,
    once = true,
    className,
}: {
    children: ReactNode;
    stagger?: number;
    once?: boolean;
    className?: string;
}) {
    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="show"
            viewport={{ once, amount: 0.2 }}
            variants={{
                hidden: {},
                show: { transition: { staggerChildren: stagger } },
            }}
        >
            {children}
        </motion.div>
    );
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

export function RevealItem({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <motion.div className={className} variants={itemVariants}>
            {children}
        </motion.div>
    );
}
