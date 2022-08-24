function func(input)
{
    let n=Number(input[0]);
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
    for (let i = n; i >= 1; i--) {
        console.log(i);
    }
}
func(["100"]);

function func1()
{
   let name="James";
   console.log(name.length);
   console.log(name[0]);
   for (let i = 0; i < name.length; i++) 
   {
    console.log(name[i]);
   }
   console.log(name.charAt(0))
   let sum=0;
   for (let i = 0; i < name.length; i++) 
   {
    if(name[i]==="a")
    sum+=1;
    else if(name[i]==="e")
    sum+=2;
    else if(name[i]==="i")
    sum+=3;
    else if(name[i]==="o")
    sum+=4;
    else if(name[i]==="u")
    sum+=5;
   }
   console.log(sum);

   let num=123;
   let numm=num.toString();
   console.log(numm[0]);
   console.log(numm.length);
}
func1();