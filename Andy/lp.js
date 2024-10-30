document.getElementById('JetztAlter').addEventListener('input', JahrebisFF);
document.getElementById('WunschAlter').addEventListener('input', JahrebisFF);
function JahrebisFF() {
    JetzigesAlter= parseInt(document.getElementById("JetztAlter").value);
    Wunschrenteneintritsalter= parseInt(document.getElementById("WunschAlter").value);
    JahrebisFinanzielleFreiheit = Wunschrenteneintritsalter-JetzigesAlter;
    document.getElementById("JahrebisFF").innerHTML= JahrebisFinanzielleFreiheit;
}
function InflationAn() {
    document.getElementById("Inflation").style.display = "block";
    document.getElementById("Inflationsrate").style.display = "block";
    
}
function KapitalverzehrAn() {
    document.getElementById("Kapitalverzehr").style.display = "block"
    document.getElementById("Lebenserwartung").style.display = "block"
}
function berechnen(){
    Startkapital=parseInt(document.getElementById("Kapital").value);
    MonatlicherWunschbetrag=parseInt(document.getElementById("MonatlicherWunschbetrag").value);
    Laufzeit=parseInt(document.getElementById("JahrebisFF").innerHTML);
    JahrRendite=parseFloat(document.getElementById("xRendite").value)/100;
    MonatsRendite=JahrRendite/12;
    Endkapital=1/JahrRendite*MonatlicherWunschbetrag*12;
    Test=Endkapital
    //while (passt=false) {
    //    for ( n=0; <; ++) {        
    //    }
    //}
}


