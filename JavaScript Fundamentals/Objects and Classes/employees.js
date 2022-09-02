function solve(input)
{
    let listObject={};
    for(const person of input)
    {
        listObject.name=person;
        listObject.number=person.length;
        console.log(`${listObject.name} ${listObject.number}`)
    }
}
solve(['Silas Butler','Adnaan Buckley','Juan Peterson'])