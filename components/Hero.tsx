"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "motion/react";

const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

const imageReveal: Variants = {
    hidden: { opacity: 0, scale: 0.94, y: 20 },
    show: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function Hero() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleSound = () => {
        const audio = audioRef.current;
        if (!audio) return;
        if (audio.paused) {
            audio
                .play()
                .then(() => setIsPlaying(true))
                .catch(() => setIsPlaying(false));
        } else {
            audio.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div className="px-2">
            <audio ref={audioRef} src="/audio/sound.mp3" loop />
            

            <motion.div
                className="py-10 text-center"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
            >
                <motion.div
                    className="relative inline-block w-55"
                    variants={fadeUp}
                >
                    <div className="flex items-center gap-2 ">
                        <span className="font-Denistina text-burgundy text-8xl leading-20">А</span>
                        <span className="text-gray-700 font-inter text-3xl">ндрей</span>
                    </div>
                    <span className="font-Denistina text-burgundy block text-8xl absolute top-8 right-0">&amp;</span>
                    <div className="flex items-center gap-2 justify-end"> 
                        <span className="font-Denistina text-burgundy text-8xl leading-20">В</span>
                        <span className="text-gray-700 font-inter text-3xl">алерия</span>
                    </div>
                </motion.div>
                <motion.div
                    className="font-Denistina relative text-4xl text-text-dark flex items-start -rotate-12 leading-7 pl-4"
                    variants={fadeUp}
                >
                    Ура, мы <br/> женимся!
                    <div className="flex justify-center pt-4 absolute right-8 top-10 rotate-12 ">
                    <button
                        type="button"
                        onClick={toggleSound}
                        className=""
                        aria-pressed={isPlaying}
                    >
                        <Image
                            src='/images/radio.png'
                            width={40}
                            height={40}
                            alt="Toggle Sound"
                        />
                        <span>тык</span> 
                    </button>
                </div>
                </motion.div>
            </motion.div>

            <motion.div
                className="relative grid grid-cols-3 gap-3 px7.5 pt-5"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
            >
                <Image
                    src="/images/line-heart-clipart-xl.png"
                    alt="линии"
                    width={1920}
                    height={177}
                    className="absolute bottom-0 z-10 w-full left-0 object-contain rotate-10"
                />
                <motion.div
                    className="col-span-2 h-full"
                    variants={imageReveal}
                >
                    <Image
                        src="/images/customer_img/1789297296e889.webp"
                        alt="Фото пары 1"
                        className="w-full object-cover rounded-lg shadow-md h-full"
                        width={1920}
                        height={177}
                    />
                </motion.div>
                <motion.div className="col-span-1 h-full" variants={imageReveal}>
                    <Image
                        src="/images/customer_img/1789297373097f.webp"
                        alt="Фото пары 2"
                        className="w-full h-full object-cover rounded-lg shadow-md"
                        style={{ filter: "grayscale(30%)" }}
                        width={1920}
                        height={177}
                    />
                </motion.div>
            </motion.div>

            <motion.div
                className="py-7.5 px-10 pt-17 text-center text-lg leading-6 text-text-muted font-montserrat"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
                И в этот прекрасный день мы хотим вместе с Вами разделить яркие
                мгновения и искренние улыбки!
            </motion.div>
        </div>
    );
}
