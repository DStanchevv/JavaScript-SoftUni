function calc(input)
{
    let excursionPrice=Number(input[0]);
    let puzzleCount=Number(input[1]);
    let talkingDollsCount=Number(input[2]);
    let fluffyBearsCount=Number(input[3]);
    let minionsCount=Number(input[4]);
    let trucksCount=Number(input[5]);

    let toysCount=puzzleCount+talkingDollsCount+fluffyBearsCount+minionsCount+trucksCount;
    let sumOfToys=puzzleCount*2.6+talkingDollsCount*3+fluffyBearsCount*4.1+minionsCount*8.2+trucksCount*2;
    let endPrice=0;
    if(toysCount>=50)
    {
        discount=sumOfToys*0.25;
        endPrice=sumOfToys-discount;
        endPrice-=endPrice*0.1;
        if(endPrice>=excursionPrice)
        {
            console.log(`Yes! ${(endPrice-excursionPrice).toFixed(2)} lv left.`)
        }
        else
        {
            console.log(`Not enough money! ${(excursionPrice-endPrice).toFixed(2)} lv needed.`)
        }
    }
    else
    {
        endPrice=sumOfToys;
        endPrice-=endPrice*0.1;
        if(endPrice>=excursionPrice)
        {
            console.log(`Yes! ${(endPrice-excursionPrice).toFixed(2)} lv left.`)
        }
        else
        {
            console.log(`Not enough money! ${(excursionPrice-endPrice).toFixed(2)} lv needed.`)
        }
    }
}
calc(["40.8","20","25","30","50","10"])
calc(["320","8","2","5","5","1"])