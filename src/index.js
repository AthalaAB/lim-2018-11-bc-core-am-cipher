function pagCifrar(){
   document.getElementById("primera-Pag").style.display = "none";
   document.getElementById("segunda-Pag").style.display = "block";
}
function pagDescifrar(){
   document.getElementById("primera-Pag").style.display = "none";
   document.getElementById("tercera-Pag").style.display = "block";
}
function pag1(){
   document.getElementById("primera-Pag").style.display = "block";
   document.getElementById("segunda-Pag").style.display = "none";
}
function pag1B(){
   document.getElementById("primera-Pag").style.display = "block";
   document.getElementById("tercera-Pag").style.display = "none";
}
//pasar a cipher.js
//descifrado
const resultadoDescifrado = document.getElementById("resultado");
function descifrando(str,number) {
let num;
  let newStr = "";
  let texto;
  for ( let i=0; i<str.length; i++ ) {
    num = str.charCodeAt(i);
    if ( num >= 65 && num <= 90) {
       texto = (( num - 90 - number ) % 26) + 90;
    }
    newStr += String.fromCharCode(texto);
  }
  return newStr;
}
const vamosADescifrar = document.getElementById("vamos-descifrar");
vamosADescifrar.addEventListener("click", ()=>{
  const numP = document.getElementById("put-Number2").value;
  const ingresaMensaje = document.getElementById("ingresa-mensaje2").value;
  resultadoDescifrado.innerHTML = descifrando(ingresaMensaje,parseInt(numP));
})
//cifrado
const resultadoCifrado = document.getElementById("resultadoC");
function cifrando(ctr,number1) {
let numC;
let texto1;
let newCtr = "";
  for ( let i=0; i<ctr.length; i++ ) {
    numC = ctr.charCodeAt(i);
    if ( numC >= 65 && numC <= 90) {
       texto1 = (( numC - 65 + number1 ) % 26) + 65;
    }
    newCtr += String.fromCharCode(texto1);
  }
  return newCtr;
}
const vamosACifrar = document.getElementById("vamos-cifrar");
vamosACifrar.addEventListener("click", ()=>{
  const numS = document.getElementById("put-Number1").value;
  const ingresaMensaje1 = document.getElementById("ingresa-mensaje").value;
  resultadoCifrado.innerHTML = cifrando(ingresaMensaje1,parseInt(numS));
})
