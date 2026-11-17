const list = document.querySelector("ul");
const btn = document.querySelector("button");
const input = document.querySelector("input");

btn.addEventListener("click", (event) => {
    event.preventDefault();
    const inputValue = input.value;
    input.value = "";

    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listButton = document.createElement("button");

    listItem.appendChild(listText);
    listText.textContent = inputValue;
    listItem.appendChild(listButton);
    listButton.textContent = "Delete";
    list.appendChild(listItem);

    listButton.addEventListener("click", () => {
        listItem.remove()
    });

    input.focus();
});

