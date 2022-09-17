function solve(arr, step)
{
    return (arr.filter((el, i) => {
        if(i%step===0)
        {
            return el;
        }
    }));
}
solve(['5','20','31','4','20'],2)