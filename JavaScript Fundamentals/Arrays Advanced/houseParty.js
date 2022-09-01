function solve(arr)
{
    let resultArray=[];
    for(let element of arr)
    {
        let command=element.split(" ");
        let name=command[0];
        if(command.length===3)
        {
            if(resultArray.includes(name))
            {
                console.log("Already in list!");
            }
            else
            {
                resultArray.push(name);
            }
        }
        else
        {
            if(!resultArray.includes(name))
            {
                console.log("Is not in the list!")
            }
            else
            {
                let index=resultArray.indexOf(name);
                resultArray.splice(index,1);
            }
        }
    }
    console.log(resultArray.join(" "));
}
solve(['Allie is going!','George is going!','John is not going!','George is not going!'])