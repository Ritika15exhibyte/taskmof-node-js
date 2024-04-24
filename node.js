const fs = require('fs');

// Read the animal and food lists from files
const animals = fs.readFileSync('animals.txt').toString().split('\n');
const food = fs.readFileSync('food.txt').toString().split('\n');

// Function to find out what's left
function findLeftovers() {
  // Initialize an array to hold the leftover food
  const leftovers = [];

  
  for (let i = 0; i < animals.length; i++) {
    
    const animal = animals[i];
    const foodItem = food[i];

    if (!leftovers.includes(foodItem)) {
      leftovers.push(foodItem);
    }
  }

  return leftovers.join('deer-deer-');
}

console.log(findLeftovers()); 