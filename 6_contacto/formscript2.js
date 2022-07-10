const nombreOut = document.getElementById("nombre-out");
const ratingOut = document.getElementById("rating-out");

document.addEventListener("DOMContentLoaded", output);

function output () {
    const nombre = localStorage.getItem("Nombre");
    nombreOut.innerText = nombre;
    
    const rating = localStorage.getItem("Rating")
    ratingOut.innerText = rating;
}