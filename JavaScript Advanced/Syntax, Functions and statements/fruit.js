function solve(input1,input2,input3)
{
    let fruit=input1;
    let grams=input2;
    let kg=grams/1000;  
    let price=input3*kg;
    console.log(`I need $${price.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`);
}
solve("apple", 2500, 1.80)