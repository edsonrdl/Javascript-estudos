    document.querySelector("#adicionar").addEventListener('click',adicionar_eventos);
    document.querySelector("#remover").addEventListener('click',remover_eventos);

    function adicionar_eventos(){
      let e=document.querySelector("#botao")
      e.addEventListener('click',executar_1)
      e.addEventListener('click',executar_2)
    }

    function executar_1(){
        let agora= new Date();
        document.querySelector("#titulo_1").textContent =agora.getSeconds();
    }
    function executar_2(){
        let agora= new Date();
        document.querySelector("#titulo_2").textContent =agora.getSeconds();
    }

    function remover_eventos(){
        document.querySelector("#botao").removeEventListener('click', executar_2);
    };
    