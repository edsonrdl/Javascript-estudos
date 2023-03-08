//       Operador	Operação	Exemplo
//       >	      Maior que	         (a > b)
//       <	      Menor que	         (a < b)
//       >=	      Maior ou igual a	 (a >= b)
//       <=	      Menor ou igual a	 (a <= b)
//       ==	      Igual a	         (a == b)
//       !=       Diferente de	     (a !== b)
//       ===	  Idêntico a	     (a === b)
//       !==      Não idêntico a	 (a !== b)
//       &&	      E/and	             (a && b)
//       ll	      Ou/or	             (a ll b)
// Diferença entre “==”(TESTA O VALOR) e “===”(tESTA O TIPO E O VALOR )
// É possível perceber na tabela acima, que existe tanto o símbolo de “igual a” (==), quanto o de “idêntico a” (===). Mas qual eu devo utilizar para cada situação? Se usarmos o operador “==” em uma condição, saberemos que ela só será verdadeira se o valor da esquerda for o mesmo valor da direita, por exemplo:

// javascript
// if (true == “true”) //retorna true
// if (10 == “10”) //retorna true
// if (true == true) //retorna true
// if (10 == 10) //retorna true
// Mas suponha que seja preciso fazer essa validação tendo certeza de que o número da direita é realmente um número, e não apenas possui o mesmo caractere. O que fazemos?

// É nessa hora que entra o símbolo de “idêntico a” (===). Ele não só compara os valores dos dois lados da equação, como também verifica se eles são do mesmo tipo. Por exemplo:

// javascript
// if (true === “true”) //retorna false
// if (10 === “10”) //retorna false
// if (true === true) //retorna true
// if (10 === 10) //retorna true

// E assim como os operadores “==” e “===”, usamos a mesma lógica para os seus inversos “!=” e “!==”. Veja a seguir:

// if (true != “true”) //retorna false
// if (4 != “4”) //retorna false
// if (true !== “true”) //retorna true
// if (4 !== “4”) //retorna true
// if (true !== true) //retorna false
// if (4 !== 4) //retorna false