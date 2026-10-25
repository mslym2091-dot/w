const particlesContainer = document.getElementById("particles");
const dhikrButton = document.getElementById("dhikrButton");
const countElement = document.getElementById("count");

let count = 0;

// إنشاء الجزيئات المتحركة في الخلفية
function createParticles() {
  const symbols = [
    { text: "✦", type: "sparkle" },
    { text: "✧", type: "sparkle" },
    { text: "❋", type: "leaf" },
    { text: "·", type: "sparkle" },
    { text: "🍃", type: "leaf" }
  ];

  for (let i = 0; i < 32; i++) {
    const item = symbols[Math.floor(Math.random() * symbols.length)];
    const particle = document.createElement("span");

    particle.className = `particle ${item.type}`;
    particle.textContent = item.text;

    particle.style.left = `${Math.random() * 100}%`;
    particle.style.fontSize = `${10 + Math.random() * 15}px`;
    particle.style.animationDuration = `${12 + Math.random() * 20}s`;
    particle.style.animationDelay = `${-Math.random() * 25}s`;

    particlesContainer.appendChild(particle);
  }
}

createParticles();

// عداد التسبيح
dhikrButton.addEventListener("click", () => {
  count++;
  countElement.textContent = count;
});

// إعادة العداد إلى الصفر بالضغط المطول
dhikrButton.addEventListener("contextmenu", (event) => {
  event.preventDefault();

  const confirmed = confirm("هل تريد تصفير عداد الذكر؟");

  if (confirmed) {
    count = 0;
    countElement.textContent = count;
  }
});