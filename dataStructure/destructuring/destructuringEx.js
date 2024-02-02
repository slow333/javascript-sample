'use strict';

const arr = [1,2,3,4];
const [a,b,c] = arr;
console.log(a, b, c);
const restaurant = {
  name: 'Italiano Restaurant',
  location: 'Somewhere in daejeon',
  categories: ['Italian', 'Korean', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', "Garlic", 'Salad'],
  mainMenu: ['Pizza', "pasta", 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
}

let [first, second] = restaurant.categories;
console.log(first, second);
[first, second] = [second, first]
console.log(first, second);

const [starter, main] = restaurant.order(1, 2);
console.log(starter, main)