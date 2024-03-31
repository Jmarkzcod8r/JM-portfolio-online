'use client'

import React, { useState, useEffect } from 'react';

const Typewriter = ({ text = `Hi! I'm Jay Mark Gutierrez. Full Stack Developer `, initialDelay = 200 }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [delay, setDelay] = useState(initialDelay);

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentIndex < text.length) {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            } else {
                setCurrentText(''); // Reset current text when animation completes
                setCurrentIndex(0); // Reset current index
                setDelay(initialDelay); // Reset delay after animation completes
            }
        }, delay);

        return () => clearInterval(interval); // Cleanup function to clear the interval
    }, [currentIndex, delay, text, initialDelay]);

    return (
        <div className='opacity-100 h-[3.5em]'>
            <h1
                className="text-3xl font-bold text-center mt-8 font-serif" // Change font here
                dangerouslySetInnerHTML={{ __html: currentText }}
            />

        </div>
    );
};

export default Typewriter;
