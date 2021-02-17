//A JavaScript program to show the use case of 'default parameters'
function makeShoppingList(item1='milk', item2='bread', item3='eggs')
{
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
makeShoppingList();

/*
Output-:
Remember to buy milk
Remember to buy bread
Remember to buy eggs
*/

function makeShoppingList(item1='milk', item2='bread', item3='eggs')
{
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
makeShoppingList(item1='cake', item2='butter', item3='coke');

/*
Output-:
Remember to buy cake
Remember to buy butter
Remember to buy coke
*/

function greeting(name = 'stranger') 
{
  console.log(`Hello, ${name}!`)
}
greeting('Yogendra')                     // Output: Hello, Yogendra!
greeting()                              // Output: Hello, stranger!
 

function wish(name) 
{
  console.log(`Hello, ${name}!`)
}
greeting('Yogendra')                     // Output: Hello, Yogendra!
greeting()                              // Output: Hello, undefined!
