//A JavaScript program for Function Expression
const plantNeedsWater = function(day)
{
  if(day === 'Wednesday')
  {
    return true;
  }
  else
  {
    return false;
  }
}
console.log(plantNeedsWater('Tuesday'));
