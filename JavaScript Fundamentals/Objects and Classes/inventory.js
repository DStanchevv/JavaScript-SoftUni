function solve(arr)
{
    let heroes=[];
    for(let heroInfo of arr)
    {
        let splitedElements=heroInfo.split(' / ');
        let name=splitedElements[0];
        let level=splitedElements[1];
        let items=splitedElements[2];
        let currentHero={
            name:name,
            level:+level,
            items:items
        };
        heroes.push(currentHero);
    }
    let sortedByLevel=heroes.sort((a,b)=>
    {
        return a.level - b.level;
    });
    for(const hero of sortedByLevel)
    {
        console.log(hero);
    }
}
solve(['Isacc / 25 / Apple, Gravity Gun','Derek / 12 / BarrelVest, DestructionSword','Hes / 1 / Desolator, Sentinel, Antara'])