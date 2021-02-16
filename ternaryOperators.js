//A JavaScript program to permorm 'Ternary Operators'

let isNightTime = true;

//Below is if...else based program
if(isNightTime)
{
    console.log('Turn on the lights!');
}
else
{
    console.log('Turn off the lights!');
}

//Below are Ternary Operators being used
isNightTime ? console.log('Turn on the lights!') 
: console.log('Turn off the lights!');


let isLocked = false;
//Below is if...else based program
if (isLocked) 
{
  console.log('You will need a key to open the door.');
} 
else 
{
  console.log('You will not need a key to open the door.');
}

//Below are Ternary Operators being used
isLocked ? console.log('You will need a key to open the door.')
: console.log('You will not need a key to open the door.');


let isCorrect = true;
//Below is if...else based program
if (isCorrect) 
{
  console.log('Correct!');
}
else 
{
  console.log('Incorrect!');
}

//Below are Ternary Operators being used
isCorrect ? console.log('Correct!')
: console.log('Incorrect!');

let favouritePhrase = 'Love That!';

//Below is if...else based program
if (favouritePhrase === 'Love That!') 
{
  console.log('I love that!');
} 
else 
{
  console.log("I don't love that!");
}

//Below are Ternary Operators being used
favouritePhrase === 'Love That!' ? console.log('I love that!')
: console.log("I don't love that!");
