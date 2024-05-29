function calculate(event) {
  event.preventDefault();
  const form = document.getElementById("form");
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  const result =
    (Math.pow(data.endkapital / data.anfangskapital, 1 / data.laufzeit) - 1) *
    100;
  const resultHtml = document.getElementById("result");
  resultHtml.innerText = Number(result.toFixed(2)) + "%";
}
