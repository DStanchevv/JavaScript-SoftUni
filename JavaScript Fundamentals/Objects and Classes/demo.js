function solve()
{
    let myObj=
    {
        name: 'Todor',
        age: 28,
        sayHello: function() {console.log("Hello!"); }
    }
    console.log(myObj.name);
    console.table(myObj);
    console.log(myObj.name)
    console.log(myObj.sayHello())
}
solve();

class Person
{
    constructor(name, age)
    {
        this.name=name;
        this.age=age;
    }
    hello()
    {
        console.log("Hello! I am person.")
    }
}
let myPerson=new Person("Name", 28)
console.log(myPerson);
console.log(myPerson.hello());