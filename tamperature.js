//A JavaScript function to convert Celsius to Fahrenheit
function multiplyByNineFifths(number)
{
    return number * (9/5);
}
function getFahrenheit(celsius)
{
    return multiplyByNineFifths(celsius) + 32;
}
const fahrenheit = getFahrenheit(37);
console.log(fahrenheit);

//A JavaScript function to convert Fahrenheit to Celsius
function subtractBy32(number)
{
    return (number - 32);
}
function getCelsius(fahrenheit)
{
    return (subtractBy32(fahrenheit) * 5)/9;
}
const celsius = getCelsius(98.6);
console.log(celsius);
