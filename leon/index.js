function human() {
   ein = document.getElementById("renteein")
   alter = document.getElementById("alter")
   steigerung = 1 + (parseFloat(document.getElementById("steigerung").value) * 0.01)
   gehalt = parseFloat(document.getElementById("gehalt").value)
x = 0
y = 0
   gehalt1 = parseFloat(document.getElementById("gehalt").value)


let sum = parseFloat(ein.value) - parseFloat(alter.value);
document.getElementById("arbeitsjahre").innerText = sum;

//let f = gehalt *Math.pow( steigerung ,(sum * 12));

/*for (let i = 1; i < (sum * 12); i++) {
gehalt = gehalt + (gehalt1 * steigerung)
}*/


while (y<(sum * 12))   {

     if(x=13){
      gehalt = gehalt + (gehalt1 * steigerung)
      x = 0
     }
      gehalt = gehalt + gehalt1
      x += 1
      y += 1
   }
document.getElementById("vinfla").innerText = gehalt;
}
