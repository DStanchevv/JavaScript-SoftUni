function solve(times)
{
    let matrix=[];
    for(let c=0;c<times;c++)
    {
        let row=[];
        for(let r=0;r<times;r++)
        {
            row.push(times);
        }
        matrix.push(row.join(" "));
    }
    console.log(matrix.join('\n'));
}
solve(3)