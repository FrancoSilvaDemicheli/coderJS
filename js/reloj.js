const mostrarReloj = ()=> {

    //Capturo la fecha
    let fecha = new Date();
    // console.log(fecha);

    //uso el metodo para tomar las horas de la fecha capturada
    let hora = formatoHora(fecha.getHours());
    // console.log(hora);

    //lo mismo para los minutos y los segundos
    let minutos = formatoHora(fecha.getMinutes());
    console.log(minutos);    
    let segundos = formatoHora(fecha.getSeconds());
    
    //Creo el código para mostrar en mi html la hora capturada
    document.getElementById('hora').innerHTML =
    `
    ${hora} : ${minutos} : ${segundos} 
    `
}

//creo una funcion para agregarle un 0 adelante a la hora cuando sea menor a 10 para que quede mejor
const formatoHora = (hora) => {
    if (hora < 10){

        hora = `0` + hora;

    }
    return hora;

}
// setInterval ejecuta una funcion cada determinado intervalo de tiempo en ms.
//de esta manera el reloj se actualiza a cada segundo y muesta la hora exacta constantemente
setInterval(mostrarReloj,1000);