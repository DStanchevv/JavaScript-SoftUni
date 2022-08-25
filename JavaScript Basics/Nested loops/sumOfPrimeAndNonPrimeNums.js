function solve(input)
{
    let index=0;
    let command=input[index];
    index++;
    let sumPrime=0;
    let sumNonPrime=0;

    while(command!=="stop")
    {
        let num=Number(command);
        if(num<0) 
        {
            console.log("Number is negative");
            continue;
        }
        let isPrime=true;
        for (let div = 2; div < num; div++) {
            if(num%div===0)
            {
                isPrime=false;
                break;
            }
        }
        if(isPrime) sumPrime+=num;
        else sumNonPrime+=num;
        command=input[index];
        index++;
    }
    console.log(sumPrime);
    console.log(sumNonPrime);
}
solve(["3","9","0","7","19","4","stop"])