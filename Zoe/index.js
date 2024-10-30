function berechnenEins() {
    if(document.getElementById('mySelect').value == "optionEins") {
        var phase = parseFloat(document.getElementById("myForm").elements["phase"].value);
        var abgeltung = parseFloat(document.getElementById("myForm").elements["abgeltung"].value);
        var ziel = parseFloat(document.getElementById("myForm").elements["ziel"].value);
        var zinssatz = parseFloat(document.getElementById("myForm").elements["zinssatz"].value);
        var effektiverZinssatz =  zinssatz * (1 - (abgeltung / 100))
        var monatlicherZinssatz = (effektiverZinssatz / 12) / 100
        var monatlichePhase = phase * 12
        var sparrate = ziel * monatlicherZinssatz / (Math.pow((1 + monatlicherZinssatz), monatlichePhase) - 1)
        sparrate = sparrate.toFixed(2);
        document.getElementById("pEins").innerHTML = sparrate + " €";
    }
    else {
        berechnenZwei ();
    }
}

function berechnenZwei() {
    if(document.getElementById('mySelect').value == "optionZwei") {
        var phase = parseFloat(document.getElementById("myForm").elements["phase"].value);
        var abgeltung = parseFloat(document.getElementById("myForm").elements["abgeltung"].value);
        var ziel = parseFloat(document.getElementById("myForm").elements["ziel"].value);
        var zinssatz = parseFloat(document.getElementById("myForm").elements["zinssatz"].value);
        var abVoKi = (8 * abgeltung)  / 100
        var abUnKi = abgeltung + abVoKi
        var effektiverZinssatz =  zinssatz * (1 - abUnKi / 100)
        var monatlicherZinssatz = (effektiverZinssatz / 12) / 100
        var monatlichePhase = phase * 12
        var sparrate = ziel * monatlicherZinssatz / (Math.pow((1 + monatlicherZinssatz), monatlichePhase) - 1)
        sparrate = sparrate.toFixed(2);
        document.getElementById("pEins").innerHTML = sparrate + " €";
    }
    else {
        berechnenDrei ();
    }
}

function berechnenDrei() {
    if(document.getElementById('mySelect').value == "optionDrei") {
        var phase = parseFloat(document.getElementById("myForm").elements["phase"].value);
        var abgeltung = parseFloat(document.getElementById("myForm").elements["abgeltung"].value);
        var ziel = parseFloat(document.getElementById("myForm").elements["ziel"].value);
        var zinssatz = parseFloat(document.getElementById("myForm").elements["zinssatz"].value);
        var abVoKi = (abgeltung * 9) / 100
        var abUnKi = abgeltung + abVoKi
        var effektiverZinssatz =  zinssatz * (1 - abUnKi / 100)
        var monatlicherZinssatz = (effektiverZinssatz / 12) / 100
        var monatlichePhase = phase * 12
        var sparrate = ziel * monatlicherZinssatz / (Math.pow((1 + monatlicherZinssatz), monatlichePhase) - 1)
        sparrate = sparrate.toFixed(2);
        document.getElementById("pEins").innerHTML = sparrate + " €";
    }
}