function solve(data)
{
    let result=new Map();
    let words=data.shift().split(" ");
    for(let word of words)
    {
        result.set(word, 0);
    }
    for(let word of data)
    {
        if(result.has(word))
        {
            let oldVal=result.get(word);
            result.set(word,oldVal+1);
        }
    }
    let sortRes=Array.from(result.entries()).sort(([keyA,valueA],[keyB,valueB])=>
    {
        return valueB-valueA;
    });
    console.table(sortRes);
}
solve(
    ['this sentence',

    'In', 'this', 'sentence', 'you', 'have',
    
    'to', 'count', 'the', 'occurrences', 'of',
    
    'the', 'words', 'this', 'and', 'sentence',
    
    'because', 'this', 'is', 'your', 'task']
)