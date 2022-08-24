function search(input)
{
    let index=0;
    let searchedBook=input[index];
    index++;
    let command=input[index];
    index++;
    let counter=0;
    while(command != "No More Books")
    {  
        if(command==searchedBook)
        {
            console.log(`You checked ${counter} books and found it.`)
            return;
        } 
        counter++;
        command=input[index];
        index++;
        
    }
        console.log(`The book you search is not here!`);
        console.log(`You checked ${index+1} books.`);
}
search(["Troy","a","b","Troy"])