function solve(arr){
    let set = new Set();
    for(let x of arr){
        set.add(x[0]);
    }
    let words = Array.from(set);
    words.sort();
    arr.sort();
    for(let x of words){
        console.log(x);
        for(let y of arr){
            if(y[0] === x){
                let items = y.split(" : ");
                let obj={product: items[0], price: items[1]}
                console.log(` ${obj.product}: ${obj.price}`);
            }
        }
    }
}
solve(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10'])