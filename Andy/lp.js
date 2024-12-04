document.getElementById("JetztAlter").addEventListener("input", JahrebisFF);
document.getElementById("WunschAlter").addEventListener("input", JahrebisFF);
document.getElementById("Inflationa").addEventListener("change", InflationBestimmen);
document.getElementById("Kapitalverzehrer").addEventListener("change", KapitalVerzeherBestimmen);

function JahrebisFF() {
    JetzigesAlter= parseInt(document.getElementById("JetztAlter").value);
    Wunschrenteneintritsalter= parseInt(document.getElementById("WunschAlter").value);
    JahrebisFinanzielleFreiheit = Wunschrenteneintritsalter-JetzigesAlter;
    document.getElementById("JahrebisFF").innerHTML= JahrebisFinanzielleFreiheit;
}
function InflationBestimmen() {
    if(document.getElementById("Inflationa").checked)    {
        document.getElementById("Inflation").style.display = "block";
        document.getElementById("Inflationsrate").style.display = "block";
        document.getElementById("InflationProzentZeichen").style.display = "block";
    }
    else {
        document.getElementById("Inflation").style.display = "none";
        document.getElementById("Inflationsrate").style.display = "none";
        document.getElementById("InflationProzentZeichen").style.display = "none";
    }
}
function KapitalVerzeherBestimmen() {
    if(document.getElementById("Kapitalverzehrer").checked)    {
        document.getElementById("Kapitalverzehr").style.display = "block";
        document.getElementById("Lebenserwartung").style.display = "block";
        document.getElementById("KapitalverzehrJahreZeichen").style.display = "block";
    }
    else {
        document.getElementById("Kapitalverzehr").style.display = "none";
        document.getElementById("Lebenserwartung").style.display = "none";
        document.getElementById("KapitalverzehrJahreZeichen").style.display = "none";
    }
}
function berechnen(){
    Startkapital=parseInt(document.getElementById("Kapital").value);   
    MonatlicherWunschbetrag=parseInt(document.getElementById("MonatlicherWunschbetrag").value);
    Laufzeit=parseInt(document.getElementById("JahrebisFF").innerHTML)*12;
    JahrRendite=parseFloat(document.getElementById("xRendite").value)/100;   
    Abgeltungssteuer=parseFloat(document.getElementById("Abgeltungssteuer").value)/100;   
    NettoRendite=JahrRendite*(1-Abgeltungssteuer)
    Kapitalbedarf=parseInt((1/NettoRendite)*MonatlicherWunschbetrag*12);
    MonatlicheSparrate = parseInt((Kapitalbedarf-Startkapital*Math.pow(1+NettoRendite/12,Laufzeit)) / ((Math.pow(1 + NettoRendite / 12, Laufzeit) - 1) / (NettoRendite / 12)));
    Endkapital = parseInt(Startkapital * Math.pow(1 + NettoRendite / 12, Laufzeit)+ MonatlicheSparrate * ((Math.pow(1 + NettoRendite / 12, Laufzeit) - 1) / (NettoRendite / 12)));
    document.getElementById("Berechnung").style.display = "block"
    document.getElementById("Ergebnisse").innerHTML ="Zusätzlich benötigtes Kapital: "+(Kapitalbedarf-Startkapital).toLocaleString()+"€"+"<br>"+"Monatliche Sparrate: "+parseInt(MonatlicheSparrate).toLocaleString()+"€";
    document.getElementById("Erklärung").innerHTML ="Bei einer monatlichen Sparrate von "+MonatlicheSparrate.toLocaleString()+"€ hast du nach "+Laufzeit/12+" Jahren ein Endkapital von "+Endkapital.toLocaleString()+"€ zusammen. Bei "+JahrRendite*100+"% angelegt kannst du mit einer monatlichen Rente von "+MonatlicherWunschbetrag.toLocaleString() +"€ rechnen."
}


