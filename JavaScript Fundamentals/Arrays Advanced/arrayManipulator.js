function solve(nums, commands)
{
    for(let i=0;i<commands.length;i++)
    {
        let currValues=commands[i].split(" ");
        let currCommand=currValues.shift();
        currValues=currValues.map(Number);
        let sumPairs=0;
        let sumPairsOfSumNums=[];
        switch(currCommand)
        {
            case 'add':
                let indexToAdd=currValues[0];
                let elementToAdd=currValues[1];
                nums.splice(indexToAdd,0,elementToAdd);
                break;
            case 'addMany':
                let indexToAddMany=currValues.shift();
                nums.splice(indexToAddMany,0,[...currValues]);
                break;
            case 'contains':
                console.log(nums.indexOf(currValues[0]));
                break;
            case 'remove':
                let indexToRemove=currValues[0];
                nums.splice(indexToRemove,1);
                break;
            case 'shift':
                for(let i=0;i<currValues[0];i++)
                {
                    nums.push(nums.shift());
                }
                break;
            case 'sumPairs':
                if(nums.length%2!==0)
                {
                    nums.push(0);
                }
                for(let i=0;i<nums.length;i+=2)
                {
                    sumPairs+=nums[i]+nums[i+1];
                    sumPairsOfSumNums.push(sumPairs);
                }
                nums=[...sumPairsOfSumNums];
                break;
            case 'print':
                console.log(nums.join(", "))
                break;
        }
    }
    console.log(nums);
}
solve([1,2,4,5,6,7],['add 1 8','contains 1','contains 3','print'])