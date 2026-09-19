import Reveal from "./Reveal";

export default function Timeline() {
    return (
        <div className="relative pt-5 pb-10">
            {/* SVG wave line */}
            <svg
                className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
                viewBox="0 0 400 480"
                preserveAspectRatio="none"
            >
                <path
                    d="M 200 0 C 100 80, 300 120, 200 200 C 100 280, 300 320, 200 400 C 150 450, 250 480, 200 480"
                    fill="none"
                    stroke="#7b1a2b"
                    strokeWidth="2"
                    strokeDasharray="8 4"
                />
            </svg>

            <div className="relative z-10">
                {/* Item 1 */}
                <Reveal direction="right" className="mb-10 pl-3">
                    <div className="max-w-38">
                        <div className="font-marck text-[28px] text-burgundy">
                            14:30
                        </div>
                        <div className="font-Denistina text-3xl text-text-dark my-[2px]">
                            Сбор гостей
                        </div>
                        <div className="text-sm font-montserrat text-gray-700 leading-relaxed max-w-55">
                            Время пролетит незаметно за играми и общением с другими
                            гостями.
                        </div>
                    </div>
                </Reveal>

                {/* Item 2 */}
                <Reveal direction="left" className="mb-[40px] pl-0 pr-3 text-right flex justify-end">
                    <div className="max-w-38">
                        <div className="font-marck text-[28px] text-burgundy">
                            15:00
                        </div>
                        <div className="font-Denistina text-3xl text-text-dark my-[2px]">
                            Церемония
                        </div>
                        <div className="text-sm font-montserrat text-gray-700  leading-relaxed max-w-55 ml-auto">
                            На всякий случай приготовьте носовые платочки для
                            трогательного момента.
                        </div>
                    </div>
                </Reveal>

                {/* Item 3 */}
                <Reveal direction="right" className="pl-3">
                    <div className="max-w-42">
                        <div className="font-marck text-[28px] text-burgundy">
                            17:00
                        </div>
                        <div className="font-Denistina text-3xl text-text-dark my-[2px]">
                            Начало банкета
                        </div>
                        <div className="text-sm font-montserrat text-gray-700 leading-relaxed max-w-[220px]">
                            Вкусные блюда и веселая программа от нашего крутого
                            ведущего.
                        </div>
                    </div>
                </Reveal>
                {/* Item 4 */}
                <Reveal direction="left" className="mb-[40px] pl-0 pr-3 text-right flex justify-end">
                    <div className="max-w-38">
                        <div className="font-marck text-[28px] text-burgundy">
                            23:00
                        </div>
                        <div className="font-Denistina text-3xl text-text-dark my-[2px]">
                            Салют
                        </div>
                        <div className="text-sm font-montserrat text-gray-700  leading-relaxed max-w-55 ml-auto">
                            Праздничный салют в честь молодоженов
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>
    );
}