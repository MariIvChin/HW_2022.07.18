const inputName = document.getElementById("input-name");
const inputAge = document.getElementById("input-age");
const inputColor = document.getElementById("input-color");
const inputCountry = document.getElementById("input-country");

const inputMale = document.getElementById("input-male");
const inputFemale = document.getElementById("input-female");

const userCard = document.getElementById("user-card");

function handleSubmitButton() {
  if (inputName.value.length <= "2") {
    alert('Name must to be more than 2 char in the field "name"!');
    return;
  } else if (inputAge.value <= "0") {
    alert('Please set number more than 0 in the field "age"!');
    return;
  } else if (inputCountry.value == "") {
    alert("We must to know where you live! Please choose your country!");
    return;
  } else if (getUserGenderToUserCard() == undefined) {
    alert("Please set your gender for complete your info for us!");
    return;
  }
  renderUserCardInHTML(
    inputColor.value,
    inputName.value,
    inputAge.value,
    inputCountry.value,
    getUserGenderToUserCard()
  );
  resetInputs();
}

function getUserGenderToUserCard() {
  if (inputMale.checked) {
    return "Female";
  } else if (inputFemale.checked) {
    return "Male";
  } else {
    return;
  }
}

function renderUserCardInHTML(color, username, age, country, gender) {
  userCard.innerHTML +=
    `<div>
    <h4>User Card</h4>
  <div class="card" style="width: 18rem; background: ` +
    color +
    `;">
    <div class="card-header"><strong>` +
    username +
    ` (` +
    age +
    `)` +
    `</strong></div>
    <ul class="list-group list-group-flush" style="background: ` +
    color +
    `;">
      <li class="list-group-item" style="background: ` +
    color +
    `;">Name: ` +
    username +
    `</li>
      <li class="list-group-item" style="background: ` +
    color +
    `;">Age: ` +
    age +
    `</li>
      <li class="list-group-item" style="background: ` +
    color +
    `;">Country: ` +
    country +
    `</li>
      <li class="list-group-item" style="background: ` +
    color +
    `;">Gender: ` +
    gender +
    `</li>
    </ul>
  </div>
  </div>`;
}

function resetInputs() {
  inputName.value = "";
  inputAge.value = "";
  inputCountry.value = "";
  inputColor.value = "#C9FCFD";
  inputFemale.checked = false;
  inputMale.checked = false;
}
