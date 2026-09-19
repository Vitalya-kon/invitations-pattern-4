"use client";

import Image from "next/image";
import { useState, useRef, useCallback } from "react";
import { Select } from "@mantine/core";

const GUESTS_DATA = [
    { value: "1", label: "1 гость" },
    { value: "2", label: "2 гостя" },
    { value: "3", label: "3 гостя" },
    { value: "4", label: "4 гостя" },
];

export default function InfoSection() {
    const [submitted, setSubmitted] = useState(false);
    const [name, setName] = useState("");
    const [attend, setAttend] = useState("yes");
    const [guests, setGuests] = useState("2");
    const [wish, setWish] = useState("");
    const cardRef = useRef<HTMLDivElement>(null);

    const isYes = attend === "yes";

    const handleSubmit = useCallback(
        (e: React.FormEvent) => {
            e.preventDefault();
            const trimmed = name.trim();
            if (!trimmed) {
                const input = document.getElementById(
                    "gName",
                ) as HTMLInputElement;
                if (input) {
                    input.focus();
                    input.style.borderColor = "#C9A96E";
                }
                return;
            }

            setSubmitted(true);
            setName(trimmed);

            const card = cardRef.current;
            if (!card) return;

            for (let i = 0; i < 16; i++) {
                const h = document.createElement("span");
                h.className = "heart-fly";
                h.textContent = "\u2665";
                const colors = ["#C9A96E", "#F5EDE4", "#B58B85"];
                h.style.color = colors[i % 3];
                h.style.setProperty("--tx", `${Math.random() * 260 - 130}px`);
                h.style.setProperty("--ty", `${-60 - Math.random() * 160}px`);
                h.style.animationDelay = `${Math.random() * 0.35}s`;
                card.appendChild(h);
                setTimeout(() => h.remove(), 2200);
            }
        },
        [name],
    );

    // Общий стиль поля с нижним подчёркиванием поверх тёмного фото
    const fieldClass =
        "w-full bg-transparent text-white font-montserrat text-lg placeholder:text-white/50 border-b border-white/60 focus:border-gold pb-1.5 px-1 outline-none transition-colors duration-300";

    // Стиль варианта ответа «приду / не смогу»
    const optionClass = (active: boolean) =>
        `flex items-center justify-center text-center px-2.5 py-1.5 border-b cursor-pointer font-montserrat text-lg min-h-[36px] transition duration-300 ${
            active
                ? "border-gold text-white"
                : "border-white/40 text-white/50 hover:text-white/80"
        }`;

    return (
        <>
            {/* НИЖНЯЯ СЕКЦИЯ С ВОЛНОЙ И ФОТО */}
            <div className="pt-0">
                <div className="relative w-full">
                    {/* 1. Фото на заднем фоне */}
                    <Image
                        src="/images/red-bg-2.webp"
                        alt="Фото пары"
                        className="w-full aspect-[4/5] object-cover h-full grayscale-[50%]"
                        width={1920}
                        height={1080}
                    />
                    <Image
                        src="/images/red-bg-2.webp"
                        alt="Фото пары"
                        className="w-full aspect-[4/5] -mt-1 object-cover h-full grayscale-[50%]"
                        width={1920}
                        height={1080}
                    />

                    {/* 2. SVG Маска-волна */}
                    <div className="absolute -top-1 left-0 w-full text-[#FFF6EF] pointer-events-none z-0">
                        <svg
                            viewBox="0 0 1000 250"
                            className="w-full h-auto block"
                        >
                            <defs>
                                <path
                                    id="waveMask"
                                    d="M 0 120 C 350 260, 650 40, 1000 160"
                                />
                            </defs>
                            <path
                                d="M 0 0 L 1000 0 L 1000 160 C 650 40, 350 260, 0 120 Z"
                                fill="currentColor"
                            />
                            <use
                                href="#waveMask"
                                fill="none"
                                stroke="#7A1D27"
                                strokeWidth="5"
                            />
                        </svg>
                    </div>

                    {/* 3. Заголовок + форма */}
                    <div className="absolute z-10 top-46 sm:top-64 left-[50%] -translate-x-1/2 w-82">
                        <h2 className="font-Denistina text-white text-5xl text-center leading-12">
                            Пожалуйста,
                            <br /> заполните анкету
                        </h2>

                        {/* Контейнер формы */}
                        <div ref={cardRef} className="relative w-full mt-5">
                            {submitted ? (
                                <div className="relative z-10 flex flex-col items-center text-center p-4 gap-4">
                                    <span className="text-gold text-5xl animate-heartbeat">
                                        &#9829;
                                    </span>
                                    <p className="font-Denistina text-white text-4xl leading-10">
                                        Спасибо,
                                        <br />
                                        {name}!
                                    </p>
                                    <p className="font-montserrat text-white/80 text-base leading-relaxed">
                                        Ваш ответ принят. Мы очень ждём
                                        встречи!
                                    </p>
                                </div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    className="relative z-10 flex flex-col items-stretch p-4 sm:gap-16 gap-10 mt-12"
                                >
                                    {/* Имя */}
                                    <div>
                                        <label
                                            htmlFor="gName"
                                            className="fl block text-gold mb-2"
                                        >
                                            Ваше имя и фамилия
                                        </label>
                                        <input
                                            id="gName"
                                            type="text"
                                            value={name}
                                            onChange={(e) => {
                                                setName(e.target.value);
                                                e.currentTarget.style.borderColor =
                                                    "";
                                            }}
                                            placeholder="Например, Иван Иванов"
                                            className={fieldClass}
                                        />
                                    </div>

                                    {/* Приду / не смогу */}
                                    <div>
                                        <span className="fl block text-gold mb-2">
                                            Сможете прийти?
                                        </span>
                                        <div className="grid grid-cols-1 gap-3.5">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="attend"
                                                    value="yes"
                                                    checked={attend === "yes"}
                                                    onChange={() =>
                                                        setAttend("yes")
                                                    }
                                                    className="sr-only"
                                                />
                                                <span
                                                    className={optionClass(
                                                        attend === "yes",
                                                    )}
                                                >
                                                    С радостью приду
                                                </span>
                                            </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="attend"
                                                    value="no"
                                                    checked={attend === "no"}
                                                    onChange={() =>
                                                        setAttend("no")
                                                    }
                                                    className="sr-only"
                                                />
                                                <span
                                                    className={optionClass(
                                                        attend === "no",
                                                    )}
                                                >
                                                    Не смогу
                                                </span>
                                            </label>
                                        </div>
                                    </div>

                                    {/* Количество гостей */}
                                    <div
                                        className={
                                            !isYes ? "hidden" : "relative"
                                        }
                                    >
                                        <span className="fl block text-gold mb-2">
                                            Количество гостей
                                        </span>
                                        <Select
                                            placeholder="Сколько вас будет"
                                            data={GUESTS_DATA}
                                            value={guests}
                                            onChange={(value) =>
                                                setGuests(value ?? "1")
                                            }
                                            allowDeselect={false}
                                            clearable={false}
                                            withCheckIcon={false}
                                            chevronColor="#C9A96E"
                                            variant="unstyled"
                                            classNames={{
                                                input:
                                                    "font-montserrat text-lg text-white placeholder:text-white/50 border-b border-white/60 focus:!border-gold pb-1.5 px-1 rounded-none cursor-pointer transition-colors duration-300",
                                                dropdown:
                                                    "border border-burgundy/15 bg-ivory shadow-[0_10px_30px_rgba(123,26,43,0.25)] rounded-md overflow-hidden",
                                                option:
                                                    "font-montserrat text-sm text-burgundy data-[combobox-active]:bg-burgundy/10 data-[combobox-selected]:bg-burgundy data-[combobox-selected]:text-white",
                                            }}
                                        />
                                    </div>

                                    {/* Пожелания по меню */}
                                    {/* <div className={!isYes ? "hidden" : ""}>
                                        <label
                                            className="fl block text-gold mb-2"
                                            htmlFor="gWish"
                                        >
                                            Пожелания по меню / аллергии
                                        </label>
                                        <textarea
                                            id="gWish"
                                            placeholder="Расскажите, если есть особенности питания"
                                            value={wish}
                                            onChange={(e) =>
                                                setWish(e.target.value)
                                            }
                                            className="w-full px-3.5 py-3 rounded-md bg-ivory/10 border border-white/40 focus:border-gold font-montserrat text-base text-white placeholder:text-white/50 transition duration-300 resize-y min-h-[90px] focus:outline-none focus:shadow-[0_0_0_3px_rgba(201,169,110,0.15)]"
                                        />
                                    </div> */}

                                    <button
                                        className="w-full justify-center bg-white/70 text-burgundy py-5 text-xl font-montserrat rounded-md font-semibold"
                                        type="submit"
                                    >
                                        Отправить ответ
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
