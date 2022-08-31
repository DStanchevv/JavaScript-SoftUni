function solve(firstArr,secondArr)
{
    for(const el of firstArr)
    {
       if(secondArr.includes(el))
       {
        console.log(el);
       }
    }
}
solve(["Hey","hello",2,4,"Peter","e"],["Petar",10,"hey",4,"hello","2"])