const buttom=document.getElementById("b");
var numero1=document.getElementById("Num1");
var numero2=document.getElementById("Num2");


buttom.addEventListener("click", multiplicar);

function multiplicar(){ 
var mult= parseInt(numero1.value)*parseInt(numero2.value);
alert("el resultado de la multiplicación es: "+mult);
}