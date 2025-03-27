
let edad = prompt("POR FAVOR, VERIFICA TU EDAD:");
            
            if (edad === null) {
                alert("DEBES INGRESAR TU EDAD PARA CONTINUAR");
                location.reload(); 
            } else if (isNaN(edad) || edad.trim() === "") {
                alert("POR FAVOR, INGRESA UN NUMERO VALIDO.");
                location.reload();
            } else if (parseInt(edad) < 18) {
                alert("DEBES TENER AL MENOS 18 AÑOS PARA ACCEDER A ESTE SITIO.");
                document.body.innerHTML = "<h1>ACCESO DENEGADO</h1>";
            } else {
                alert("¡BIENVENIDO!");
}

let valores
let resultado
let dolar
let euro

function convertidor () {
let valores = parseInt(document.getElementById("valor").value);     
let resultado = 0;
let euro = 1400;
let dolar = 1250;
    
    if (document.getElementById("uno").checked) {
        resultado = valores * dolar; 
        alert ("El Cambio de Pesos a Dolares es: usd" +" "+ resultado);
    }
    else if (document.getElementById("dos").checked) {
        resultado = valores * euro;
        alert ("El Cambio de Pesos a Euros es: eur" +" "+resultado);
    }
    else {
        alert ("COMPLETA TODOS LOS DATOS PARA CONTINUAR")
    }        
}

