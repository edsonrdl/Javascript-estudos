 function somar(){
    var n1=document.getElementById('txtn1');
    console.log(n1);
    var n2=document.getElementById('txtn2');
    console.log(n2);
    var numb1=Number(n1.value);
    console.log(numb1);
    var numb2=Number(n2.value);
    console.log(numb2);
var soma=numb1+numb2;
resu.innerHTML= `Resultado da soma é : ${soma}`
 };

