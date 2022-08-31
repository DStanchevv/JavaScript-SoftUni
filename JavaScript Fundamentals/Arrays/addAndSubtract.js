function solve(arr)
{
    let origSum=0;
    let newSum=0;
    let arrLength=arr.length;
    for(let i=0;i<arrLength;i++)
    {
        origSum+=arr[i];
        if(arr[i]%2===0)
        {
            arr[i]+=i;
        }
        else
        {
            arr[i]-=i;
        }
        newSum+=arr[i];
    }
    console.log(arr.join(" "))
    console.log(origSum)
    console.log(newSum)
}
solve([5,15,23,56,35])