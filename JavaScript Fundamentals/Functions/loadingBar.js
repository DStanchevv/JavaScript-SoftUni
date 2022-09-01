function solve(n)
{
    let completed='%'.repeat(n/10)
    let incomplete='.'.repeat(10-completed.length)
    if(incomplete.length===0)
    {
        console.log("100% complete!")
    }
    else
    {
        console.log(`${n}% [${completed}${incomplete}]`)
    }
}
solve(30)