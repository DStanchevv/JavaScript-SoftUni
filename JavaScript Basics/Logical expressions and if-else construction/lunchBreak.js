function calc(input)
{
    let serialName=input[0];
    let episode=Number(input[1]);
    let rest=Number(input[2]);
    let lunchTime=rest*1/8;
    let restTime=rest*1/4;
    let timeLeft=rest-lunchTime-restTime;
    if(timeLeft>=episode)
    {
        console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(timeLeft-episode)} minutes free time.`)
    }
    else
    {
        console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(episode-timeLeft)} more minutes.`)
    }
}
calc(["Game of Thrones","60","96"])
calc(["Teen Wolf","48","60"])