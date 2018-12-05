window.cipher = {
  encode:function cifrando(number1, cifrat) {
    let ascii;
      let newCifrat = "";
      let texto1; /*para aplicar la fórmula*/
      for ( let i=0; i<cifrat.length; i++ ) {
        ascii = cifrat.charCodeAt(i);
        if ( ascii >= 65 && ascii <= 90) {
           texto1 = (( ascii - 65 + number1 ) % 26) + 65;
        }
        if( ascii>=32 && ascii<=63){
          texto1 = ascii;
        }
        if ( ascii >= 97 && ascii <= 122) {
          texto1 = (( ascii - 97 + number1 ) % 26) + 97;
       }
        newCifrat += String.fromCharCode(texto1);
      }
      return newCifrat;
    },
  decode: function descifrando(number,descifrat) {
    let asciiD;
      let newDescifrat = "";
      let texto;
      for ( let i=0; i<descifrat.length; i++ ) {
        asciiD = descifrat.charCodeAt(i);
        if ( asciiD >= 65 && asciiD <= 90) {
           texto = (( asciiD - 90 - number ) % 26) + 90;
        }
        if ( asciiD>=32 && asciiD<=63){
          texto= asciiD;
        }
        if ( asciiD >= 97 && asciiD <= 122) {
          texto = (( asciiD - 122 - number ) % 26) + 122;
       }
       newDescifrat += String.fromCharCode(texto);
      }
      return newDescifrat;
    },
};
