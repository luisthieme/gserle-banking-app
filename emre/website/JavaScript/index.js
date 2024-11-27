var anfangskapital = parseFloat(
  document.getElementById("anfangskapitalInput").value
);
var sparrate = parseFloat(document.getElementById("sparrate").value);
var zinssatz = parseFloat(document.getElementById("zinssatz").value);
var laufzeit = parseFloat(document.getElementById("laufzeit").value);
var endkapital = parseFloat(document.getElementById("endkapital").value);

var dropdownSparIntervall = document.getElementById("auswahlSparintervall");
var dropdownRechner = document.getElementById("auswahlRechner");
var dropdownZinsIntervall = document.getElementById("auswahlZinsintervall");

var Rechner = dropdownRechner.value;
console.log("Ausgewählter Rechner:", Rechner);

var Sparintervall = dropdownSparIntervall.value;
console.log("Ausgewähltes Sparintervall:", Sparintervall);

dropdownSparIntervall.addEventListener("change", function () {
  var Sparintervall = dropdownSparIntervall.value;
  console.log("Ausgewähltes Sparintervall:", Sparintervall);
});

var Zinsintervall = dropdownZinsIntervall.value;
console.log("Ausgewähltes Zinsintervall:", Zinsintervall);

dropdownZinsIntervall.addEventListener("change", function () {
  Zinsintervall = dropdownZinsIntervall.value;
  console.log("Ausgewähltes Zinsintervall:", Zinsintervall);
});

var ausgewaelterRechnerDropdown = document.getElementById("auswahlRechner");
ausgewaelterRechnerDropdown.addEventListener("change", function () {
  var ausgewaelterRechner = ausgewaelterRechnerDropdown.value;
  ausblenden();
});

function berechnen() {
  var ausgewaelterRechner = document.getElementById("auswahlRechner").value;

  var anfangskapital =
    parseFloat(document.getElementById("anfangskapitalInput").value) || 0;
  var sparrate = parseFloat(document.getElementById("sparrate").value) || 0;
  var zinssatz =
    parseFloat(document.getElementById("zinssatz").value) / 100 || 0;
  var laufzeit = parseFloat(document.getElementById("laufzeit").value) || 0;
  var endkapital = parseFloat(document.getElementById("endkapital").value) || 0;

  var ergebnis;

  const maxIter = 100; // Maximale Anzahl an Iterationen
  const tol = 1e-6; // Toleranz für das Newton-Raphson-Verfahren

  if (ausgewaelterRechner == "anfangskapital") {
    ergebnis =
      endkapital / Math.pow(1 + zinssatz, laufzeit) -
      sparrate * ((Math.pow(1 + zinssatz, laufzeit) - 1) / zinssatz);
  } else if (ausgewaelterRechner == "zinssatz") {
    let zinssatz_neu = zinssatz;
    let iteration = 0;
    while (iteration < maxIter) {
      let f =
        anfangskapital * Math.pow(1 + zinssatz_neu, laufzeit) +
        sparrate * ((Math.pow(1 + zinssatz_neu, laufzeit) - 1) / zinssatz_neu) -
        endkapital;
      let f_prime =
        laufzeit * anfangskapital * Math.pow(1 + zinssatz_neu, laufzeit - 1) +
        (sparrate *
          (laufzeit * Math.pow(1 + zinssatz_neu, laufzeit - 1) * zinssatz_neu -
            (Math.pow(1 + zinssatz_neu, laufzeit) - 1))) /
          (zinssatz_neu * zinssatz_neu);
      let zinssatz_next = zinssatz_neu - f / f_prime;
      if (Math.abs(zinssatz_next - zinssatz_neu) < tol) {
        ergebnis = zinssatz_next * 100;
        break;
      }
      zinssatz_neu = zinssatz_next;
      iteration++;
    }
    if (iteration >= maxIter) {
      console.log("Maximale Iterationen erreicht, keine Konvergenz");
      ergebnis = "Nicht konvergent";
    }
  } else if (ausgewaelterRechner == "laufzeit") {
    ergebnis =
      Math.log(endkapital / (anfangskapital + sparrate / zinssatz)) /
      Math.log(1 + zinssatz);
  } else if (ausgewaelterRechner == "endkapital") {
    ergebnis =
      anfangskapital * Math.pow(1 + zinssatz, laufzeit) +
      sparrate * ((Math.pow(1 + zinssatz, laufzeit) - 1) / zinssatz);
  } else if (ausgewaelterRechner == "sparrate") {
    ergebnis =
      ((endkapital - anfangskapital * Math.pow(1 + zinssatz, laufzeit)) *
        zinssatz) /
      (Math.pow(1 + zinssatz, laufzeit) - 1);
  }

  document.getElementById("ergebnis").value = ergebnis;
}

function test() {
  laufzeit = parseFloat(document.getElementById("laufzeit").value);
  zinssatz = parseFloat(document.getElementById("zinssatz").value);
  endkapital = parseFloat(document.getElementById("endkapital").value);
  sparrate = parseFloat(document.getElementById("sparrate").value);
  console.log(laufzeit, zinssatz, endkapital, sparrate);
}

ausblenden();

function ausblenden() {
  var ausgewaelterRechner = ausgewaelterRechnerDropdown.value;
  if (ausgewaelterRechner == "anfangskapital") {
    document.getElementById("anfangskapitalClass").style.display = "none";
    document.getElementById("sparintervallClass").style.display = "block";
    document.getElementById("sparrateClass").style.display = "block";
    document.getElementById("laufzeitClass").style.display = "block";
    document.getElementById("endkapitalClass").style.display = "block";
    document.getElementById("zinssatzClass").style.display = "block";
  } else if (ausgewaelterRechner == "zinssatz") {
    document.getElementById("anfangskapitalClass").style.display = "block";
    document.getElementById("sparintervallClass").style.display = "block";
    document.getElementById("sparrateClass").style.display = "block";
    document.getElementById("laufzeitClass").style.display = "block";
    document.getElementById("endkapitalClass").style.display = "block";
    document.getElementById("zinssatzClass").style.display = "none";
  } else if (ausgewaelterRechner == "laufzeit") {
    document.getElementById("anfangskapitalClass").style.display = "block";
    document.getElementById("sparintervallClass").style.display = "block";
    document.getElementById("sparrateClass").style.display = "block";
    document.getElementById("laufzeitClass").style.display = "none";
    document.getElementById("endkapitalClass").style.display = "block";
    document.getElementById("zinssatzClass").style.display = "block";
  } else if (ausgewaelterRechner == "endkapital") {
    document.getElementById("anfangskapitalClass").style.display = "block";
    document.getElementById("sparintervallClass").style.display = "block";
    document.getElementById("sparrateClass").style.display = "block";
    document.getElementById("laufzeitClass").style.display = "block";
    document.getElementById("endkapitalClass").style.display = "none";
    document.getElementById("zinssatzClass").style.display = "block";
  } else if (ausgewaelterRechner == "sparrate") {
    document.getElementById("anfangskapitalClass").style.display = "block";
    document.getElementById("sparintervallClass").style.display = "none";
    document.getElementById("sparrateClass").style.display = "none";
    document.getElementById("laufzeitClass").style.display = "block";
    document.getElementById("endkapitalClass").style.display = "block";
    document.getElementById("zinssatzClass").style.display = "block";
  }
  console.log("Ausgewählter Rechner:", ausgewaelterRechner);
}
