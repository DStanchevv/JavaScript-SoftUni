function calc(input)
{
    let tournamentsCount=Number(input[0]);
    let startPoints=Number(input[1]);
    let points=startPoints;
    let wCount=0;
    for (let i = 1; i <= tournamentsCount; i++) 
    {
        let stage=input[i];
        if(stage==="W")
        {
            points+=2000;
            wCount++;
        }
        else if(stage==="F")
        {
            points+=1200;
        }
        else
        {
            points+=720
        }
    }
    console.log(`Final points: ${points}`)
    console.log(`Average points: ${(points-startPoints)/tournamentsCount}`)
    let percentW=(wCount/tournamentsCount)*100;
    console.log(percentW.toFixed(2));
}
calc(["5","1400","F","SF","W","W","SF"])