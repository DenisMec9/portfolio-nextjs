import { loadFull } from "tsparticles";
import { useCallback } from "react";
import Particles from "react-tsparticles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        fpsLimit: 60,
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" } },
          modes: { repulse: { distance: 100, duration: 0.4 } },
        },
        particles: {
          color: { value: "#00ffe1" },
          links: { enable: true, color: "#00ffe1", distance: 150 },
          move: { enable: true, speed: 1 },
          number: { value: 40 },
          opacity: { value: 0.5 },
          size: { value: 2 },
        },
      }}
    />
  );
}
w