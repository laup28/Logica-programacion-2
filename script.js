document.querySelector("#boton").addEventListener("click", mostrarResultado);

function convertirFahrenheit(temperatura) {
    return (temperatura * 9/5) + 32;
}

function convertirKelvin(temperatura) {
    return temperatura + 273.15;
}

function mostrarResultado(){
    let laTemperatura = Number(document.querySelector("#info").value);
    let temperaturaEnFahrenheit = convertirFahrenheit(laTemperatura);
    let temperaturaEnKelvin = convertirKelvin(laTemperatura);
    
    let mensaje = "La temperatura en Fahrenheit es: " + temperaturaEnFahrenheit.toFixed(2) +
                  "<br>La temperatura en Kelvin es: " + temperaturaEnKelvin.toFixed(2);
    
    document.querySelector("#resultado").innerHTML = mensaje;
}
