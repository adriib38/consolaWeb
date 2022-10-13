import { climaBuscarCiudad, localTime, translate, user } from './apis.js';


function comandoNoValido(){
    document.getElementById('output').innerHTML += `
    <p class="output">
        <span class="user">${user}</span>
        Comando no valido. Usa >help
    </p>
    `;
    
}

function ayuda(){
    document.getElementById('output').innerHTML += `
    <p class="output">
        > clima["ciudad"], ["pais"]
        <br>
        > hora["ciudad"], ["pais"]
        <br>
        > traduce["idioma origen"], ["idioma destino"], ["texto a traducir"]
    </p>
    `;  
}

function btnBuscar(ele) {
    let value = ele.value;
    console.log(value);
    let comando = value.split(", ");

    switch(comando[0]) {
        case "clima":
            climaBuscarCiudad(comando[1]);
          break;
        case "hora":
            localTime(comando[1]);
            break;
        case "help":
          ayuda();
          break;
        case "traduce":
            let aTraducir = "";
            for (let i = 3; i < comando.length; i++) {
                aTraducir += " "+comando[i];
            }
            translate(comando[1], comando[2], aTraducir);
            break;
        default:
          comandoNoValido();
    } 
    ele.value = '';

}

document.getElementById("input_text").onkeydown = function() {
    search(this);
};
function search(ele) {
    if(event.key === 'Enter') {
       
        btnBuscar(ele);        
    }
}