function calc(input)
{
    let count=Number(input[0]);
    let group1=0;
    let group2=0;
    let group3=0;
    let group4=0;
    let group5=0;

    for (let i = 1; i <= count; i++) 
    {
       let num=Number(input[i]);
       if(num<200)
       {
        group1++;
       }
       else if(num>=200 && num<=399)
       {
        group2++;
       }
       else if(num>=400 && num<=599)
       {
        group3++;
       }
       else if(num>=600 && num<=799)
       {
        group4++;
       }
       else
       {
        group5++;
       }
    }
    let percentGroup1=(group1/count)*100;
    let percentGroup2=(group2/count)*100;
    let percentGroup3=(group3/count)*100;
    let percentGroup4=(group4/count)*100;
    let percentGroup5=(group5/count)*100;

    console.log(percentGroup1.toFixed(2));
    console.log(percentGroup2.toFixed(2));
    console.log(percentGroup3.toFixed(2));
    console.log(percentGroup4.toFixed(2));
    console.log(percentGroup5.toFixed(2));
}
calc(["3","1","2","999"])