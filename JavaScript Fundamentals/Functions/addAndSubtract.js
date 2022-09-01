function solve(first, second, third)
{
    let sumFirstAndSecond=sum(first,second);
    console.log(subtract(sumFirstAndSecond,third));
    
    function sum(first,second){return first+second}
    function subtract(firstRes,third){return firstRes-third}
}
solve(23,6,10)