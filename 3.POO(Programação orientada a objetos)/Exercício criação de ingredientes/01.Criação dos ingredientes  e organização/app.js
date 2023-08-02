
var ingredientes=['mel','água','sal','mostarda'];
var modificado=[]//sem esse modificado os ingredientes permanecem sem a alteração e com ele vazio no final ele vai receber as alterações 
for(var i=0;i<ingredientes.length;i++){
  var letraInicial= ingredientes[i].charAt(0).toUpperCase();
  var restoTexto= ingredientes[i].slice(1);
  var resultado =letraInicial+restoTexto;
  modificado[i]=resultado;//vai receber o resultado modificado 
}
//  ordenado=modificado.sort(); vai fazer a ordernação invertido 
 var ordenado=modificado.sort(function(a,b){
  return a.localeCompare(b); //vai considerar a comparação de a com b referente ao idioma do navegador//
 }) //(a,b)são algoritmos de comparação colocados na função //
 console.log(ordenado)