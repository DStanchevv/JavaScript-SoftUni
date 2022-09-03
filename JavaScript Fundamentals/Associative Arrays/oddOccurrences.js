function solve(data)
{
    let result=new Map();
    let words=data.split(" ");
    for(let word of words)
    {
        word=word.toLowerCase();
        if(result.has(word))
        {
            let val=result.get(word);
            result.set(word,val+1);
        }
        else
        {
            result.set(word, 1);
        }
    }
    let filterRes=Array.from(result).filter(([key, value])=>
        {
         return value%2!==0;
        })
        console.table(filterRes)
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')