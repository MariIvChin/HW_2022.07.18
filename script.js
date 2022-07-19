let inputContainer = document.getElementById("inputs-container");
let inputName = document.getElementById("input-name");
let inputAge = document.getElementById("input-age");
let inputColor = document.getElementById("input-color");
let inputCountry = document.getElementById("input-country");

let inputMale = document.getElementById("input-male");
let inputFemale = document.getElementById("input-female");

let userCard = document.getElementById("user-card");
console.dir(inputContainer);

function setInputsInfoToUserCard() {
  userCard.style.backgroundColor = inputColor.value;
  userCard.children[1].children[0].style.background = inputColor.value;
  userCard.children[1].children[1].style.background = inputColor.value;
  userCard.children[1].children[2].style.background = inputColor.value;
  userCard.children[1].children[3].style.background = inputColor.value;
  userCard.children[1].children[0].innerHTML = "Name: " + inputName.value;
  userCard.children[1].children[1].innerHTML = "Age: " + inputAge.value;
  userCard.children[1].children[2].innerHTML = "Country: " + inputCountry.value;

  if (document.getElementById("input-male").checked) {
    userCard.children[1].children[3].innerHTML = "Gender: male";
  } else if (document.getElementById("input-female").checked) {
    userCard.children[1].children[3].innerHTML = "Gender: female";
  }
  inputName.value = "";
  inputAge.value = "";
  inputCountry.value = inputCountry.children[0].innerHTML;
  inputColor.value = "#C9FCFD";
  inputFemale.checked = "true";
}

// if ((inputContainer.children[21].checked = "true")) {
//   console.dir("true");
// } else {
//   if ((inputContainer.children[21].checked = "false")) {
//     console.dir("false");
//   }
// }

// if (inputMale.checked) {
//   console.dir("Gender: Male");
// } else if (inputFemale.checked) {
//   console.dir("Gender: Female");
// }

if (document.getElementById("input-male").checked) {
  console.dir("Male");
} else if (document.getElementById("input-female").checked) {
  console.dir("Female");
}

console.dir(inputMale.checked);
