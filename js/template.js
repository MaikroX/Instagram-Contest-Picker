function headlineHowManyTemp(chosenWinner) {
  return /*html*/ `<div class="how-many-win">Anzahl Gewinner: <span >${chosenWinner}</span></div>`;
}

// function whoIsTheWinner(winner) {
//   /*html*/ `
//       <div class="output-names">
//         <div id="deleteName(${i})" class="names-inner" onclick="deleteName(${i})">${winner}</div>
//       </div>
//     `;
// }

function sortButtonTemp(found) {
  found.innerHTML += /*html*/ `
    <div class="sort" id="sortIt"><button class="sort-button" onclick="sortTheNames()">Sortieren</button></div>
        `;
}

function writeRandomWinnerTemp(winner) {
  return /*html*/ `
    <div>
      <div>${winner}</div>
    </div>
  `;
}

function sortedAfterKlickTemp(uniqueNames) {
  return /*html*/ `
      <div>
        <div>${uniqueNames}</div>
      </div>
  `;
}
