const Euro = new Intl.NumberFormat('en-DE', {
    style: 'currency',
    currency: 'EUR',
});

let isOpen = false;

function zins(event) {
    event.preventDefault();
    const form = document.getElementById('form');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const result = (Math.pow(data.endkapital / data.anfangskapital, 1 / data.laufzeit) - 1) * 100;
    const resultHtml = document.getElementById('result');
    resultHtml.innerText = Number(result.toFixed(2)) + '%';
}

function zinseszins(event) {
    event.preventDefault();
    const form = document.getElementById('form');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const result =
        data.anfangskapital * Math.pow(1 + data.zinssatz / 100 / 12, 12 * data.laufzeit) +
        (data.sparrate * (Math.pow(1 + data.zinssatz / 100 / 12, 12 * data.laufzeit) - 1)) / (data.zinssatz / 100 / 12);
    const resultHtml = document.getElementById('result');
    const einzahlungenHtml = document.getElementById('einzahlungen');
    const zinsenHtml = document.getElementById('zinsen');
    resultHtml.innerText = Euro.format(Number(result.toFixed(2)));
    const einzahlungen = data.sparrate * 12 * data.laufzeit;
    einzahlungenHtml.innerText = Euro.format(einzahlungen + Number(data.anfangskapital));
    zinsenHtml.innerText = Euro.format(Number(result.toFixed(2)) - einzahlungen - Number(data.anfangskapital));
}

function toggleMenu() {
    isOpen = !isOpen;
    console.log(isOpen);

    const toggleBtn = document.getElementById('toggleButton');
    const links = document.getElementsByClassName('selection-button-mobile');

    if (isOpen) {
        toggleBtn.innerText = 'Close Menu';
        for (let link of links) {
            link.classList.remove('hide-element');
        }
    } else {
        toggleBtn.innerText = 'Open Menu';
        for (let link of links) {
            link.classList.add('hide-element');
        }
    }
}
