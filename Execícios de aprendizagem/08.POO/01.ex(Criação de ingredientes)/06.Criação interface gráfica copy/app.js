import { ingredientes } from "./ingredientes.js";
import modificador from "./modificador.js";

let ingredientesOrdenados= modificador.ordenar(ingredientes,'nome');
let ingredientesCapitalizados=modificador.capitalizar(ingredientes,'nome')
let containerIngredientes= document.getElementById('container-ingredientes')

for(let ingrediente of ingredientesCapitalizados){
   let textoHTML=`
   <div class="ingredientes">
    <img src="img/${ingrediente.img}"/>
    <p class="nome-ingrediente">Agrião</p>
    </div> `;

    containerIngredientes.innerHTML+=textoHTML;
  
}

/* <div class="ingredientes">
    <img src="img/agriao.png"/>
    <p class="nome-ingrediente">Agrião</p>
    </div> */