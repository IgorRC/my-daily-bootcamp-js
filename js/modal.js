// Get the modal
var modal = document.getElementById("myModal");
let modal_content = document.querySelector(".modal-content");
// Get the button that opens the modal
var learning_input = document.querySelector(".learning-input");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-icon")[0];

// When the user clicks the button, open the modal 
learning_input.onclick = function() {
  modal.style.visibility = "visible";
  
  console.log(modal_content)
  modal_content.classList.add("move-model")
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.visibility = "hidden";
    modal_content.classList.remove("move-model")

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.visibility = "hidden";
    modal_content.classList.remove("move-model")

  }
}


function maximo(campo,limite){
    if(campo.value.length>=limite){
    campo.value=campo.value.substring(0,limite);
     }
    }