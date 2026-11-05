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




//Camelise words exercise:

function capitaliseWord(item, i, array) {
  if (i > 0) {
        array[i] = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
      }
}

  function camelize(word) {
    let arr = word.split("-");
    arr.forEach(capitaliseWord);
    return arr.join("");
  }


  //OR (ignore that it is called camelise2!!)

  function camelize2(word) {
    let splits =  word.split("-")
    for (i = 1; i >= splits.length; i++) {
      splits[i] = splits[i].charAt(0).toUpperCase() + splits[i].slice(1).toLowerCase();
      }
    return splits.join("");
  }

  // OR

function camelize3(str) {
  return str
    .split('-') 
    // splits 'my-long-word' into array ['my', 'long', 'word']
    
    .map(
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      // capitalizes first letters of all array items except the first one,converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
    )
    
    .join('');
    // joins ['my', 'Long', 'Word'] into 'myLongWord'
  }

/*
const camelize = str => {return str.split("-")
.map((word,i) => {if (i >= 1) {return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()}
else {return word}})
.join("");}
*/

/*
function camelize (str) {
return str
.split("-")
.map((word, i) => i >= 1 ? word[0].toUpperCase() + word.slice(1) : word)
.join("");
} */



  // Exercise Filter Range

  let arr = [5, 3, 8, 1 ]

???

  let filtered = filterRanger(arr, 1, 4);