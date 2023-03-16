function clicar(){
    var mouseclick =document.getElementById('area')
    mouseclick.innerText='Clicou!';
    mouseclick.style.background='blue';
    mouseclick.style.transition='1s';
}
function entrou(){
    var mouseEntrar=document.getElementById('area')
    mouseEntrar.innerText='Entrou!'
    mouseEntrar.style.background='green';
    mouseEntrar.style.transition='1s';
    
}
function saiu(){
    var mouseSaiu=document.getElementById('area')
    mouseSaiu.innerText='saiu!';
    mouseSaiu.style.background='yellow';
    mouseSaiu.style.transition='1s';
}
