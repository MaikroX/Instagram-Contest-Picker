let wholeStuff = [];
let resultName = [];

function check() {
  let search = document.getElementById("completeInput").value;
  search = search.toLowerCase();
  let words = search.split(" ");
  wholeStuff.push(words);
  let found = document.getElementById("resultOfNames");
  found.innerHTML = "";
  for (let i = 0; i < wholeStuff[0].length; i++) {
    let name = wholeStuff[0][i];
    if (search.toLowerCase().includes(name && "Profilbild")) {
      names = wholeStuff[0][i + 1];
      resultName.push(names);
    }
  }
  for (let i = 0; i < resultName.length; i++) {
    let winner = resultName[i];
    winner = winner.substring(0, winner.length - 1);
    found.innerHTML += ` <div> ${winner} </div> `;
  }
  document.getElementById("checkAll").classList.add("d-none");
}

function reset() {
  document.getElementById("completeInput").value = "";
  document.getElementById("resultOfNames").innerHTML = "";
  document.getElementById("checkAll").classList.remove("d-none");
  wholeStuff = [];
  resultName = [];
}

//#endregion
// Beispiel Post
// https://www.instagram.com/p/CmHyd1Ho2oh/
