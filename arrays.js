//A JavaScript program to understand .length property in array
//.length property in Arrays
const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);              //Output-:3

//A JavaScript program to understand .push()
//.push() allows us to add items to the end of an array.
const itemTracker = ['item 0', 'item 1', 'item 2'];
itemTracker.push('item 3', 'item 4');
console.log(itemTracker);                         //Output-:['item 0', 'item 1', 'item 2', 'item 3', 'item 4']

//A JavaScript program to understand .pop()
//In JavaScript .pop() removes the last item of an arra
const newItemTracker = ['item 0', 'item 1', 'item 2'];
const removed = newItemTracker.pop();
console.log(newItemTracker);              //Output-: [ 'item 0', 'item 1' ]
console.log(removed);                    //Output-: item 2
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores.pop();
console.log(chores);

//A JavaScript program to show uses of function in Array
const flowers = ['peony', 'daffodil', 'marigold']; 
function addFlower(arr) {
  arr.push('lily');
}
addFlower(flowers);
console.log(flowers);                          // Output: ['peony', 'daffodil', 'marigold', 'lily']
