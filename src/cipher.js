window.cipher = {
  encode:function cifrando(number1, ctr) {
    let numC;
      let newCtr = "";
      let texto1; /*para aplicar la fórmula*/
      for ( let i=0; i<ctr.length; i++ ) {
        numC = ctr.charCodeAt(i);
        if ( numC >= 65 && numC <= 90) {
           texto1 = (( numC - 65 + number1 ) % 26) + 65;
        }
        if( numC>=32 && numC<=63){
          texto1 = numC;
        }
        if ( numC >= 97 && numC <= 122) {
          texto1 = (( numC - 97 + number1 ) % 26) + 97;
       }
        newCtr += String.fromCharCode(texto1);
      }
      return newCtr;
    },
  decode: function descifrando(number,str) {
    let num;
      let newStr = "";
      let texto;
      for ( let i=0; i<str.length; i++ ) {
        num = str.charCodeAt(i);
        if ( num >= 65 && num <= 90) {
           texto = (( num - 90 - number ) % 26) + 90;
        }
        if ( num>=32 && num<=63){
          texto= num;
        }
        if ( num >= 97 && num <= 122) {
          texto = (( num - 122 - number ) % 26) + 122;
       }
        newStr += String.fromCharCode(texto);
      }
      return newStr;
    },
};
