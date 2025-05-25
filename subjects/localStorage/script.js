// local storage & session storage 
// local storage is a javascript built-in API where we can store data, that is saved in the browser... 
// the data will store only in strings, so, in case we want to save anything alse, stringify it! (JSON.stringify())

// here, we make some proofs to persist data in the browser

// this exercise is from: https://javascript.info/localstorage

const textArea = document.getElementById("text-area");
// if (!textArea.value) return;
textArea.value = localStorage.getItem("User input");

textArea.addEventListener("input", () => { 
    localStorage.setItem("User input", textArea.value);
})

const deleteButton = document.getElementById("delete-button");
deleteButton.addEventListener("click", () => {
    localStorage.clear();
    if(localStorage.length === 0) textArea.value = '';

    alert("Cleared text!");
});