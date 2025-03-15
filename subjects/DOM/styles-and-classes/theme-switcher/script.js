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


const toggleButton = document.getElementById('toggle-theme');
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    document.body.classList.add(savedTheme);
    themeSelector.value = savedTheme;
});

function toggleBackgroundColor() {
    const lastClassApplied = [...document.body.classList].find((cls) => cls.includes("-theme"));
    if(document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", lastClassApplied || "default");
    } else {
        document.body.classList.remove(lastClassApplied);
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark-mode");
    }
}

toggleButton.addEventListener("click", toggleBackgroundColor);
