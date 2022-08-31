function solve(arr,n)
{
    while(n>0)
    {
        let elToMove=arr.shift();
        arr.push(elToMove);
        n--;
    }
    console.log(arr.join(", "))
}
solve([51,47,32,61,21],2)