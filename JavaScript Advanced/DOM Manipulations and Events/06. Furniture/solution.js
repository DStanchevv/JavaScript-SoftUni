function solve() {
  let buttons = document.querySelectorAll("button");

  buttons[0].addEventListener("click", generate);
  buttons[1].addEventListener("click", buy);

  function generate(){
    let currentItems = JSON.parse(documents.querySelectorAll("textarea")[0].value);
    let tableBody = document.getElementsByTagName("tbody")[0];
    for(let item of currentItems){
      let tableRow = document.createElement("tr");
      tableRow.innerHTML = `<td><img src="${item.img}"></td>
                            <td><p>${item.name}</p></td>
                            <td><p>${item.price}</p></td>
                            <td><p>${item.decFactor}</p></td>
                            <td><input type="checkbox"></td>`;
      tableBody.appendChild(tableRow);
      //let td = document.createElement("td");
      //let img = document.createElement("img");
      //img.setAttribute("src", item.img);
      //td.appendChild(img);
      //tableRow.appendChild(td);
     //let townTd = document.createElement("td");
      //let townName = document.createElement("p");
      //townName.innerText = item.name;
      //townTd.appendChild(townName);
     //tableRow.appendChild(townTd);
      //tableBody.appendChild(tableRow);
    }
  }

  function buy(){}
}