const vamosAPagCifrar= document.getElementById("pag-cifrar");
vamosAPagCifrar.addEventListener("click", function pagCifrar(){
   document.getElementById("primera-Pag").style.display = "none";
   document.getElementById("segunda-Pag").style.display = "block";
})

const vamosAPagDescifrar= document.getElementById("pag-descifrar");
vamosAPagDescifrar.addEventListener("click", function pagDescifrar(){
   document.getElementById("primera-Pag").style.display = "none";
   document.getElementById("tercera-Pag").style.display = "block";
})

const vamosAPag1A= document.getElementById("a-pag1");
vamosAPag1A.addEventListener("click", function pag1(){
   document.getElementById("primera-Pag").style.display = "block";
   document.getElementById("segunda-Pag").style.display = "none";
})

const vamosAPag1B= document.getElementById("b-pag1");
vamosAPag1B.addEventListener("click", function pag1B(){
   document.getElementById("primera-Pag").style.display = "block";
   document.getElementById("tercera-Pag").style.display = "none";
})
//descifrado
const resultadoDescifrado = document.getElementById("resultado");

const vamosADescifrar = document.getElementById("vamos-descifrar");
vamosADescifrar.addEventListener("click", ()=>{
  const numP = document.getElementById("put-Number2").value;
  const ingresaMensaje = document.getElementById("ingresa-mensaje2").value;
  resultadoDescifrado.innerHTML = cipher.decode(ingresaMensaje,parseInt(numP));
})
//cifrado
const resultadoCifrado = document.getElementById("resultadoC");

const vamosACifrar = document.getElementById("vamos-cifrar");
vamosACifrar.addEventListener("click", ()=>{
  const numS = document.getElementById("put-Number1").value;
  const ingresaMensaje1 = document.getElementById("ingresa-mensaje").value;
  resultadoCifrado.innerHTML = cipher.encode(ingresaMensaje1,parseInt(numS));
})
