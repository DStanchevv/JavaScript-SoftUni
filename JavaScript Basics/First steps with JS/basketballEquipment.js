function Calc(input)
{
    let yearTax = Number(input[0]);
    let kicks = yearTax - yearTax * 0.4;
    let jersey = kicks - kicks * 0.2;
    let ball = jersey / 4;
    let accessories = ball / 5;
    let price = yearTax + kicks + jersey + ball + accessories;
    console.log(price);
}
Calc(["365"])