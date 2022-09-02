function solve(input)
{
    let town={};
    for(let city of input)
    {
        let cityEls=city.split(" | ");
        town.name=cityEls[0];
        town.latitude=cityEls[1];
        town.longtitude=cityEls[2];
        console.log(town);
    }
}
solve(['Sofia | 42.696552 | 23.32601','Beijing | 39.913818 | 116.363625'])