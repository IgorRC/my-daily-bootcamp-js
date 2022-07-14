let buttonPublishLearning = document.querySelector(".modal-button");
let textAreaLearning = document.querySelector(".modal-textarea");
let spanLocationData = document.querySelector(".location-data");
let publicationsHTML = document.querySelector(".publications");
if (localStorage.getItem("publications") == null) {
  localStorage.setItem("publications", JSON.stringify([]));
}
renderPublications();
buttonPublishLearning.addEventListener("click", async () => {
  addPublications();
});
function getPublications() {
  return JSON.parse(localStorage.getItem("publications"));
}
async function addPublications() {
  let text = textAreaLearning.value;
  let imagesUrl = await getImages();
  let locationData = spanLocationData.innerHTML.split(",");
  console.log(imagesUrl);
  let publication = new Publication(
    text,
    imagesUrl,
    locationData[1],
    locationData[0]
  );
  let publications = getPublications();
  publications.push(publication);
  console.log(publications);
  localStorage.setItem("publications", JSON.stringify(publications));
}

function renderPublications() {
  let publications = getPublications();
  let publicationsTextHTML = "";
  for (let p of publications) {
    publicationsHTML.innerHTML = "";
    let imagesTextHTML = "";
    if (p.imagesUrl.length == 3) {
    } else if (p.imagesUrl.length == 2) {
    } else {
    }
    for (let imgURL of p.imagesUrl) {
      imagesTextHTML += `<img src="${imgURL}" alt="images user" />`;
    }
    let publicationHTML = `<div class="public"> <button class="public-button"> <img src="assets/icons/dots.svg" alt="Menú de Opciones" /> </button> <div class="public-date"> <div class="date-conte"> <a class="link-public" href="https://twitter.com/yummta?lang=es" target="_blank" > <img class="date-img" src="assets/profile.jpg" alt="Paul Portillo" /> </a> <div class="date-text"> <a class="link-public" href="https://twitter.com/yummta?lang=es" target="_blank" > <h3>Paul Portillo</h3> </a> <p>04 de Julio, 2022</p> </div> </div> </div> <div class="text"> <p>${p.text}</p> </div> <div class="images"> ${imagesTextHTML}</div> </div>`;
    publicationsTextHTML += "\n" + publicationHTML;
  }
  publicationsHTML.innerHTML = publicationsTextHTML;
}
class Publication {
  ubication = {
    country: null,
    city: null,
  };
  text;
  imagesUrl;
  constructor(text, imagesUrl, country, city) {
    this.text = text;
    this.imagesUrl = imagesUrl;
    this.ubication.country = country;
    this.ubication.city = city;
  }
}
