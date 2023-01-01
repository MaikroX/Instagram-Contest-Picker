let wholeStuff = [];
let resultName = [];
let uniqueName = [];
let randomElements = [];
let luckyOnes = [];

let chosenWinner;

function wichIsWinner() {
  chosenWinner = document.getElementById("howManyWin").value;
}
function init() {
  checkEnable();
}

function check() {
  let search = document.getElementById("completeInput").value;
  search = search.toLowerCase();
  let words = search.split(" ");
  wholeStuff.push(words);
  let found = document.getElementById("resultOfNames");
  found.innerHTML = "";
  firstWinner = wholeStuff[0][0];
  resultName.push(firstWinner);
  document.getElementById("checkAll").classList.add("d-none");
  searchUserWhoComment(search);
  deleteDublicates();
  // writeWinner(found);
  // getRandomElements();
  checkRandomOrNot(found);
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

function deleteDublicates() {
  let unique = Array.from(new Set(resultName));
  uniqueName.push(unique);
  console.log(unique);
}

function writeWinner(found) {
  wichIsWinner();
  if (chosenWinner == 0) {
    alert("Bitte wähle aus wie viele Gewinner ermittelt werden sollen.");
    document.getElementById("checkAll").classList.remove("d-none");
  } else {
    found.innerHTML += /*html*/ `
  <div class="how-many-win">Anzahl Gewinner: <span >${chosenWinner}</span></div>
    `;
    if (uniqueName[0].length < chosenWinner) {
      alert(
        `Es gibt leider zu wenig Mitspieler. Wähle maximal` +
          ` ` +
          uniqueName[0].length +
          `.`
      );
      document.getElementById("checkAll").classList.remove("d-none");
    } else {
      for (let i = 0; i < chosenWinner; i++) {
        let winner = uniqueName[0][i];
        luckyOnes.push(winner);
        winner = winner.substring(0, winner.length - 1);
        found.innerHTML += /*html*/ `
      <div>
        <div>${winner}</div>
      </div>

    `;
      }
    }
    sortNames(found);
  }
}

function reset() {
  document.getElementById("completeInput").value = "";
  document.getElementById("resultOfNames").innerHTML = "";
  document.getElementById("checkAll").classList.remove("d-none");
  document.getElementById("howManyWin").value = "1";
  let radioButton = document.getElementById("notLucky");
  radioButton.checked = true;
  wholeStuff = [];
  resultName = [];
  uniqueName = [];
  luckyOnes = [];
  checkEnable();
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

//#endregion
// Beispiel Post
// https://www.instagram.com/p/CmHyd1Ho2oh/

// TEST ob Random Elements funktioniert //

function getRandomElements() {
  randomElements = [...uniqueName[0]];
  for (let i = 0; i < randomElements.length; i++) {
    const randomIndex = Math.floor(Math.random() * randomElements.length);
    const temp = randomElements[i];
    randomElements[i] = randomElements[randomIndex];
    randomElements[randomIndex] = temp;
  }
  wichIsWinner();
  console.log("REALLY RANDOM" + " " + randomElements);
  let found = document.getElementById("resultOfNames");
  found.innerHTML += /*html*/ `
  <div class="how-many-win">Anzahl Gewinner: <span >${chosenWinner}</span></div>
  `;
  for (let i = 0; i < chosenWinner; i++) {
    let winner = randomElements[i];
    winner = winner.substring(0, winner.length - 1);
    found.innerHTML += /*html*/ `
  <div>
    <div>${winner}</div>
  </div>
`;
  }
  sortNames(found);
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

function sortNames(found) {
  found.innerHTML += /*html*/ `
  <div class="sort" id="sortIt"><button onclick="sortTheNames()">Sortieren</button></div>
      `;
}

function sortTheNames() {
  luckyOnes.sort();
  let radioButton = document.getElementById("notLucky");
  let found = document.getElementById("resultOfNames");
  found.innerHTML = "";
  found.innerHTML += /*html*/ `<div class="how-many-win">Anzahl Gewinner: <span >${chosenWinner}</span></div>
  `;
  if ((radioButton.checked = true)) {
    for (let i = 0; i < chosenWinner; i++) {
      let uniqueNames = luckyOnes[i];
      uniqueNames = uniqueNames.substring(0, uniqueNames.length - 1);
      found.innerHTML += /*html*/ `
      <div>
        <div>${uniqueNames}</div>
      </div>
  `;
    }
  } else {
    // hier MÜSSEN NOCH DIE RANDOM Gewinner soritiert werden //
  }
}
