const ul = document.querySelector("ul")
const btn = document.querySelector("button")
const input = document.querySelector("input")
let inputValue = ""

btn.addEventListener("click", (event) => {
    event.preventDefault();
    inputValue = input.value
    input.value = ""

    const newList = document.createElement("li");
    const newSpan = document.createElement("span");
    const newButton = document.createElement("button");

    ul.appendChild(newList);

    newList.appendChild(newSpan);
    newSpan.textContent =`${inputValue}`

    newList.appendChild(newButton);
    newButton.textContent = "Delete";
    newButton.addEventListener("click", () => {
    newList.remove()});
    
    input.focus()
    });

