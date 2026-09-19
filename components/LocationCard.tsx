"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Reveal from "./Reveal";

export default function LocationCard() {
    const openMap = () => {
        window.open(
            "https://maps.google.com/?q=Краснокаменск+Проспект+Ветеранов+3",
            "_blank",
        );
    };

    return (
        <Reveal direction="up" className="relative mx-5 mb-16 text-white py-[40px] px-[40px] text-center">
            <div
                className="absolute inset-0 z-0"
            >
                <Image
                   src="/images/red-bg-2.webp"
                   alt="red-bg-2"
                   width={1920}
                   height={1080}
                   className="w-full h-full object-cover rounded-lg"
                   style={{ filter: "grayscale(50%)" }}
                />
            </div>
            <div className="relative font-Denistina text-5xl mb-4">
                Ждем вас
            </div>
            <div className="font-montserrat text-[16px] leading-relaxed opacity-90 relative">
                Ресторан &quot;Аргунь&quot; г.
                <br />
                Краснокаменск, Проспект
                <br />
                Ветеранов, 3
            </div>
            <motion.button
                onClick={openMap}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block w-64 px-4 py-[12px] border-2 border-burgundy text-burgundy font-inter text-[13px] tracking-[1px] uppercase rounded transition-colors duration-300 cursor-pointer bg-[#FFF6EF] hover:bg-white hover:text-burgundy z-30 absolute -bottom-14 left-1/2 -translate-1/2"
            >
                Перейти на карту
            </motion.button>
        </Reveal>
    );
}