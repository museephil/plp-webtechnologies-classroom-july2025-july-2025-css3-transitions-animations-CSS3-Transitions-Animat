// Dark mode detection
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
}
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (event.matches) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
});

/* ---------- Part 2: JavaScript Functions ---------- */
function calcArea(width, height) {
    return width * height;
}

let globalVar = "I'm global";

function scopeExample() {
    let localVar = "I'm local";
    console.log(globalVar);
    console.log(localVar);
}

document.getElementById("calcBtn").addEventListener("click", () => {
    let width = 10, height = 5;
    let area = calcArea(width, height);
    document.getElementById("result").textContent =
        `The area of ${width} x ${height} is ${area}.`;
    scopeExample();
});

/* ---------- Part 3: JS + CSS Combined ---------- */
// 1. Animate box
document.getElementById("animateBtn").addEventListener("click", () => {
    document.querySelector(".js-box").classList.toggle("bounce");
});

// 2. Flip card
document.getElementById("flipBtn").addEventListener("click", () => {
    document.querySelector(".card").classList.toggle("flip");
});

// 3. Loader
const loadBtn = document.getElementById("loadBtn");
const loader = document.querySelector(".loader");
let loading = false;
loadBtn.addEventListener("click", () => {
    loading = !loading;
    if (loading) {
        loader.style.display = "block";
        loader.classList.add("spin");
        loadBtn.textContent = "Stop Loading";
    } else {
        loader.style.display = "none";
        loader.classList.remove("spin");
        loadBtn.textContent = "Start/Stop Loading";
    }
});

// 4. Modal
const popupBtn = document.getElementById("popupBtn");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

popupBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
});

// Enhanced interactions
document.querySelector(".js-box").addEventListener("click", () => {
    document.querySelector(".js-box").classList.toggle("bounce");
});

document.querySelector(".card").addEventListener("click", () => {
    document.querySelector(".card").classList.toggle("flip");
});

// Keyboard accessibility
document.querySelector(".card").addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        document.querySelector(".card").classList.toggle("flip");
    }
});
