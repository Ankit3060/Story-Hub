import React, { useState, useEffect } from 'react';

import { FaPlay, FaPause, FaStop } from 'react-icons/fa';

const TextToSpeech = ({ text, isPaused, setIsPaused }) => {
    const [utterance, setUtterance] = useState(null);

    useEffect(() => {
        const synth = window.speechSynthesis;
        const u = new SpeechSynthesisUtterance(text);
        setUtterance(u);

        return () => {
            synth.cancel();
        };
    }, [text]);

    const handlePlay = () => {
        const synth = window.speechSynthesis;
        
        if (isPaused) {
            synth.resume();
        } else {
            synth.speak(utterance);
        }

        setIsPaused(false);
    };

    const handlePause = () => {
        const synth = window.speechSynthesis;
        synth.pause();
        setIsPaused(true);
    };

    const handleStop = () => {
        const synth = window.speechSynthesis;
        synth.cancel();
        setIsPaused(false);
    };

    return (
        <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={handlePlay}>
                {isPaused ? <FaPlay /> : <FaPlay />} {isPaused ? "Resume" : "Play"}
            </button>
            <button onClick={handlePause}>
                <FaPause /> Pause
            </button>
            <button onClick={handleStop}>
                <FaStop /> Stop
            </button>
        </div>
    );
};

export default TextToSpeech;
