const AlterarCor = document.getElementById("colorButton");
AlterarCor.addEventListener("click", () => {
  let Mudar = `#${Math.floor(Math.random() * "05151").toString(16)}`;
  document.body.style.background = Mudar;
  let exibirCor = alert(`A próxima cor é em hexadecimal é ${Mudar}`);
});

let numeroDecimalAleatório = Math.random() * 10;
// console.log(numeroDecimalAleatório);

//Será gerado um numero DECIMAL(quebrado) entre 0.00000 e 10.

let numeroInteiroAleatório = Math.floor(Math.random() * 10);
console.log(numeroInteiroAleatório);

// Será gerado um numero INTEIRO aleatório entre 0 e 10.

/** 
 * **Math.floor ( )** → Arredonda um número decimal para **baixo**!!

*exemplos:* 

Math.floor ( 5.9 ) // 5

Math.floor ( 7.6 ) // 7

**Math.random( )** → Retorna um número decimal **aleatoriamente**!

*exemplos:* 

Math.random ( ) *(retorna entre 0 e 1) // 0.4829315**

Math.random ( ) * 10 *(retorna um número entre 0 á 10)* // 3.42043899 , // 7.9828491, // 8.35896321
 */
