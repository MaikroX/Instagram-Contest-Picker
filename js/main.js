let wholeStuff = [];
let resultName = [];
let uniqueName = [];
let randomElements = [];
let luckyOnes = [];
let withDelete = [];

let chosenWinner;

function howManyWin() {
  chosenWinner = document.getElementById("howManyWin").value;
}
function init() {
  resetAll();
  checkEnable();
}

function check() {
  loadanimation();
  let search = document.getElementById("completeInput").value;
  search = search.toLowerCase();
  let words = search.split(" ");
  wholeStuff.push(words);
  let found = document.getElementById("resultOfNames");
  found.innerHTML = "";
  firstWinner = wholeStuff[0][0];
  resultName.push(firstWinner);
  searchUserWhoComment(search);
  deleteDublicates();
  checkRandomOrNot(found);
  document.getElementById("checkAll").classList.add("d-none");
}

function searchUserWhoComment(search) {
  for (let i = 0; i < wholeStuff[0].length; i++) {
    let name = wholeStuff[0][i];
    if (search.toLowerCase().includes(name && "Profilbild")) {
      name = wholeStuff[0][i + 1];
      resultName.push(name);
    }
  }
}

// This Function delete dublictates and slice the last letter from Names, cause its allways 's'
function deleteDublicates() {
  let unique = Array.from(new Set(resultName));
  let modified = unique.map((word) => {
    return word.slice(0, -1);
  });
  uniqueName.push(modified);
  checkIfUserIsRealUser();
}

function checkIfUserIsRealUser(modified) {
  for (let i = 0; i < uniqueName[0].length; i++) {
    if (uniqueName[0][i].length < 4) {
      uniqueName[0].splice(i, 1);
      i--;
    }
    console.log(modified);
  }
}

function writeWinner(found) {
  howManyWin();
  if (chosenWinner == 0) {
    alertChooseHowMany();
  } else {
    found.innerHTML += headlineHowManyTemp(chosenWinner);
    sortButtonTemp(found);
    if (uniqueName[0].length < chosenWinner) {
      alertChooseMaxPlayer();
      document.getElementById("checkAll").classList.remove("d-none");
    } else {
      theyAreWinner(found, chosenWinner, uniqueName);
    }
  }
}

function theyAreWinner(found, chosenWinner, uniqueName) {
  for (let i = 0; i < chosenWinner; i++) {
    let winner = uniqueName[0][i];
    luckyOnes.push(winner);
    found.innerHTML += /*html*/ `
  <div class="output-names">
    <div id="deleteName(${i})" class="names-inner" onclick="deleteName(${i})">${winner}</div>
  </div>

`;
  }
}

function checkEnable() {
  document.getElementById("checkAll").disabled = true;
  document.getElementById("completeInput").addEventListener("keyup", (e) => {
    //Check for the input's value
    if (e.target.value == "") {
      document.getElementById("checkAll").disabled = true;
    } else {
      document.getElementById("checkAll").disabled = false;
    }
  });
}

function checkRandomOrNot(found) {
  let choice = document.querySelector('input[name="luck"]:checked').value;
  console.log(choice);
  if (choice == "notRandom") {
    writeWinner(found);
  } else {
    getRandomElements();
  }
}

function getRandomElements() {
  randomElements = [...uniqueName[0]];
  getTheRandom(randomElements);
  howManyWin();
  console.log("REALLY RANDOM" + " " + randomElements);
  let found = document.getElementById("resultOfNames");
  found.innerHTML += headlineHowManyTemp(chosenWinner);
  sortButtonTemp(found);
  writeRandomWinner(found);
}

function getTheRandom(randomElements) {
  for (let i = 0; i < randomElements.length; i++) {
    const randomIndex = Math.floor(Math.random() * randomElements.length);
    const random = randomElements[i];
    randomElements[i] = randomElements[randomIndex];
    randomElements[randomIndex] = random;
  }
}

function writeRandomWinner(found) {
  for (let i = 0; i < chosenWinner; i++) {
    let winner = randomElements[i];
    luckyOnes.push(winner);
    found.innerHTML += writeRandomWinnerTemp(winner);
  }
}

function sortTheNames() {
  luckyOnes.sort();
  let radioButton = document.getElementById("notLucky");
  let found = document.getElementById("resultOfNames");
  found.innerHTML = "";
  found.innerHTML += headlineHowManyTemp(chosenWinner);
  sortNamesAfterKlick(radioButton, chosenWinner, found);
}

function sortNamesAfterKlick(radioButton, chosenWinner, found) {
  if ((radioButton.checked = true)) {
    for (let i = 0; i < chosenWinner; i++) {
      let uniqueNames = luckyOnes[i];
      found.innerHTML += sortedAfterKlickTemp(uniqueNames);
    }
  }
}

// this function deletes the name onclick if it is not allowed to win
function deleteName(i) {
  let deletedName = document.getElementById(`deleteName(${i})`).innerHTML;
  deletedName = document
    .getElementById(`deleteName(${i})`)
    .classList.add("d-none");
  let deleted = uniqueName[0].splice(i, 1);
  withDelete.push(deleted);
  console.log("Einer gelöscht" + " " + withDelete);
}

function alertChooseHowMany() {
  alert("Bitte wähle aus wie viele Gewinner ermittelt werden sollen.");
  document.getElementById("checkAll").classList.remove("d-none");
}

function alertChooseMaxPlayer() {
  alert(
    `Es gibt leider zu wenig Mitspieler. Wähle maximal` +
      ` ` +
      uniqueName[0].length +
      `.`
  );
}

function resetAll() {
  resetArrays();
  resetValues();
  checkEnable();
}

function resetArrays() {
  wholeStuff = [];
  resultName = [];
  uniqueName = [];
  luckyOnes = [];
  withDelete = [];
}

function resetValues() {
  document.getElementById("completeInput").value = "";
  document.getElementById("resultOfNames").innerHTML = "";
  document.getElementById("checkAll").classList.remove("d-none");
  document.getElementById("howManyWin").value = "1";
  let radioButton = document.getElementById("notLucky");
  radioButton.checked = true;
}

function loadanimation() {
  let animation = document.getElementById("matrix");
  animation.classList.remove("d-none");
  setTimeout(() => {
    animation.classList.add("d-none");
  }, 3000);
}
