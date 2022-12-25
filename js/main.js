let wholeStuff = [];
let resultName = [];
let uniqueName = [];

function check() {
  let search = document.getElementById("completeInput").value;
  search = search.toLowerCase();
  let words = search.split(" ");
  wholeStuff.push(words);
  let found = document.getElementById("resultOfNames");
  found.innerHTML = "";
  firstWinner = wholeStuff[0][0];
  resultName.push(firstWinner);
  for (let i = 0; i < wholeStuff[0].length; i++) {
    let name = wholeStuff[0][i];
    if (search.toLowerCase().includes(name && "Profilbild")) {
      name = wholeStuff[0][i + 1];
      resultName.push(name);
    }
  }
  document.getElementById("checkAll").classList.add("d-none");
  let unique = Array.from(new Set(resultName));
  uniqueName.push(unique);
  console.log(unique);
  for (let i = 0; i < uniqueName[0].length; i++) {
    let winner = uniqueName[0][i];
    winner = winner.substring(0, winner.length - 1);
    found.innerHTML += `<div> ${winner} </div> `;
  }
}

function reset() {
  document.getElementById("completeInput").value = "";
  document.getElementById("resultOfNames").innerHTML = "";
  document.getElementById("checkAll").classList.remove("d-none");
  wholeStuff = [];
  resultName = [];
  uniqueName = [];
  checkEnable();
}

function init() {
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
