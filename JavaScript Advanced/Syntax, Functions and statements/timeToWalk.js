function solve(steps, footprint, speed)
{
    let meters=steps*footprint;
    let metersPerSec=speed/3.6;
    let time=meters/metersPerSec;
    let rest=Math.floor(meters/500);
    
    let timeInMin=Math.floor(time/60);
    let timeInSec=Math.ceil(time-(timeInMin*60));
    let timeInH=Math.floor(time/3600);
    timeInMin+=rest;
    timeInH+=Math.floor(timeInMin/60);
    timeInMin=timeInMin%60;
    let formattedH=timeInH<10? `0${timeInH}`:`${timeInH}`;
    let formattedM=timeInMin<10?`0${timeInMin}`:`${timeInMin}`;
    let formattedS=timeInSec<10?`0${timeInSec}`:`${timeInSec}`;
    console.log(`${formattedH}:${formattedM}:${formattedS}`);
}
solve(4000, 0.60, 5)