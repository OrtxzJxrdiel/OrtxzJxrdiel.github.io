// tsParticles config
tsParticles.load("particles-js", {
  fullScreen: { enable: false },
  particles: {
    number: { value: 60 },
    color: { value: "#00ff99" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      outModes: { default: "bounce" },
    },
    links: {
      enable: true,
      distance: 150,
      color: "#00ff99",
      opacity: 0.4,
      width: 1,
    },
  },
  background: { color: "transparent" },
});

// Countdown logic
const launchDate = new Date("2026-08-11T00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = launchDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0"
  );
  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0"
  );
}, 1000);

// Theme toggle
document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("light");
});

function mostrarMensaje() {
  const mensaje = document.getElementById("mensaje");
  mensaje.textContent = "¡Gracias por suscribirte! Pronto recibirás noticias.";
  mensaje.style.display = "block"; 
  mensaje.style.color = "#00ff99";
  mensaje.style.fontSize = "1.2em";
  mensaje.style.marginTop = "10px";
  mensaje.style.textAlign = "center";
  mensaje.style.transition = "opacity" + " 0.5s ease-in-out, transform 0.5s ease-in-out";
  mensaje.style.transform = "translateY(0)";
  mensaje.style.opacity = "1";
  mensaje.style.transition = "opacity 0.5s ease-in-out, transform 0.5s ease-in-out, visibility 0.5s ease-in-out";
  mensaje.style.transform = "translateY(0)";
  mensaje.style.visibility = "visible";
  setTimeout(() => {
    mensaje.style.opacity = "0";
    mensaje.style.transform = "translateY(-20px)";
    mensaje.style.visibility = "hidden";
  }, 3000); // Oculta el mensaje después de 3 segundos
}
