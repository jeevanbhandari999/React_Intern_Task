import { useEffect, useState } from "react";
import AboutUs from "./AboutUs"

function Slider() {
    const slides = [
        { id: 1, content: "Welcome" },
        { id: 2, content: <AboutUs /> },
        { id: 3, content: "Home" },
    ];
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
    }, [slides.length]);
    return (
        <div>
            <div>
                {slides[currentSlide].content}
            </div>
        </div>
    )
}

export default Slider