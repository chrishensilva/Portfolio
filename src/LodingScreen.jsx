import { useEffect, useState } from 'react';
import './LodingScreen.css';

function LoadingScreen({ onFinished }) {
    const [progress, setProgress] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    // Trigger fade out then notify parent
                    setTimeout(() => {
                        setFadeOut(true);
                        setTimeout(onFinished, 600);
                    }, 300);
                    return 100;
                }
                return prev + Math.random() * 12;
            });
        }, 80);

        return () => clearInterval(interval);
    }, [onFinished]);

    const clampedProgress = Math.min(Math.round(progress), 100);

    return (
        <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
            <div className="loading-content">
                <div className="loading-logo">
                    <span className="loading-logo-text">CS</span>
                </div>

                <div className="loading-words-wrapper">
                    <p className="loading-label">loading</p>
                    <div className="loading-words">
                        <span className="loading-word">Portfolio</span>
                        <span className="loading-word">Projects</span>
                        <span className="loading-word">Expertise</span>
                        <span className="loading-word">Design</span>
                        <span className="loading-word">Portfolio</span>
                    </div>
                </div>

                <div className="loading-bar-wrapper">
                    <div
                        className="loading-bar-fill"
                        style={{ width: `${clampedProgress}%` }}
                    />
                </div>

                <span className="loading-percent">{clampedProgress}%</span>
            </div>
        </div>
    );
}

export default LoadingScreen;