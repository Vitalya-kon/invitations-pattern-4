import { motion } from "motion/react";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import Image from "next/image";

const PALETTE = [
    { name: "Бордо", hex: "#7b1a2b" },
    { name: "Пыльная роза", hex: "#B58B85" },
    { name: "Золото", hex: "#C9A96E" },
    { name: "Шалфей", hex: "#A8B5A0" },
    { name: "Слоновая кость", hex: "#FFF6EF" },
    { name: "Графит", hex: "#4A4A4A" },
];

// SVG-компонент, имитирующий мазок краски
const BrushStroke = ({ color }) => (
    <svg
        viewBox="0 0 100 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
    >
        {/* Основной слой */}
        <path
            d="M11.9,29.5C7.7,27.4,6.3,22.2,8.8,18.1c2.5-4.1,8.3-6.5,13.1-7.1c11.6-1.5,23.4-1.9,35.2-1.1c11.7,0.8,23,3.1,33.9,6.5c5.2,1.6,10.6,3.6,13.7,7.8c3.2,4.3,2.9,10-0.6,14.1c-3.4,3.9-9,5.7-14.4,7c-11.6,2.8-23.9,3.3-35.8,2.5c-12-0.8-23.8-3.5-35-7.7C16.3,38.6,13.8,36.9,11.9,29.5z"
            fill={color}
        />
        {/* Дополнительный полупрозрачный слой для эффекта текстуры кисти */}
        <path
            d="M15,22C25,16,45,14,65,18C85,22,95,28,98,32C92,38,72,42,52,38C32,34,18,30,15,22Z"
            fill={color}
            fillOpacity="0.5"
        />
    </svg>
);

export default function DressCode() {
    return (
        <div className="px-5 py-16 text-center">
            {/* Заголовок */}
            <Reveal>
                <div className="font-Denistina text-5xl text-burgundy mb-[5px]">
                    Дресс-код
                </div>
                <div className="text-xl text-text-black mb-[20px] font-montserrat">
                    в оттенках нашего торжества
                </div>
            </Reveal>

            {/* Карточка с описанием */}
            <Reveal direction="up" delay={0.1}>
                <div className="mx-auto max-w-2xl rounded-xl border border-gold/40 bg-ivory px-6 py-8 shadow-[0_10px_30px_rgba(123,26,43,0.08)]">
                    <p className="font-montserrat text-base text-text-muted leading-relaxed">
                        Мы будем благодарны, если в этот день вы разделите с нами
                        палитру праздника. Строгих правил нет — главное, чтобы вы
                        чувствовали себя красиво и комфортно.
                    </p>

                    {/* Палитра */}
                    <RevealGroup
                        stagger={0.1}
                        className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-5"
                    >
                        {PALETTE.map((color) => (
                            <RevealItem key={color.hex}>
                                <div className="flex flex-col items-center gap-2">
                                    <motion.div
                                        whileHover={{ scale: 1.15 }}
                                        // Изменили размеры: сделали шире для формы мазка
                                        className="h-10 w-20 flex justify-center items-center"
                                    >
                                        <BrushStroke color={color.hex} />
                                    </motion.div>
                                    <span className="font-montserrat text-xs uppercase tracking-[1px] text-text-muted">
                                        {color.name}
                                    </span>
                                </div>
                            </RevealItem>
                        ))}
                    </RevealGroup>

                    {/* Разделитель */}
                    <Image
                        src="/images/line-heart-clipart-xl.png"
                        alt="линии"
                        width={1920}
                        height={177}
                        className="z-10 w-full object-contain py-6"
                    />

                    <p className="font-montserrat text-sm text-text-muted leading-relaxed">
                        Просим воздержаться от строгого чёрного и белого цветов.
                        Платья, костюмы, рубашки и аксессуары в тёплой палитре
                        будут смотреться особенно гармонично на фотографиях.
                    </p>
                </div>
            </Reveal>
        </div>
    );
}