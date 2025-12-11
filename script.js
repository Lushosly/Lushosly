// Typewriter Effect Data
const texts = ["Intelligent Systems.", "AI Agents.", "Interactive Simulations.", "Fintech Solutions.", "Automation Pipelines.", "Strategic AI."];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

// IIFE for Typewriter
(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  const typeWriterElement = document.getElementById("typewriter");
  if (typeWriterElement) {
    typeWriterElement.textContent = letter;
  }

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    // Pause before deleting or moving to next word (simplified for loop)
    setTimeout(type, 2000); 
  } else {
    setTimeout(type, 100);
  }
})();

// Hamburger Menu Logic
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    const expanded = hamburger.getAttribute("aria-expanded") === "true" || false;
    hamburger.setAttribute("aria-expanded", !expanded);
  });
}

// Close mobile menu when a link is clicked
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// Smooth Scroll for older browsers (optional, CSS scroll-behavior usually handles this)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
