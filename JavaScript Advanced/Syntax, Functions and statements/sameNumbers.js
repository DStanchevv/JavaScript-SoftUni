function solve(num)
{
    let st=num.toString();
    let sum=0;
    for (let x = 0; x < st.length; x++) 
    {
        sum+=Number(st[x]);
    }
    for (let x = 1; x < st.length; x++) {
        if(st[0]==st[x])
        {
            continue;
        }
        else
        {
            console.log(false);
            console.log(sum);
            return;
        }
    }
    console.log(true);
    console.log(sum);
}
solve(222222)
solve(1234)