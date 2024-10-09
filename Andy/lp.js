show=true
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

