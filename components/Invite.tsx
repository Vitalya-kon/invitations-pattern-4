import Image from "next/image";
import Reveal from "./Reveal";

export default function Invite() {
    return (
        // ВАЖНО: Я добавил bg-[#F5EDE4] для наглядности (кремовый цвет).
        // Если у тебя bg-cream-light задан в tailwind.config, используй его.
        <div className="bg-[#F5EDE4] rounded-xl">
            <Image
                src="/images/customer_img/17892998567e96.webp"
                alt="Фото пары"
                className="w-full aspect-16/16 object-cover grayscale"
                width={1920}
                height={1080}
            />

            {/* ... Твоя центральная бордовая секция остается без изменений ... */}
            <div className="relative text-white py-22 px-[35px] text-center z-0">
                <div className="absolute inset-0 z-[-1]">
                    <Image
                        src="/images/red-bg-2.webp"
                        alt="red-bg-2"
                        width={1920}
                        height={1080}
                        className="w-full h-full object-cover grayscale-[50%]"
                    />
                </div>
                <Reveal direction="up">
                    <p className="text-lg font-montserrat leading-relaxed opacity-90 mb-[25px]">
                        Вы не просто так получили это приглашение! В особенный для
                        нас день мы очень хотим, чтобы вы были рядом!
                    </p>
                    <p className="text-4xl font-Denistina leading-8 relative z-10 py-8">
                        Ждём вас с нетерпением
                    </p>
                </Reveal>
                <Image
                    src="/images/line-heart-white.png"
                    alt="линии"
                    width={1920}
                    height={177}
                    className="z-10 w-full object-contain relative py-8"
                />
                <Reveal direction="up" delay={0.1}>
                    <div className="text-xl pt-10 text-white relative z-10 tracking-[2px] uppercase">
                        С любовью, <br />
                        АНДРЕЙ И ВАЛЕРИЯ
                    </div>
                </Reveal>
            </div>

            {/* НИЖНЯЯ СЕКЦИЯ С ВОЛНОЙ И ФОТО */}
            <div className="pt-0">
                
                {/* Контейнер для фото, маски-волны и ленточки */}
                <div className="relative w-full">
                    
                    {/* 1. Само фото (оно на заднем фоне контейнера) */}
                    <Image
                        src="/images/customer_img/1789298633eb59.webp"
                        alt="Фото пары"
                        className="w-full aspect-[4/5] object-cover"
                        width={1920}
                        height={1080}
                    />
                    
                    {/* 2. SVG Маска с текстом (накладывается поверх верха фото) */}
                    {/* Класс text-[#F5EDE4] должен совпадать с цветом фона пригласительного! */}
                    <div className="absolute top-0 left-0 w-full text-[#F5EDE4] pointer-events-none">
                        <svg viewBox="0 0 1000 250" className="w-full h-auto block">
                            <defs>
                                {/* Идеально подобранная кривая для эффекта с макета */}
                                <path id="waveMask" d="M 0 120 C 350 260, 650 40, 1000 160" />
                            </defs>
                            
                            {/* Эта фигура заливается цветом фона и закрывает собой небо на фото */}
                            <path d="M 0 0 L 1000 0 L 1000 160 C 650 40, 350 260, 0 120 Z" fill="currentColor" />
                            
                            {/* Красная линия */}
                            <use href="#waveMask" fill="none" stroke="#7A1D27" strokeWidth="5" />
                            
                            {/* Текст */}
                            <text fontFamily="sans-serif" fontSize="40" fill="#5a5a5a" dy="-15">
                                {/* startOffset="45%" немного сдвигает текст влево, чтобы он не упирался в ленту */}
                                <textPath href="#waveMask" startOffset="45%" textAnchor="middle">
                                    Любовь смотрит - не глазами, а сердцем
                                </textPath>
                            </text>
                        </svg>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
}