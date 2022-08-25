function solve(input)
{
    let index=0;
    let movieName=input[index];
    index++;
    let studentTicCount=0;
    let standardTicCount=0;
    let kidTicCount=0;
    
    while(movieName!=="Finish")
    {
        let freeSpaces=Number(input[index]);
        index++;
        let ticketType=input[index];
        index++;
        let spacesTaken=0;

        while(ticketType!=="End")
        {
            spacesTaken++;
            if(ticketType==="student")
            {
                studentTicCount++;
            }
            else if(ticketType==="standard")
            {
                standardTicCount++;
            }
            else
            {
                kidTicCount++;
            }
            if(spacesTaken===freeSpaces)
            {
                break;
            }
            ticketType=input[index];
            index++;
        }
        let spacesTakenPercent=(spacesTaken/freeSpaces)*100;
        console.log(`${movieName}, ${spacesTakenPercent}% full.`)
        movieName=input[index];
        index++;
    }
    let totaclTicCount=standardTicCount+studentTicCount+kidTicCount;
    let studTicPer=((studentTicCount/totaclTicCount)*100).toFixed(2);
    let standTicPer=((standardTicCount/totaclTicCount)*100).toFixed(2);
    let kidTicPer=((kidTicCount/totaclTicCount)*100).toFixed(2);
    console.log(studTicPer);
    console.log(standTicPer);
    console.log(kidTicPer);
}
solve(["Taxi","10","standard","kid","student","student","standard","standard","End","Scary Movie","6","student","student","student","student","student","student","Finish"])