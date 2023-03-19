
    var eventoTest =document.getElementById('area');
    eventoTest.addEventListener('clicou',)
    eventoTest.addEventListener('entrou',)
    eventoTest.addEventListener('saiu',)
 
    function clicar(){
   
        eventoTest.innerText='Clicou!';
        eventoTest.style.background='blue';
        eventoTest.style.transition='1s';
        eventoTest.style.zoom='1.3';
    }
    function entrou(){
       
        eventoTest.innerText='Entrou!'
        eventoTest.style.background='green';
        eventoTest.style.transition='1s';
        eventoTest.style.borderRadius='10px';
        eventoTest.style.zoom='0';
        
    }
    function saiu(){
        eventoTest.innerText='saiu!';
        eventoTest.style.background='yellow';
        eventoTest.style.transition='1s';
        eventoTest.style.borderRadius='0';
        eventoTest.style.zoom='0';

    }
    