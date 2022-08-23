function calcTime(input)
{
    let count = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);
    let time = count / pagesPerHour;
    let hoursNeeded = time / days;
    console.log(hoursNeeded);
}
calcTime(["432","15","4"])