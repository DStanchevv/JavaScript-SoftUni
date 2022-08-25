function solve(input)
{
let num1=Number(input[0]);
let num2=Number(input[1]);
let res="";

for (let i = num1; i <= num2; i++) {
    let numAsStr=i.toString();
    let evenSum=0;
    let oddSum=0;
    for (let j = 0; j < numAsStr.length; j++) {
        let curDig=Number(numAsStr[j]);
        let position=j+1;
        if(position%2===0)
        {
            evenSum+=curDig;
        }
        else
        {
            oddSum+=curDig;
        }
    }
    if(evenSum==oddSum)
    {
        res+=`${numAsStr} `;
    }
}
console.log(res);
}
solve(["100000","100050"])