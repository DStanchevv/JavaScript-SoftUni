function solve(input)
{
    let index=0;
    let height=Number(input[index]);
    index++;
    let width=Number(input[index]);
    index++;
    let percentage=Number(input[index]);
    index++;

    let command=input[index];
    index++;

    let quadraticM=height*width*4;
    let totalSpace=Math.ceil(quadraticM-(quadraticM*(percentage/100)));

    while(command !=="Tired!")
    {
        let paint=Number(command);
        totalSpace-=paint;

        if(totalSpace <= 0)
        {
            if(totalSpace<0)
            {
                console.log(`All painted, you have ${Math.abs(totalSpace)}l paint left.`)
            }
            else
            {
                console.log("All walls are painted!")
            }
            break;
        }

        command=input[index];
        index++;
    }
    
    if(totalSpace>0)
    {
        console.log(`${totalSpace} quadratic m left.`)
    }

}
solve(["3","5","10","2","3","4","Tired!"])