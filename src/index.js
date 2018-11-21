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
//cifrado en consola por trabajar
var ingreso= 2
function cifrando (str) {
var num = 0;
  let newStr = "";
  for ( let i=0; i<str.length; i++ ) {
    num = str.charCodeAt(i);
    if ( num >= 65) {
      num += ingreso;
    }
    if ( num > 90 ) {
      num -= 26;
    }
    newStr += String.fromCharCode(num);
  }
  return newStr;
}
 cifrando("HOLA");


//descifrado
const resultadoDescifrado = document.getElementById("resultado");
function descifrando (str , number) {
var num = 0;
  let newStr = "";
  for ( let i=0; i<str.length; i++ ) {
    num = str.charCodeAt(i);
    if ( num >= 65) {
      num -= number;
    }
    if ( num > 90 ) {
      num += 26;
    }
    newStr += String.fromCharCode(num);
  }
  return newStr;
}
vamosADescifrar.addEventListener("click", (e)=>{
  e.preventDefault();
  const numP = document.getElementById("put-Number1").value;
  const ingresaMensaje = document.getElementById("ingresa-mensaje").value;
  resultadoDescifrado.innerHTML = descifrando(ingresaMensaje , numP);
})
