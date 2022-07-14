let location_data = document.querySelector(".location-data");
let geolocation_message = document.querySelector(".geolocation-message");
let button_location = document.querySelector(".button-location");
let location_icon = document.querySelector(".button-location img");
button_location.addEventListener("click", calculateLocation);
let storage_location = localStorage.getItem("location");
geolocation_message.style.display = "none";

if (storage_location != null) {
  console.log(storage_location);
  showLocation();
}
function showLocation() {
  storage_location = localStorage.getItem("location");
  location_icon.style.backgroundColor = "rgb(240, 247, 255)";
  location_data.innerHTML = storage_location;
  geolocation_message.style.display = "block";
}
function calculateLocation() {
  if (storage_location != null) {
    location_icon.style.backgroundColor = "white";
    geolocation_message.style.display = "none";
    localStorage.removeItem("location");
    storage_location = null;
    return;
  }

  if (navigator.geolocation) {
    let options = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 1000,
    };
    navigator.geolocation.getCurrentPosition(savePosition, showErrors, options);
  } else {
    alert(
      "Tu navegador no soporta la geolocalización, actualiza tu navegador."
    );
  }
}
async function savePosition(position) {
  let { latitude, longitude } = position.coords;
  let response = await fetch(
    "https://eu1.locationiq.com/v1/reverse?key=pk.d7081966f4a73ff67138855cfeb0e4ec&lat=" +
      latitude +
      "&lon=" +
      longitude +
      "&format=json"
  );
  console.log(
    "https://eu1.locationiq.com/v1/reverse?key=pk.d7081966f4a73ff67138855cfeb0e4ec&lat=" +
      latitude +
      "&lon=" +
      longitude +
      "&format=json"
  );
  let responseJson = await response.json();
  console.log(responseJson);
  let { town, country } = responseJson.address;
  let location = " " + town + ", " + country;
  localStorage.setItem("location", location);
  showLocation();
}

function showErrors(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("Permiso denegado por el usuario");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Posición no disponible");
      break;
    case error.TIMEOUT:
      alert("Tiempo de espera agotado");
      break;
    default:
      alert("Error de Geolocalización desconocido :" + error.code);
  }
}
