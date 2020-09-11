"use strict";

function multiplicar(a, b){
    return (a*b);
}

function sumar(a,b){
    return(a+b);
}

function dividir(a,b){
    return (a/b);
}

function restar(a,b){
    return (a-b);
}

function formula(a,b) {
    var x = sumar(a,b),
        y = restar(a,b);
    return(x/y);
}

formula(3,2);
dividir(formula(3,2), 2);