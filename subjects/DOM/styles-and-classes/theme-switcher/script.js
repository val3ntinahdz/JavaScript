// dark theme switcher 
let themeSelector = document.getElementById('theme-selector');
console.log(themeSelector);

function changeBackgroundColor(event) {
    document.body.classList.remove("default", "blue-theme", "green-theme", "red-theme");
    document.body.classList.add(event.target.value);
    localStorage.setItem("theme", event.target.value); // https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
    console.log(themeSelector.value);
}

themeSelector.addEventListener("change", changeBackgroundColor);

document.body.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "default";
    document.body.classList.add(savedTheme);
    themeSelector.value = savedTheme;
});


const toggleButton = document.getElementById('toggle-theme');

function toggleBackgroundColor() {
    document.body.classList.remove("toggle-theme");
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark-mode");
}

toggleButton.addEventListener("click", toggleBackgroundColor);