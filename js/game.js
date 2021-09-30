// constante el ancho y largo de nuestra imagen 
const WIDTH = 400;
const HEIGTH = 400;

//posicon aletoria del tesoro
//colocar el mapa del tesoro
let target = {

    x: obtenumeroaleatorio(WIDTH), //colocamos un numero aleatorio en ancho
    y: obtenumeroaleatorio(HEIGTH) //colocamos un numero aleatorio  en largo


};

let $map = document.getElementById('map'); //selecionamos el map de nuestra imagen por id y lo colocamos en una variable
let $distancia = document.querySelector('#distancia'); //enlazamos la distancia en html 
let clicks = 0; //click parea contarlos

//dandole un click el usuario un escuchador

$map.addEventListener('click', function(e) {
    console.log('click');
    clicks++; //se vayan sumando los click
    let distancia = obtenerdistancia(e, target); //la teoremade pitagoras //donde esta el mapa de tesoro y el evento
    let distanciaHint = obtnerpistadisntacia(distancia); //obtenemos la distancia de si estamos cerca o muy lejos del tesoro
    $distancia.innerHTML = `<h1>${distanciaHint}</h1>`; //mostramos si esta frio caliente en la pantalla

    if (distancia < 20) { //para que gane  
        alert(`Tesoro encontrado ${clicks} clicks!`);
        location.reload(); //refrescar la pagina con javascript
    }
});