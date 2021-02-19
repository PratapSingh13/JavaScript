//A JavaScript program to understand .pop()
//In JavaScript .pop() removes the last item of an arra
const newItemTracker = ['item 0', 'item 1', 'item 2'];
const removed = newItemTracker.pop();
console.log(newItemTracker);              //Output-: [ 'item 0', 'item 1' ]
console.log(removed);                    //Output-: item 2
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores.pop();
console.log(chores);                   //Output-: ['wash dishes', 'do laundry', 'take out trash', 'cook dinner']
