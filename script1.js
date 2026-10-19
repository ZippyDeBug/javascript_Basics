//this is not in use, but was part of an exercise to illustrated external scripts being used in html. FYI is was a script module in the head content. ;-) <script type="module" src=""></script>

function createParagraph() {
  const para = document.createElement("p");
  para.textContent = "You clicked the button!";
  document.body.appendChild(para);
}

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}

