import { useEffect, useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { slides } from "../data/data";

function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [slides.length]);
    return (
        <div className="relative overflow-hidden mx-auto my-10 w-[65rem] h-101">
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map(slide => (
                    <div
                        key={slide.id}
                        className={`flex-shrink-0 w-full h-101 p-10 rounded-md flex items-center justify-between text-white font-semibold ${slide.bg}`}
                    >
                        <div
                            className="p-4 bg-white opacity-45 rounded-full text-black shadow-2xl text-3xl cursor-pointer"
                            onClick={() => {
                                if (currentSlide == 0) {
                                    return;
                                }
                                setCurrentSlide(currentSlide - 1);
                            }}><MdArrowBackIos /></div>
                        <div className="px-8 py-4 h-full">
                            <div className="flex items-center gap-4">
                                <img src={slide.image} alt="image" className="w-32 h-32 bg-blue-100 rounded-full mb-4" />
                                <div>
                                    <p className="text-3xl font-bold">{slide.name}</p>
                                    <p>{slide.role}</p>
                                </div>
                            </div>
                            {slide.bio}
                        </div>
                        <div
                            className="p-4 bg-white opacity-45 rounded-full text-black shadow-2xl text-3xl cursor-pointer"
                            onClick={() => {
                                if (currentSlide == 4) {
                                    return;
                                }
                                setCurrentSlide(currentSlide + 1);
                            }}><MdArrowForwardIos /></div>

                    </div>
                ))}
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, idx) => (
                    <button

                        key={idx}
                        onClick={() => {
                            setCurrentSlide(idx);
                        }}
                        className={` cursor-pointer w-3 h-3 rounded-full transition-colors ${idx === currentSlide ? 'bg-white' : 'bg-gray-400'
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Slider