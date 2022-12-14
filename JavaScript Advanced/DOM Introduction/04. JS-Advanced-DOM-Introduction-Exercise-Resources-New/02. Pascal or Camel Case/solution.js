function solve() {
  let text=document.getElementById("text").value;
  let convention=document.getElementById("naming-convention").value;
  let textArr=text.split(" ");
  let res="";
  switch(convention){
    case "Camel Case":
      textArr.forEach((e, i) => {
        if(i===0){
          return res+=e.toLowerCase();
        }
        return res+= e[0].toUpperCase() + e.substring(1).toLowerCase();
      })
    break;
    case "Pascal Case": 
    textArr.forEach((e,i)=>{
      e=e.toLowerCase();
      res+=e[0].toUpperCase()+e.substring(1);
    })
    break;
    default: res="Error!"; break;
  }
  document.getElementById("result").textContent=res;
}