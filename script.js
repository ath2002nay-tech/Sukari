/* TYPEWRITER EFFECT */
const text = "Hey Hadija… I made this just for you ❤️";
let index = 0;
const speed = 70;
const typewriter = document.getElementById("typewriter");

function typeEffect() {
  if (index < text.length) {
    typewriter.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}
typeEffect();

/* SCROLL FADE-IN ANIMATION */
const sections = document.querySelectorAll(".section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });
sections.forEach(section => observer.observe(section));

/* COUNTDOWN TO VALENTINE */
const countdownEl = document.getElementById("countdown");
const valentineDate = new Date("Feb 14, 2026 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = valentineDate - now;

  if (distance < 0) {
    countdownEl.textContent = "Happy Valentine’s Day ❤️";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

/* NO BUTTON RUNS AWAY */
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", () => {
  const container = document.querySelector(".buttons");
  const containerRect = container.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = containerRect.width - btnRect.width;
  const maxY = containerRect.height - btnRect.height;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

/* YES BUTTON ACTION */
const yesBtn = document.getElementById("yesBtn");
const afterYesMessage = document.getElementById("afterYesMessage");

yesBtn.addEventListener("click", () => {
  afterYesMessage.textContent = "I already knew your answer 😌❤️ You just made me the happiest person alive.";
  afterYesMessage.classList.remove("hidden");
  launchConfetti();
  showPopup();
});

/* CONFETTI EFFECT */
function launchConfetti() {
  const duration = 2000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({ particleCount: 6, angle: 60, spread: 55, origin: { x: 0 } });
    confetti({ particleCount: 6, angle: 120, spread: 55, origin: { x: 1 } });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

/* POPUP CONTROL */
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

function showPopup() {
  popup.classList.remove("hidden");
}

closePopup.addEventListener("click", () => {
  popup.classList.add("hidden");
});
