import { useEffect, useState } from "react";
import AboutUs from "./AboutUs"

function Slider() {
    const slides = [
        { id: 1, content: "Welcome", bg: "bg-blue-500" },
        { id: 2, content: <AboutUs />, bg: "bg-green-500" },
        { id: 3, content: "Home", bg: "bg-purple-500" },
    ];
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
    }, [slides.length]);
    return (
        <div className="h-[85vh] flex items-center justify-center">
            <div className={`w-full h-full flex items-center justify-center text-white text-4xl font-bold ${slides[currentSlide].bg}`}>
                {slides[currentSlide].content}
            </div>
        </div>
    )
}

export default Slider