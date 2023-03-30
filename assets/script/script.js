function convert() {
    let peso = parseFloat(document.getElementById("peso").value);
    let usd = 0.018 * peso;
    let yen = 2.43 * peso;
    let won = 23.87 * peso;
    let sgd = 0.024 * peso;
    let cad = 0.025 * peso;

    document.getElementById("usd").innerHTML = usd;
    document.getElementById("yen").innerHTML = yen;
    document.getElementById("won").innerHTML = won;
    document.getElementById("sgd").innerHTML = sgd;
    document.getElementById("cad").innerHTML = cad;
}