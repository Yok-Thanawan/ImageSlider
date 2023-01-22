import React from 'react'

export default function Dots({ slides, currentIndex, goTo }) {
    return (
        <div className="dots">
            {slides.map((_, index) => (
                <button
                    className={`dot-item${currentIndex === index ? ' active' : ''}`}
                    onClick={() => goTo(index)}
                ></button>
            ))}
        </div>
    );
}