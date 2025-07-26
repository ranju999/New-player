// Dark/Light Toggle
document.getElementById('modeToggle').addEventListener('change', function () {
  document.body.classList.toggle('dark');
});

// tsParticles Config
tsParticles.load("tsparticles", {
  fullScreen: { enable: false },
  background: { color: "transparent" },
  particles: {
    number: { value: 80 },
    size: { value: 3 },
    move: { enable: true, speed: 1 },
    links: { enable: true, color: "#00f0ff", distance: 150 },
    color: { value: "#00ffff" },
  },
  interactivity: {
    events: { onhover: { enable: true, mode: "repulse" } },
    modes: { repulse: { distance: 100 } },
  }
});
