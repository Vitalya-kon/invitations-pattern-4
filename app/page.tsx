"use client";

import { useMemo } from "react";
import { motion } from "motion/react";
import Hero from "@/components/Hero";
import DateSelector from "@/components/DateSelector";
import TimeLine from "@/components/TimeLine";
import LocationCard from "@/components/LocationCard";
import Invite from "@/components/Invite"
import CountdownTimer from "@/components/CountdownTimer"
import InfoSection from "@/components/InfoSection"
import DressCode from "@/components/DressCode"
import Footer from "@/components/Footer"

// --- Floating Hearts ---
function FloatingHearts() {
    // Генерируем сердца один раз, чтобы не пересоздавать их при рендере
    const hearts = useMemo(
        () =>
            Array.from({ length: 8 }, (_, i) => ({
                id: i,
                left: Math.random() * 100,
                delay: Math.random() * 15,
                duration: 10 + Math.random() * 10,
                size: 15 + Math.random() * 20,
            })),
        [],
    );

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {hearts.map((h) => (
                <motion.span
                    key={h.id}
                    className="absolute text-[#7b1a2b] pointer-events-none"
                    style={{ left: `${h.left}%`, fontSize: h.size, bottom: 0 }}
                    initial={{ y: 0, opacity: 0, rotate: 0 }}
                    animate={{
                        y: ["0vh", "-110vh"],
                        opacity: [0, 0.1, 0.1, 0],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: h.duration,
                        delay: h.delay,
                        repeat: Infinity,
                        ease: "linear",
                        times: [0, 0.1, 0.9, 1],
                    }}
                >
                    &#9829;
                </motion.span>
            ))}
        </div>
    );
}
// --- Main Page ---
export default function Home() {
    return (
        <div className="relative min-h-screen">
            {/* Background layers */}
            <div
                className="fixed inset-0 z-0 pointer-events-none"
                style={{
                    background:
                        "linear-gradient(135deg, #FFF6EF 0%, #FFF8EF 100%)",
                }}
            />
            

            <FloatingHearts />

            {/* Main content */}
            <div className="relative z-10 flex justify-center mx-auto">
                <div className="max-w-125 mx-auto flex flex-col">
                  <Hero/>
                  <DateSelector/>
                  <TimeLine/>
                  <LocationCard/>
                  <DressCode/>
                  <Invite/>
                  <CountdownTimer/>
                  <InfoSection/>
                  <Footer/>
                </div>
            </div>
        </div>
    );
}
