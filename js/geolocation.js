let pais = "NONE";
let ciudad = "NONE";
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarPosicion, mostrarErrores, opciones);
} else {
    alert("Tu navegador no soporta la geolocalización, actualiza tu navegador.");
}

async function mostrarPosicion(posicion) {
    var latitud = posicion.coords.latitude;
    var longitud = posicion.coords.longitude;
    let respuesta = await fetch('https://eu1.locationiq.com/v1/reverse?key=pk.d7081966f4a73ff67138855cfeb0e4ec&lat='+latitud+'&lon='+longitud+'&format=json');

    let objetoUbicacion = await respuesta.json();
    pais = objetoUbicacion.address.town;
    ciudad = objetoUbicacion.address.country;
}

function mostrarErrores(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert('Permiso denegado por el usuario');
            break;
        case error.POSITION_UNAVAILABLE:
            alert('Posición no disponible');
            break;
        case error.TIMEOUT:
            alert('Tiempo de espera agotado');
            break;
        default:
            alert('Error de Geolocalización desconocido :' + error.code);
    }
}

var opciones = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 1000
};