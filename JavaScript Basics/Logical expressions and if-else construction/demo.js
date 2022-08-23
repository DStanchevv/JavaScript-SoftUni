function show()
{
    let a = 5;
    let b = 5;
    console.log(a==b) //makes them both string and checks values
    console.log(a===b) //checks type and value
    console.log(a!=b) //different by value
    console.log(a!==b) //different by type and value
    if(a==b || a===b)
    {
        console.log("Yes asd")
    }
    else if(a!=b)
    {
        console.log("Diff")
    }
    else 
    {
        console.log("No")
    }
}
show();