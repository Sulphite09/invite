let currentIndex = 0;
const container = document.querySelector('.container');
const cards = document.querySelectorAll('.card');

function updateSection(index) {
  container.style.transform = `translateX(-${index * 100}vw)`;
  cards.forEach((card, i) =>
    card.classList.toggle('active', i === index)
  );
}

// Desktop navigation
window.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') {
    currentIndex = Math.min(currentIndex + 1, cards.length - 1);
    updateSection(currentIndex);
  }
  if (e.key === 'ArrowLeft') {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateSection(currentIndex);
  }
});

// Mobile swipe
let startX = 0;

window.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});

window.addEventListener('touchend', e => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) {
    currentIndex = Math.min(currentIndex + 1, cards.length - 1);
  }
  if (endX - startX > 50) {
    currentIndex = Math.max(currentIndex - 1, 0);
  }
  updateSection(currentIndex);
});

// Floating emojis
const emojis = ["🎂","🎈","✨","🎉","💖","🧁"];

function createEmoji() {
  const emoji = document.createElement("div");
  emoji.className = "emoji";
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.animationDuration = 8 + Math.random() * 10 + "s";
  emoji.style.fontSize = 16 + Math.random() * 24 + "px";
  document.body.appendChild(emoji);

  setTimeout(() => emoji.remove(), 20000);
}

setInterval(createEmoji, 400);
