import Image from "next/image";
import Reveal from "./Reveal";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative text-white">
            {/* Волна сверху: бордовый «поднимается» из футера на фото */}
            <div className="absolute bottom-full -mb-1 left-0 w-full text-cream pointer-events-none z-20">
                <svg
                    viewBox="0 0 1000 250"
                    className="w-full h-auto block"
                >
                    <defs>
                        <path
                            id="waveFooter"
                            d="M 0 120 C 350 260, 650 40, 1000 160"
                        />
                    </defs>
                    {/* Заливка ниже кривой — продолжает бордовый фон футера вверх */}
                    <path
                        d="M 0 250 L 1000 250 L 1000 160 C 650 40, 350 260, 0 120 Z"
                        fill="currentColor"
                    />
                    {/* Золотая линия по кривой */}
                    <use
                        href="#waveFooter"
                        fill="none"
                        stroke="#C9A96E"
                        strokeWidth="5"
                    />
                </svg>
            </div>

            {/* Основная часть футера */}
            <div className="relative bg-cream pt-16 pb-10 px-6 text-center overflow-hidden">
                
                <Reveal direction="up" className="relative z-10">
                    {/* Монограмма */}
                    <div className="font-Denistina text-6xl leading-none mb-3 text-burgundy">
                        А&nbsp;&amp;&nbsp;В
                    </div>

                    <div className="text-lg tracking-[3px] uppercase font-montserrat text-gray-600">
                        Андрей &amp; Валерия
                    </div>

                    {/* Разделитель */}
                    <Image
                        src="/images/line-heart-clipart-xl.png"
                        alt="линии"
                        width={1920}
                        height={177}
                        className="z-10 w-full object-contain py-6"
                    />

                    <div className="font-cormorant text-2xl text-burgundy font-semibold">
                        8 августа
                    </div>
                    <div className="font-montserrat text-sm text-gray-600 mt-2">
                        Ресторан &laquo;Аргунь&raquo;, Краснокаменск
                    </div>

                    <p className="font-Denistina text-3xl text-burgundy mt-8 leading-9">
                        Спасибо, что будете
                        <br />
                        с нами в этот день
                    </p>
                </Reveal>
            </div>
        </footer>
    );
}
