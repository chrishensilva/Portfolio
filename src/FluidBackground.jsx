import React, { useEffect, useRef } from 'react';
import initFluid from './webgl-fluid';

const FluidBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (canvasRef.current) {
            // Store the initial client dimensions to prevent 0x0 errors on first render
            const canvas = canvasRef.current;
            
            try {
                initFluid(canvas);
            } catch (err) {
                console.error("Fluid simulation failed to initialize:", err);
            }
        }
    }, []);

    return (
        <canvas 
            ref={canvasRef} 
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'auto'
            }}
        />
    );
};

export default FluidBackground;
