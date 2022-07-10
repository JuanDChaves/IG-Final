const imgs = document.querySelectorAll(".img-item");

const modal = document.getElementById("modal");
const cerrarIcon = document.getElementById("cerrar");
const siguiente = document.getElementById("siguiente");
const anterior = document.getElementById("anterior");
const nombre = document.getElementById("nombre");
const imgItemMod = document.getElementById("img-item-mod");
const resumen = document.getElementById("resumen");

let id;

const nombres = [
    "Homero",
    "Virgilio",
    "Dante Alighieri",
    "Miguel de Cervantes",
    "William Shakespeare",
    "Fiodor Dostoievski",
    "Jorge Luis Borges",
    "Alber Camus"
]

const resumenes = [
    "Homero es el nombre dado al aedo (cantor de epopeyas) a quien tradicionalmente se atribuye la autoría de los principales poemas épicos griegos: la Ilíada y la Odisea.",
    "Virgilio fue un poeta romano, autor de la Eneida, las Bucólicas y las Geórgicas.",
    "Dante Alighieri fue un poeta y escritor italiano, conocido por escribir la Divina comedia, una de las obras fundamentales de la transición del pensamiento medieval al renacentista y una de las cumbres de la literatura universal.",
    "Cervantes fue un novelista, poeta, dramaturgo y soldado español. Es ampliamente considerado una de las máximas figuras de la literatura española. Fue el autor de El ingenioso hidalgo don Quijote de la Mancha, novela conocida habitualmente como El Quijote, ",
    "Shakespeare fue un dramaturgo, poeta y actor inglés. Conocido en ocasiones como el Bardo de Avon (o simplemente el Bardo), Shakespeare es considerado el escritor más importante en lengua inglesa y uno de los más célebres de la literatura universal.",
    "Dostoievski fue uno de los principales escritores de la Rusia zarista, cuya literatura explora la psicología humana en el complejo contexto político, social y espiritual de la sociedad rusa de la segunda mitad del siglo xix",
    "Jorge Luis Borges, fue un destacado escritor de cuentos, poemas y ensayos argentino, extensamente considerado una figura clave tanto para la literatura en habla hispana como para la literatura universal",
    "Camus fue un novelista, ensayista, dramaturgo, filósofo y periodista francés nacido en Argelia. Su pensamiento se desarrolla bajo el influjo de los razonamientos filosóficos de Schopenhauer, Nietzsche y el existencialismo alemán"
]

imgs.forEach((img) => {
    img.addEventListener("click", activarModal); 
});

siguiente.addEventListener("click", mas);
anterior.addEventListener("click", menos);

cerrarIcon.addEventListener("click", cerrarModal);

function activarModal(e) {
    modal.classList.add("modal-activo");
    id = e.target.id;
    id--;

    nombre.innerText = nombres[id];
    imgItemMod.setAttribute("src", `./img/${id + 1}.jpg`);
    imgItemMod.setAttribute("alt", `Imagen de ${nombre}`);
    imgItemMod.classList.add(`${id}`);
    resumen.innerText = resumenes[id];
}

function mas() {
    id++;  
    if (id === 8) {
        id = 0;
    }
    nombre.innerText = nombres[id];
    imgItemMod.setAttribute("src", `./img/${id + 1}.jpg`);
    imgItemMod.setAttribute("alt", `Imagen de ${nombre}`);
    resumen.innerText = resumenes[id];
}

function menos() {
    id--;  
    if (id < 0) {
        id = 7;
    }
    nombre.innerText = nombres[id];
    imgItemMod.setAttribute("src", `./img/${id + 1}.jpg`);
    imgItemMod.setAttribute("alt", `Imagen de ${nombre}`);
    resumen.innerText = resumenes[id];
}

function cerrarModal() {
    modal.classList.remove("modal-activo");
}