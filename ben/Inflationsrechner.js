function Zukunft_Kaufkraft() {
    let Ursprungsbetrag = document.getElementById("UB").value;
    console.log(Ursprungsbetrag)

    let Inflationsrate = document.getElementById("IR").value;
    console.log(Inflationsrate)

    let Zeitraum = document.getElementById("ZR").value;
    console.log(Zeitraum);

    let Zukunft_Kaufkraft = Ursprungsbetrag * 1/Math.pow(1+Inflationsrate/100, Zeitraum);
    Zukunft_Kaufkraft = Math.round(Zukunft_Kaufkraft);
    console.log(Zukunft_Kaufkraft);

    document.getElementById("Output").innerHTML = Zukunft_Kaufkraft;
}
