function calc(input)
{
    let index=0;
    let command=input[index];
    index++;
    let total=0;
    while(command != "Going home")
    {
        let setpsCount=Number(command);
        total+=setpsCount;
        if(total>=10000)
        {
            console.log("Goal reached! Good job!")
            console.log(`${total-10000} steps over the goal!`);
            break;
        }
        command=input[index];
        index++;
    }
    if(command==="Going home")
    {
        let stepsGoingBack=Number(input[index]);
        total+= stepsGoingBack;
        if(total>=10000)
        {
            console.log("Goal reached! Good job!")
            console.log(`${total-10000} steps over the goal!`);
        }
        else
        {
            console.log(`${10000-total} more steps to reach goal.`);
        }
    }
}
calc(["1500","3000","250","1548","2000","Going home","2000"])