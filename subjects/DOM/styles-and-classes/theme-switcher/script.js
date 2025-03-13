// dark theme switcher 
let themeSelector = document.getElementById('theme-selector');
console.log(themeSelector);

function changeBackgroundColor(event) {
    document.body.classList.remove("default", "blue-theme", "green-theme", "red-theme");
    document.body.classList.add(event.target.value);
    localStorage.setItem("theme", event.target.value);
}

themeSelector.addEventListener("change", changeBackgroundColor);