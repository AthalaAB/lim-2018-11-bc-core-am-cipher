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
const resultadoDescifrado = document.getElementById("resultado").value;
function descifrando(str,number) {
/*let num = 0;
  let newStr = "";
  for ( let i=0; i<str.length; i++ ) {
    num = str.charCodeAt(i);
    if ( num >= 65) {
      num -= number;
    }
    if ( num >= 90 ) {
      num += 26;
    }
    newStr += String.fromCharCode(num);
  }
  return newStr;
  */
  alert (number)
}
const vamosADescifrar = document.getElementById("vamos-descifrar");
vamosADescifrar.addEventListener("click", ()=>{
  //e.preventDefault();
  const numP = document.getElementById("put-Number2").value;
  const ingresaMensaje = document.getElementById("ingresa-mensaje2").value;
  resultadoDescifrado.innerHTML = descifrando(ingresaMensaje,numP);
})
