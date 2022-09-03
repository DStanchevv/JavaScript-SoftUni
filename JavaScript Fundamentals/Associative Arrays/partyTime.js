function solve(data)
{
    let vip=new Set();
    let normal=new Set();
    let isParty=false;
    for(let line of data)
    {
        if(line==="PARTY")
        {
            isParty=true;
            continue;
        }
        if(!isParty)
        {
            let firstCh=Number(line[0]);
            if(isNaN(firstCh))
            {
                normal.add(line);
            }
            else
            {
                vip.add(line);
            }
        }
    }
    console.table(vip)
    console.table(normal)
}
solve(['7IK9Yo0h','9NoBUajQ','Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc' ])