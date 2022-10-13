export const pi = 3.1416;

export let user = "usr12:~$";

export function climaBuscarCiudad(c){
      
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a76e9417efmshcda5d002ee6138cp1277e6jsnf793887e09a5',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    
    fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${c}`, options)
        .then(response => response.json())
        .then(response => mostrarClima(response))
        .catch(err => console.error(err));
        
    
    }

    function mostrarClima(r){
        let nombre = r["location"]["name"];
        let pais = r["location"]["country"];
        let temp = r["current"]["temp_c"];
        let icon = r["current"]["condition"]["icon"];


        document.getElementById('output').innerHTML += `
        <p class="output">
        <span class="user">${user}</span>
        ${nombre} ${temp}ºC - ${pais}
        <img src="${icon}" width="35px">
        </p>
        `;
}


export function localTime(d){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a76e9417efmshcda5d002ee6138cp1277e6jsnf793887e09a5',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    
    fetch(`https://weatherapi-com.p.rapidapi.com/timezone.json?q=${d}`, options)
        .then(response => response.json())
        .then(response => respuestaLocalTime(response))
        .catch(err => print(err));

    }

    function respuestaLocalTime(r){
        console.log(r);
        let localtime = r["location"]["localtime"];
        let zone = r["location"]["tz_id"];
    
        document.getElementById('output').innerHTML += `
        <p class="output">
        <span class="user">${user}</span>
        ${localtime} zona: ${zone}
        </p>
        `;
    }


export function translate(idiomaOrigen, idiomaDestino, text){
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '79c1399bb4msh98f55315e3d967cp1c0c75jsnaaf3c0300f3b',
            'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com'
        },
        body: '{"q":"'+text+'","source":"'+idiomaOrigen+'","target":"'+idiomaDestino+'"}'
       
    };
    
    fetch('https://deep-translate1.p.rapidapi.com/language/translate/v2', options)
        .then(response => response.json())
        .then(response => mostrarTranslate(response))
        .catch(err => console.error(err));
    }

    function mostrarTranslate(r){
        console.log(r);
        let traduccion = r["data"]["translations"]["translatedText"];
    
        document.getElementById('output').innerHTML += `
        <p class="output">
        <span class="user">${user}</span>
        ${traduccion}
        </p>
        `;
    }

