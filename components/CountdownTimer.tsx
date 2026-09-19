"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Reveal from "./Reveal";

function Unit({ value, label }: { value: number; label: string }) {
    return (
        <div className="text-center">
            <div className="relative font-cormorant text-4xl text-burgundy font-bold leading-none min-w-[50px] h-9 overflow-hidden flex justify-center">
                <AnimatePresence mode="popLayout" initial={false}>
                    <motion.span
                        key={value}
                        initial={{ y: "-100%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        exit={{ y: "100%", opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {value}
                    </motion.span>
                </AnimatePresence>
            </div>
            <div className="text-xs text-black uppercase mt-3 font-montserrat">
                {label}
            </div>
        </div>
    );
}

export default function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState({
        days: 152,
        hours: 5,
        minutes: 18,
        seconds: 18,
    });

    useEffect(() => {
        const now = new Date();
        const weddingDate = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate() + 152,
            5,
            18,
            18,
        );

        const update = () => {
            const diff = weddingDate.getTime() - Date.now();
            if (diff <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }
            setTimeLeft({
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor(
                    (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
                ),
                minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((diff % (1000 * 60)) / 1000),
            });
        };

        update();
        const id = setInterval(update, 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <Reveal direction="up" className="text-center py-16 sm:px-7.5">
            <div className="font-Denistina text-5xl text-burgundy mb-[5px]">
                собираемся
            </div>
            <div className="text-xl text-text-black mb-[20px]">
                через...
            </div>
            <div className="flex justify-center gap-6 items-start">
                <Unit value={timeLeft.days} label="дней" />
                <Unit value={timeLeft.hours} label="часов" />
                <span className="text-5xl font-bold text-burgundy leading-none pt-[4px]">
                    :
                </span>
                <Unit value={timeLeft.minutes} label="минут" />
                <span className="text-5xl font-bold text-burgundy leading-none pt-[4px]">
                    :
                </span>
                <Unit value={timeLeft.seconds} label="секунд" />
            </div>
        </Reveal>
    );
}
