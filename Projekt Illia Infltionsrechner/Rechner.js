const ursprung = document.getElementById('Ursprung'),
      prozent = document.getElementById('Prozent'),
      zeit = document.getElementById('Zeit');

const zukünftige = document.getElementById('Zukünftige'),
      kaufkraftverlust = document.getElementById('Kaufkraftverlust'),
      zukünftigerPreis = document.getElementById('Zukünftiger-Preis'),
      preissteigerung =document.getElementById('Preissteigerung');

document.querySelector('.ls').onclick = clearAll;


 document.querySelector('.Knöpfe').onclick = (Event) => {
   if(!Event.target.classList.Contains('Br')) return;
   if(Event.target.classList.Contains('Ls')) return;
 }
 
window.onload = function(){
   
   console.log(zukünftige, prozent,  zukünftige, sign);


}


















    function berechnen(){
        let ursprung = parseFloat(document.getElementById("Ursprung").value);
        let prozent = parseFloat(document.getElementById("Prozent").value) / 100;
        let zeit = parseInt(document.getElementById("Zeit").value);

        if(isNaN(ursprung) || isNaN(prozent) || isNaN(zeit)){
            alert("Bitte alle Felder karrekt ausführen!")
            return;

        }
        
        let zukünftige = ursprung / Math.pow(1 + prozent, zeit);
        let kaufkraftverlust = ursprung - zukünftige;
        let zukünftigerPreis = ursprung * Math.pow(1+ prozent, zeit);
        let preissteigerung = (zukünftigerPreis / ursprung - 1) * 100;

        document.getElementById("Zukünftiege-Kaufkraft").innerText = zukünftige.toFixed(2);
        document.getElementById("Kaufkarftverlust").innerText = kaufkraftverlust.toFixed(2);
        document.getElementById("Zukünftiger-Preis").innerText= zukünftigerPreis.toFixed(2);
        document.getElementById("Preissteigerung").innerText = preissteigerung.toFixed(2);
    }

    function löschen(){
        document.getElementById("ursprung").value = "";
        document.getElementById("prozent").value = "";
        document.getElementById("zeit").value = "";

        document.getElementById("Zukünftiege-Kaufkraft").value = "";
        document.getElementById("Kaufkarftverlust").value = "";
        document.getElementById("Zukünftiger-Preis").value = "";
        document.getElementById("Preissteigerung").value = "";
    }


