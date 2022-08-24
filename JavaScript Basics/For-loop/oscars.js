function calc(input)
{
    let name=input[0];
    let academyPoints=Number(input[1]);
    let judgesCount=Number(input[2]);
    for (let i = 3; i < input.length; i+=2) 
    {
            let judgeName=input[i];
            let judgePoints=Number(input[i+1]);
            let bonus=(String(judgeName).length*judgePoints)/2;
            academyPoints+=bonus;
            if(academyPoints>1250.5)
            {
                console.log(`Congratulations, ${name} got a nominee for leading role with ${academyPoints}`);
                return;
            }
    }
    if(academyPoints<1250.5)
    {
        console.log(`Sorry, ${name} you need ${1250.5 - academyPoints} more!`)
    }
    else
    {
        console.log(`Congratulations, ${name} got a nominee for leading role with ${academyPoints}`); 
    }
}
calc(["Zahari Baharov","205","4","Jhonny Depp","45","Will Smith","29","Jet Lee","10","Matthew Mcconaughey","39"])