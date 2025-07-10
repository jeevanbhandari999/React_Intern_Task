import { useEffect, useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

import AboutUs from "./AboutUs"

function Slider() {
    const slides = [
        { id: 1, content: "Welcome to MyBrand", bg: "bg-blue-500" },
        { id: 2, content: "Discover Our Services", bg: "bg-green-500" },
        { id: 3, content: "Join Us Today", bg: "bg-purple-500" },
        { id: 4, content: "Join Us Today 4", bg: "bg-stone-500" },
        { id: 5, content: "Join Us Today 5", bg: "bg-cyan-500" },
        { id: 6, content: "Join Us Today 6", bg: "bg-amber-500" },
    ];
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
                        className={`flex-shrink-0 w-full h-101 p-10 rounded-md flex items-center justify-between text-white text-3xl font-semibold ${slide.bg}`}
                    >
                        <div className="p-4 bg-white opacity-45 rounded-full text-black shadow-2xl cursor-pointer" onClick={() => setCurrentSlide(currentSlide - 1)}><MdArrowBackIos /></div>
                        {slide.content}
                        <div className="p-4 bg-white opacity-45 rounded-full text-black shadow-2xl cursor-pointer" onClick={() => setCurrentSlide(currentSlide + 1)}><MdArrowForwardIos /></div>

                    </div>
                ))}
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {/* <div onClick={() => setCurrentSlide(currentSlide - 1)}>prev</div> */}
                {slides.map((_, idx) => (
                    <button

                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={` cursor-pointer w-3 h-3 rounded-full transition-colors ${idx === currentSlide ? 'bg-white' : 'bg-gray-400'
                            }`}
                    />
                ))}
                {/* <div onClick={() => setCurrentSlide(currentSlide + 1)}>Next</div> */}
            </div>
        </div>
    )
}

export default Slider