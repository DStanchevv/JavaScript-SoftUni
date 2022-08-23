function projectsCreation(input)
{
    let name = input[0];
    let count = Number(input[1]);
    let time = count * 3;
    let output = `Name: ${name} Count: ${count} Time: ${time}`;
    console.log(output);
}
projectsCreation(["James Smith", "5"])