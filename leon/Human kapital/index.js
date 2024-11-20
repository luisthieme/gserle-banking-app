function human() {
   ein = document.getElementById("renteein")
   alter = document.getElementById("alter")
   steigerung = 1 + (parseFloat(document.getElementById("steigerung").value) /100)
   gehaltt = 0
   gehalttt = 0
x = 0
y = 0
z = 0

   gehalt1 = parseFloat(document.getElementById("gehalt").value)
   gehalt2 = gehalt1
   infla = 1 + (parseFloat(document.getElementById("inflation").value) /100)


let sum = parseFloat(ein.value) - parseFloat(alter.value);
document.getElementById("arbeitsjahre").innerText = sum;

//let f = gehalt *Math.pow( steigerung ,(sum * 12));

/*for (let i = 1; i < (sum * 12); i++) {
gehalt = gehalt + (gehalt1 * steigerung)
}*/


while (y<(sum * 12))   {

     if(x===12){
      gehalt1 = gehalt1 * steigerung
      x = 0
     }
      gehaltt = gehaltt + gehalt1
      x += 1
      y += 1
   }
   document.getElementById("vinfla").innerText = gehaltt.toFixed(2).toLocaleString("de-DE");



   while (z<(sum * 12))   {

      if(x===12){
       gehalt2 *= steigerung / infla
       x = 0
      }
       gehalttt = gehalttt + gehalt2
       x += 1
       z += 1
    }
    //console.log('TEST');

    document.getElementById("kapital").innerText = gehalttt.toFixed(2).toLocaleString("de-DE");


   }
