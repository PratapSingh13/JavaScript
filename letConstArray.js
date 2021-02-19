//A JavaScript program to understand the concept of 'let & const with Array'
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
condiments[0] = 'Mayo'
console.log(condiments);      //Output-:[ 'Mayo', 'Mustard', 'Soy Sauce', 'Sriracha' ]
condiments = [ 'Mayo' ];
utensils[3] = 'Spoon';
console.log(utensils);       //Output-:[ 'Fork', 'Knife', 'Chopsticks', 'Spoon' ]
