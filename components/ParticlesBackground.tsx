"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => setInit(true));
    }, []);

    const options: ISourceOptions = useMemo(() => ({
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 60, duration: 0.4 } },
        },
        particles: {
            color: { value: "#fff" },
            links: { color: "#fff", distance: 150, enable: true, opacity: 0.1, width: 1 },
            move: { enable: true, speed: 0.5 },
            number: { density: { enable: true }, value: 80 },
            opacity: { value: 0.2 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
    }), []);

    return init ? <Particles id="tsparticles" options={options} /> : null;
};
export default ParticlesBackground;
