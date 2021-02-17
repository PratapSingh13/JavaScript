//A JavaScript functon to find Area of Rectangle
function rectangleArea(width, height)
{
    if(width < 0 || height < 0)
    {
        return 'You need positive integers to calculate area!';
    }
    return width * height;
}

//A JavaScript function to find Perimeter of Rectangle
function rectanglePerimeter(width, height)
{
    if(width < 0 || height < 0)
    {
        return 'You need positive integers to calculate perimeter!';
    }
    return 2*(width + height);
}
areaOfRectangle = rectangleArea(5, 6);
console.log('Area of Rectangle is: ' + areaOfRectangle);

perimeterOfRectangle = rectanglePerimeter(5, 6);
console.log('Perimeter of Rectangle is: ' + perimeterOfRectangle);
