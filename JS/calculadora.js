'use strict';


let botonSumar;

botonSumar = document.getElementById("boton-sumar");

botonSumar.addEventListener("click", Sumar);

function Sumar()
{
    let numero1;
    let numero2;
    let resultado;

    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;
    resultado = document.getElementById("resultado");

    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);

    if(isNaN(numero1) == false && isNaN(numero2) == false)
    {
        resultado.innerHTML = `Resultado: ${(numero1+numero2)}`;
        resultado.style.color = "blue";
    }
    else if(numero1 == " " || numero2 == " ")
    {
        resultado.innerHTML = "Resultado: Para continuar ingrese ambos operando";
        resultado.style.color = "red";
    }
    else
    {
        resultado.innerHTML = "Resultado: Ingrese solo numeros";
        resultado.style.color = "red";
    }

}