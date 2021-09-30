//funcion que genera numeros aleatorios

let obtenumeroaleatorio = size => {
    return Math.floor(Math.random() * size); //quita numero decial y lo convierte a entero 
}

//funcion que se alcanze a medir dos puntos donde esta el tesoro 

let obtenerdistancia = (e, target) => { //e evento osea del click y target de donde esta el tesoro
    let diffX = e.offsetX - target.x; //difetencia del eje de las x
    let diffY = e.offsetY - target.y; //diferencia en eje de las y 
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
}


//funcion para darle una pista si esta muy lejos o muy cerca 

let obtnerpistadisntacia = distancia => {
    if (distancia < 30) {
        return "esta muy cerca!!"
    } else if (distancia < 40) {
        return "muy caliente!!"
    } else if (distancia < 60) {
        return "caliente!!"
    } else if (distancia < 100) {
        return "calido "
    } else if (distancia < 100) {
        return "frio"
    } else if (distancia < 360) {
        return "demasiado frio"
    } else {
        return "congelado"
    }
}