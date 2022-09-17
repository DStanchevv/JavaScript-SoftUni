function solve(arr){
    let res=[];
    let biggestOne=arr.shift();
    res.push(biggestOne);
    for(el of arr)
    {
        if(el>=biggestOne)
        {
            res.push(el);
            biggestOne=el;
        }
    }
    return res;
}