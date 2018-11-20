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
const numP = document.getElementById("put-Number1").value;
const ingresaMensaje = document.getElementById("ingresa-mensaje");
const vamosADescifrar = document.getElementById("vamos-descifrar");
function descifrando (str) {
  const num = 0;
  let newStr = "";
  for ( let i=0; i<str.length; i++ ) {
    num = str.charCodeAt(i);
    if ( num >= 65) {
      num += numP;
    }
    if ( num > 90 ) {
      num -= 26;
    }
    newStr += String.fromCharCode(num);
  }
  return newStr
}

vamosADescrifrar.addEventListener("click", (e)=>{
  e.preventDefault();
  alert("t");
  const resultado = descifrado(ingresaMensaje.value);
  alert(resultado);
  ingresaMensaje.innerHTML = resultado;
})
