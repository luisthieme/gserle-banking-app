function berechnen() {
    console.log("Aktiviert");
    let betrag = parseFloat(document.getElementById("betrag").value);
    let monate = parseFloat(document.getElementById("monate").value);
    let zins = parseFloat(document.getElementById("zins").value) / 100;

    let rate0 = (betrag * (zins / 12)) / (1 - Math.pow(1 + zins / 12, -monate));
    let gesamtAufwand0 = rate0 * monate;
    let zinsAufwand0 = gesamtAufwand0 - betrag; 

    let rate = Math.round(rate0)
    let gesamtAufwand = Math.round(gesamtAufwand0)
    let zinsAufwand = Math.round(zinsAufwand0)

    console.log("Betrag:" , betrag);
    console.log("Monate:", monate);
    console.log("Zins:" , zins);
    console.log("Monatliche Rate: -" , rate);
    console.log("Gesamtaufwand: -" , gesamtAufwand);
    console.log("Zinsaufwand: -" , zinsAufwand);
    const output = document.getElementById("endRate");
    output.innerText = "Monatliche Rate: -" + rate + "€";
    const output1 = document.getElementById("endAufwand");
    output1.innerText = "Gesamter Aufwand: -" + gesamtAufwand + "€";
    const output2 = document.getElementById("endZins");
    output2.innerText = "Zinsbedingter Aufwand: -" + zinsAufwand + "€";
}