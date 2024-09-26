const players = [
    {
    "id": 1,
    "name": "Ivan",
    "scorePoints": 500
    },
    {
    "id": 2,
    "name": "Petr",
    "scorePoints": 3600
    },
    {
    "id": 3,
    "name": "Vadim",
    "scorePoints": 3433
    },
    {
    "id": 4,
    "name": "Olga",
    "scorePoints": 2356
    },
    ];
    
    //цикл    
    //Math
    //свойство через точку

    let arrScores = [];

for(index in players) {
    arrScores.push((players[index].scorePoints))
}
let maxIndex = arrScores.indexOf(Math.max(...arrScores))

console.log(`${players[maxIndex].name} has max score`)