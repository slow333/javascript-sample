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
// console.log(player1, player2);

const [gk, ...fieldPlayers] = player1;
// const [gk, ...fieldPlayer] = player2;
// console.log(gk)
// console.log(fieldPlayers)
const allPlayers = [...player1, ...player2];
// console.log(allPlayers)
const player1Final = [...player1, 'Thiaog', 'coutinho', 'Perisic'];
// console.log(player1Final)

const { odds: { team1, x: draw, team2}} = game;
// console.log(team1, draw, team2)

for(const [i, player] of player2.entries()) console.log(`${i +1} : ${player}`);

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  ['92뭐지', '🔶 Yellow card'],
]);
console.log(gameEvents.values());
const gameSet = new Set(gameEvents.values());
gameEvents.delete(64);
const gameKey = [...gameEvents.keys()];
console.log(gameKey)
for (const [key, value] of gameEvents) {
  // console.log("key :", key)
  // console.log("value :", value)
}

const objsample = { name: 'ok', age: 2}
const keys =Object.keys(objsample)
const values = Object.values(objsample)
const entries = Object.entries(objsample)

console.log('##########object를 map으로')
const toMap = new Map(Object.entries(objsample));
console.log(toMap)

console.log('=========== map을 object로')
const reducerForMapToObj = [ ...gameEvents ].reduce((acc, curr) => {
  return { ...acc, [curr[0]] : curr[1] }
}, {})
console.log(reducerForMapToObj)