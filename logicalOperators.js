let mood = 'sleepy';
let tirednessLevel = 6;
if(mood === 'sleepy' && tirednessLevel > 8)
{
  console.log('time to sleep');
}
else
{
  console.log('not bed time yet');
}

let stopLight = 'green';
let pedestrians = 2;
if (stopLight === 'green' && pedestrians === 0) 
{
    console.log('Go!');
} 
else 
{
    console.log('Stop');
}

let day = 'Monday';
if (day === 'Saturday' || day === 'Sunday') 
{
    console.log('Enjoy the weekend!');
} 
else 
{
    console.log('Do some work.');
}

let excited = true;
console.log(!excited);                   // Prints false
 
let sleepy = false;
console.log(!sleepy);                  // Prints true
