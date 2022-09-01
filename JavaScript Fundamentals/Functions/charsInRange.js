function solve(firstCh,secondCh)
{
    let startCh=Math.min(firstCh.charCodeAt(0),secondCh.charCodeAt(0));
    let endCh=Math.max(firstCh.charCodeAt(0),secondCh.charCodeAt(0));
    let chInRangeArr=[];
    for(let i=startCh+1;i<endCh;i++)
    {
        let currCh=String.fromCharCode(i);
        chInRangeArr.push(currCh)
    }
    console.log(chInRangeArr.join(" "))
}
solve("#",":")