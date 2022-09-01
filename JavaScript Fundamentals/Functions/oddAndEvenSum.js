function solve(n)
{
    let oddSum=0;
    let evenSum=0;
    let nuberAsString=n.toString();

    for(let ch of nuberAsString)
    {
        let currNum=Number(ch);
        if(currNum%2===0)
        {
            evenSum+=currNum;
        }
        else
        {
            oddSum+=currNum;
        }
    }
    console.log(oddSum);
    console.log(evenSum);
}
solve(1000435)