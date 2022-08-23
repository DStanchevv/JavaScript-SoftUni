function sum(input)
{
    let time1=Number(input[0]);
    let time2=Number(input[1]);
    let time3=Number(input[2]);
    let sumSec=time1+time2+time3;
    let mins=Math.floor(sumSec/60);
    let sec=sumSec%60;
    if(sec<10)
    {
        console.log(`${mins}:0${sec}`);
    }
    else
    {
        console.log(`${mins}:${sec}`); 
    }
}
sum(["35","45","44"])