window.cipher = {
  encode:function cifrando(ctr,number1) {
    const upMessageC = ctr.toUpperCase();
    let numC; /*a mayúsculas*/
      let newCtr = "";
      let texto1; /*para aplicar la fórmula*/
      for ( let i=0; i<upMessageC.length; i++ ) {
        numC = upMessageC.charCodeAt(i);
        if ( numC >= 65 && numC <= 90) {
           texto1 = (( numC - 65 + number1 ) % 26) + 65;
        }

        if ( numC===32){
          texto1= numC;
        }
        if( numC>=48 && numC<=57){
          texto1 = numC
        }
        newCtr += String.fromCharCode(texto1);
      }
      return newCtr;
    },
  decode: function descifrando(str,number) {
    const upMessageD = str.toUpperCase();
    let num;
      let newStr = "";
      let texto;
      for ( let i=0; i<upMessageD.length; i++ ) {
        num = upMessageD.charCodeAt(i);
        if ( num >= 65 && num <= 90) {
           texto = (( num - 90 - number ) % 26) + 90;
        }
        if ( num===32){
          texto= num;
        }
        if( num>=48 && num<=57){
          texto = num
        }
        newStr += String.fromCharCode(texto);
      }
      return newStr;
    },
};
