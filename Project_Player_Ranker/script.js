var playersList = [];
var elementTable = document.getElementById("playersTable");

showScream();

function showScream() {
  elementTable.innerHTML = "";
  playersList.forEach((player, index) => {
    console.log(player);
    elementTable.innerHTML += `
        <tr>
            <td>${player.name}</td>
            <td>${player.winnings}</td>
            <td>${player.draws}</td>
            <td>${player.defeats}</td>
            <td>${player.points}</td>
            <td><button onClick="addWinnings(${index})">Winnings</button></td>
            <td><button onClick="addDraws(${index})">Draws</button></td>
            <td><button onClick="addDefeats(${index})">Defeats</button></td>
            <td><button onClick="clearPlayersPoints(${index})">Clear Registers</button></td>
            <td><button onClick="removePlayers(${index})">Erase Player</button></td>
          </tr>
    `;
  });
}

function createPlayer() {
  var newPlayerName = document.getElementById("spacePlayersNames").value;
  playersList.push({
    name: newPlayerName,
    winnings: 0,
    draws: 0,
    defeats: 0,
    points: 0
  });
  document.getElementById("spacePlayersNames").value = "";
  showScream();
}

function addWinnings(index) {
  playersList[index].winnings++;
  playersList[index].points = playersList[index].points + 3;
  showScream();
}

function addDraws(index) {
  playersList[index].draws++;
  playersList[index].points++;
  showScream();
}

function addDefeats(index) {
  playersList[index].defeats++;
  showScream();
}

function clearPlayersPoints(index) {
  playersList[index].winnings = 0;
  playersList[index].draws = 0;
  playersList[index].defeats = 0;
  playersList[index].points = 0;
  showScream();
}

function removePlayers(index) {
  playersList.splice(index, 1);
  showScream();
}

function erasePlayers() {
  playersList = [];
  showScream();
}
