function human() {
let sum = parseFloat(document.getElementById("renteein").value) - parseFloat(document.getElementById("alter").value);
document.getElementById("arbeitsjahre").innerText = sum;
let f = Math.pow(parseFloat(document.getElementById("steigerung").value) * parseFloat(document.getElementById("gehalt").value),sum);
document.getElementById("vinfla").innerText = f;


}
