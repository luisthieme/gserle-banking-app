let a = ''; // Ursprungsbetrag
let b = ''; // Inflationsrate
let c = ''; // Zeit
let Berechnungsart = ''; 
let finish = false;

const out = document.querySelector('.calc-screen p');
function clearAll () {
    a = ''; // Ursprungsbetrag
    b = ''; // Inflationsrate
    c = ''; // Zeit
    Berechnungsart = ''; 
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ls').onclick = clearAll;

document.querySelector('.Knopf').onclick = (Event) => {
   if(!Event.target.classList.Contains('Kn')) return;
   if(Event.target.classList.Contains('ls')) return;

   get ()
}