function solve(arr)
{
    let resultArray=[];
    for(let i=0;i<arr.length;i++)
    {
        if(!resultArray.includes(arr[i]))
        {
            resultArray.push(arr[i]);
        }
    }
    console.log(resultArray.join(" "))
}
solve([1,2,3,4,1])