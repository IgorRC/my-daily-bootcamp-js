let file = document.getElementById("file");
let formData = new FormData();
console.log(file);
file.addEventListener("change", function (elemento) {
  for (let i = 0; i < file.files.length; i++) {
    let miniature_id =
      "m" + Math.floor(Math.random() * 30000) + "_" + Date.now();
    console.log("dentro del for");
    createMiniature(file, i, miniature_id);
    formData.append(miniature_id, file.files[i]);
    console.log(formData.getElementById);
  }
  elemento.target.value = "";
});
let createMiniature = function (file, iterator, miniature_id) {
  let miniature = document.createElement("div");
  miniature.classList.add("miniature", miniature_id);
  miniature.dataset.id = miniature_id;
  miniature.setAttribute(
    "style",
    `background-image: url(${URL.createObjectURL(file.files[iterator])})`
  );
  document.querySelector(".preview-imagen").appendChild(miniature);
  createCloseButton(miniature_id);
};

let createCloseButton = function (miniature_id) {
  console.log("se creo close buton");
  let closeButton = document.createElement("div");
  closeButton.classList.add("close-miniature");
  closeButton.innerText = "DETELE";
  document.querySelector("." + miniature_id).appendChild(closeButton);
};

document.body.addEventListener("click", function (elemento) {
  if (elemento.target.classList.contains("close-miniature")) {
    elemento.target.parentNode.remove();
    formData.delete(elemento.target.parentNode.dataset.id);
  }
});

async function getImages() {
  let imagenAll = formData.values();
  let arrImageUrl = [];
  for (const imageFile of imagenAll) {
    const data = new FormData();
    data.append("file", imageFile); // agregan sus imagenes
    data.append("upload_preset", "sickfits");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/wesbostutorial/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    arrImageUrl.push(file.secure_url);
    console.log(file.secure_url); // url de la imagen
  }

  return arrImageUrl;
}
