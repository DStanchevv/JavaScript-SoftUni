function solve(arr)
{
    let passengersInTrainArr=arr.shift().split(" ").map(Number);
    let maxCapacity=Number(arr.shift());
    for(let i=0;i<arr.length;i++)
    {
        let commandNum=arr[i].split(" ");
        if(commandNum[0]==="Add")
        {
            passengersInTrainArr.push(Number(commandNum[1]));
        }
        else
        {
            for(let j=0;j<arr.length;j++)
            {
                if(Number(commandNum[0]) + passengersInTrainArr[j]<=maxCapacity)
                {
                    passengersInTrainArr[j]+=Number(commandNum[0]);
                    break;
                }
            }
        }  
    }
    console.log(passengersInTrainArr.join(" "))
}
solve(['32 54 21 12 4 0 23','75','Add 10','Add 0','30','10','75'])