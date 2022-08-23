function Calc(input)
{
    let sum = Number(input[0]);
    let time = Number(input[1]);
    let percent = Number(input[2]);
    let result = sum + time * ((sum * (percent/100)) / 12);
    console.log(result);
}
Calc(["2350","6","7"])