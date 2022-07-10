const botonJugar = document.getElementById("boton-jugar");
const containerJuego = document.getElementById("container-juego");
const containerObras = document.getElementById("container-obras");
const containerAutores = document.getElementById("container-autores");

let obrasRandom = [];
let autoresRandom = [];
let contadorDeObras = 4;


const obras = [
    "La Odisea",
    "La Eneida",
    "La Divina Comedia",
    "Don Quijote",
    "Hamlet",
    "Crimen y Castigo",
    "El Aleph",
    "El Extranjero"
]

function valoresRandom() {
    for(let i = 1; i <= 4; i++) {
        let idRandom = Math.floor(Math.random() * obras.length + 1);
        if(obrasRandom.includes(idRandom)) {
            i--;
        } else if (!obrasRandom.includes(idRandom)) {
            obrasRandom.push(idRandom);
        }
    }
    return obrasRandom  
}

botonJugar.addEventListener("click", iniciarJuego);


function iniciarJuego() {
    containerJuego.classList.add("activo");
    botonJugar.style.display = "none";
    mostrarInfo();
}


function mostrarInfo() {
    let ids = valoresRandom();
    for(let i = 0; i <= 3; i++) {
        const obra = document.createElement("p");
        obra.setAttribute("id", `${ids[i]}`);
        obra.setAttribute("draggable", "true");
        obra.classList.add("obra");
        let obraDeLista = obras[ids[i] - 1];
        // obra.innerText = `Obra ${ids[i]}`;
        obra.innerText = `${obraDeLista}`;
        containerObras.appendChild(obra);
    }
    
    for(let i = 0; i <= 3; i++) {
        ids = ids.sort();
        const autor = document.createElement("img");
        autor.setAttribute("id", `${ids[i]}`);
        autor.setAttribute("src", `./img/${ids[i]}.jpg`)
        autor.setAttribute("alt", `Autor de ${obras[ids[i] - 1]}`)
        autor.classList.add("autor");
        containerAutores.appendChild(autor);
    }
}

let draggedId;

containerJuego.addEventListener("dragstart", (e) => {
    draggedId = e.target.id;
    e.target.classList.add("dragged");
})

containerJuego.addEventListener("dragend", (e) => {
    e.target.classList.remove("dragged");
})

containerJuego.addEventListener("dragover", (e) => {
    e.preventDefault();
})

containerJuego.addEventListener("dragenter", (e) => {
    
    let dragged = document.getElementById(`${draggedId}`);

    if(e.target.id === draggedId && e.target.tagName === "IMG") {
        e.target.style.display = "none";
        dragged.style.display = "none";
        contadorDeObras--;
    }

    if(contadorDeObras === 0) {
        finalJuego();
    }
})

function finalJuego() {
    
    const anuncio = document.createElement("h3");
    anuncio.innerText = "Ganaste!"
    containerJuego.removeChild(containerObras);
    containerJuego.removeChild(containerAutores);
    containerJuego.appendChild(anuncio);
    setTimeout(() => {
        window.location.reload();
    },4000)
}
