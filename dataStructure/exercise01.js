'use strict';

// Data needed for a later exercise
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [['neuer', 'Pavard', 'Son', 'kim', 'Davies','Choi', 'Park', 'Lewan', 'Hummels'],
    ['Burki', 'Chulz', 'Akanji', 'Min', 'Jae']],
  score: '4:0',
  scored: ['Choi', 'Park', 'Lewan', 'Hummels'],
  date: 'Nov 9th 2025',
  odds: { team1: 1.33 , x:3.25, team2: 6.5 },
};
const [player1, player2] = game.players;
console.log(player1, player2);

const [gk, ...fieldPlayers] = player1;
// const [gk, ...fieldPlayer] = player2;
console.log(gk)
console.log(fieldPlayers)
const allPlayers = [...player1, ...player2];
console.log(allPlayers)
const player1Final = [...player1, 'Thiaog', 'coutinho', 'Perisic'];
console.log(player1Final)

const { odds: { team1, x: draw, team2}} = game;
console.log(team1, draw, team2)

for(const [i, player] of player2.entries()) console.log(`${i +1} : ${player}`);

