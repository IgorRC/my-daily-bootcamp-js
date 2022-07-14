let popUpBox = document.getElementById("popUpBox");
let estabotonoculto = true;
let public_button = document.querySelector(".public-button");
let modal_button_delete = document.getElementById("modal-button-delete");
let closemodal = document.getElementById("closemodal");

public_button.addEventListener("click", togglebuttondots);
function togglebuttondots() {
  console.log("asd");
  if (estabotonoculto) {
    popUpBox.style.display = "block";
    estabotonoculto = false;
  } else {
    popUpBox.style.display = "none";
    estabotonoculto = true;
  }
}

popUpBox.addEventListener("click", modaldelete);

function modaldelete() {
  modal_button_delete.style.display = "flex";
  popUpBox.style.display = "none";
}

closemodal.addEventListener("click", cerrar_modal);
function cerrar_modal() {
  modal_button_delete.style.display = "none";
}
