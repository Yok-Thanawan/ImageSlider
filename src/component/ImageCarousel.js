import { useState} from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./ImageCarousel.css";
import Dots from "./Dots";

const CarouselItem = ({ slide }) => {
    return (
        <div className="carousel-item">
            <img src={slide} />
        </div>
    )
}

export default function ImageCarousel({ slides }) {
    const [currentSlide, setCurrentSlide] = useState(0)

    const prev = () => {
        const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1
        setCurrentSlide(index)
    }

    const next = () => {
        const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0
        setCurrentSlide(index)
    }

    const goToSlide = (index) => {
        setCurrentSlide(index)
    }

    return (
        <div className="carousel">
            <div
                className="carousel-inner"
                style={{ transform: `translateX(${-currentSlide * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <CarouselItem slide={slide.url} key={index} />
                ))}
            </div>
            <Dots slides={slides} currentIndex={currentSlide} goTo={goToSlide}/>
            <button className="carouselNavigate prev" onClick={prev}><ArrowBackIcon /></button>
            <button className="carouselNavigate next" onClick={next}><ArrowForwardIcon/></button>
        </div>
    )
}

