document.getElementById("anfangskapitalInput").value = 23;
var anfangskapital = parseFloat(
  document.getElementById("anfangskapitalInput").value
);
var laufzeit = parseFloat(document.getElementById("laufzeit").value);
var zinssatz = parseFloat(document.getElementById("zinssatz").value);
var endkapital = parseFloat(document.getElementById("endkapital").value);

var dropdownIntervall = document.getElementById("auswahlSparintervall");
var dropdownRechner = document.getElementById("auswahlRechner");

var Rechner = dropdownRechner.value;
console.log("Ausgewählter Rechner:", Rechner);

var Sparintervall = dropdownIntervall.value;
console.log("Ausgewähltes Sparintervall:", Sparintervall);

dropdownIntervall.addEventListener("change", function () {
  var Sparintervall = dropdownIntervall.value;
  console.log("Ausgewähltes Sparintervall:", Sparintervall);
});

var ausgewaelterRechnerDropdown = document.getElementById("auswahlRechner");
ausgewaelterRechnerDropdown.addEventListener("change", function () {
  var ausgewaelterRechner = ausgewaelterRechnerDropdown.value;
  if (ausgewaelterRechner == "anfangskapital") {
    document.getElementById("anfangskapitalClass").style.display = "none";
    document.getElementById("sparrateClass").style.display = "block";
    document.getElementById("laufzeitClass").style.display = "block";
    document.getElementById("endkapitalClass").style.display = "block";
    document.getElementById("zinssatzClass").style.display = "block";
  } else if (ausgewaelterRechner == "zinssatz") {
    document.getElementById("anfangskapitalClass").style.display = "block";
    document.getElementById("sparrateClass").style.display = "block";
    document.getElementById("laufzeitClass").style.display = "block";
    document.getElementById("endkapitalClass").style.display = "block";
    document.getElementById("zinssatzClass").style.display = "none";
  } else if (ausgewaelterRechner == "laufzeit") {
    document.getElementById("anfangskapitalClass").style.display = "block";
    document.getElementById("sparrateClass").style.display = "block";
    document.getElementById("laufzeitClass").style.display = "none";
    document.getElementById("endkapitalClass").style.display = "block";
    document.getElementById("zinssatzClass").style.display = "block";
  } else if (ausgewaelterRechner == "endkapital") {
    document.getElementById("anfangskapitalClass").style.display = "block";
    document.getElementById("sparrateClass").style.display = "block";
    document.getElementById("laufzeitClass").style.display = "block";
    document.getElementById("endkapitalClass").style.display = "none";
    document.getElementById("zinssatzClass").style.display = "block";
  } else if (ausgewaelterRechner == "sparrate") {
    document.getElementById("anfangskapitalClass").style.display = "block";
    document.getElementById("sparrateClass").style.display = "none";
    document.getElementById("laufzeitClass").style.display = "block";
    document.getElementById("endkapitalClass").style.display = "block";
    document.getElementById("zinssatzClass").style.display = "block";
  }
  console.log("Ausgewählter Rechner:", ausgewaelterRechner);
});
function berechnen() {
  var ausgewaelterRechner = document.getElementById("auswahlRechner").value;
}
function test() {}
