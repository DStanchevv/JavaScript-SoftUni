function calc(input)
{
    let sum=Number(input[0]);
    let coinsCount=0;
    sum*=100;
    while(sum>0)
    {
        if(sum>200)
        sum-=200;
        else if(sum>100)
        sum-=100;
        else if(sum>50)
        sum-=50;
        else if(sum>20)
        sum-=20;
        else if(sum>10)
        sum-=10;
        else if(sum>5)
        sum-=5;
        else if(sum>2)
        sum-=2;
        else
        sum-=1;
        coinsCount++;
    }
    console.log(coinsCount);
}
calc(["1.23"])