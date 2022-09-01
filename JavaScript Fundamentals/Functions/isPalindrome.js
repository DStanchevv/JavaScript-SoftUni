function solve(input)
{
    for(let el of input)
    {
        let curr=String(el);
        let reversed=String(el).split("").reverse().join("");
        if(curr===reversed)
        {
            console.log(true);
        }
        else
        {
            console.log(false);
        }
    }
}
solve([123,323,421,121])