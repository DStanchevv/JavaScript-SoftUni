let key='four';
let obj={
    'one': 1,
    'two': 2,
    'three': 3,
    [key]: 4
}
console.log(obj)
console.log(obj.one)
console.log(obj['four'])
console.log(obj[key])
for(let key in obj)
{
    console.log(key)
    console.log(obj[key])
}
