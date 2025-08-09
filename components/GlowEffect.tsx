"use client";
import React, { useState, useEffect } from 'react';

export default function GlowEffect() {
    const [mousePosition, setMousePosition] = useState({ x: -200, y: -200 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
                zIndex: 2, pointerEvents: 'none',
            }}
        />
    );
}
