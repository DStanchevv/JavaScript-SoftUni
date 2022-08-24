function calc(input)
{
for (let i = 1; i <= 10; i++) {
    console.log(`${i} * ${Number(input[0])} = ${i*Number(input[0])}`);
}
}
calc(["5"]);