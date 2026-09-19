"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Reveal from "./Reveal";

export default function DateSelector() {
    const [active, setActive] = useState(8);
    const dates = [6, 7, 8, 9, 10];

    return (
        <div>
            <Reveal>
                <div className="font-Denistina text-6xl text-burgundy text-center mb-3.75">
                    наш август
                </div>
            </Reveal>
            <div className="flex justify-center gap-2.5 px-10 pb-7.5 items-center">
                {dates.map((d, index) => {
                    const isFirstOrLast = index === 0 || index === dates.length - 1;
                    return (
                        <div key={d} className="relative">
                            <button
                                onClick={() => setActive(d)}
                                className={`border border-burgundy rounded-lg flex items-center justify-center font-cormorant text-2xl font-semibold text-burgundy transition-all duration-300 cursor-pointer ${
                                    isFirstOrLast ? "w-10 h-10" : "w-12 h-12"
                                } ${
                                    active === d ? "opacity-0" : ""
                                }`}
                            >
                                {d}
                            </button>
                            {active === d && (
                                <motion.div
                                    className="absolute inset-0 flex items-center justify-center"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 15,
                                    }}
                                >
                                    <svg
                                        width={isFirstOrLast ? "55" : "65"}
                                        height={isFirstOrLast ? "55" : "65"}
                                        viewBox="0 0 50 50"
                                        className="absolute"
                                    >
                                        {/* Сердечко */}
                                        <path
                                            d="M25 45 C25 45, 5 30, 5 18 C5 10, 10 5, 17 5 C21 5, 24 8, 25 10 C26 8, 29 5, 33 5 C40 5, 45 10, 45 18 C45 30, 25 45, 25 45 Z"
                                            fill="#8B1E3F"
                                        />
                                        
                                    </svg>
                                    <span className="relative z-10 font-cormorant text-3xl font-semibold text-white">
                                        {d}
                                    </span>
                                </motion.div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}