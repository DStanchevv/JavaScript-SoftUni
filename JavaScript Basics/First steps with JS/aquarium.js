function Calc(input)
{
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);
    let volume = length * width * height;
    let volumeInLiters = volume / 1000;
    let litersNeeded = volumeInLiters*(1 - (percent / 100));
    console.log(litersNeeded)
}
Calc(["85","75","47","17"])