function solve(arr)
{
    let newArr=[];
    for(let i=0;i<arr.length;i++)
    {
        let num1=arr[i];
        let isMax=true;
        for(let j=i+1;j<arr.length;j++)
        {
            let num2=arr[j];
            if(num1<=num2)
            {
                isMax=false;
            }
        }
        if(isMax)
        {
            newArr.push(num1);
        }
    }
    console.log(newArr.join(", "))
}
solve([1,4,3,2])