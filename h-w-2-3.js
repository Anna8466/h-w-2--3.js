const players = [
    { name: "Player1_1", scorePoints: 0 },
    { name: "Player2_1", scorePoints: 0 },
    { name: "Player1_2", scorePoints: 50 },
    { name: "Player2_2", scorePoints: 75 },
    { name: "Player3_1", scorePoints: 60 },
    { name: "Player1_3", scorePoints: -50 },
    { name: "Player2_3", scorePoints: -30 },
    { name: "Player3_2", scorePoints: -10 },
    { name: "Player1_4", scorePoints: 50.5 },
    { name: "Player2_4", scorePoints: 75.25 },
    { name: "Player3_3", scorePoints: 60.75 },
];
  
    let arrScores = [];

for(index in players) {
    arrScores.push((players[index].scorePoints))
}
let maxIndex = arrScores.indexOf(Math.max(...arrScores))

console.log(`${players[maxIndex].name} has max score`)