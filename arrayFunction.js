//A JavaScript program to show uses of function in Array
const flowers = ['peony', 'daffodil', 'marigold']; 
function addFlower(arr) {
  arr.push('lily');
}
addFlower(flowers);
console.log(flowers);                          // Output: ['peony', 'daffodil', 'marigold', 'lily']
