const planElegido = document.getElementById("plan");
const botonElegir = document.getElementById("boton-elegir");
const listaDisplay = document.getElementById("lista-display");

botonElegir.addEventListener("click", cargarLista);

function cargarLista() {
    listaDisplay.innerHTML = "";
    if(planElegido.value === "basico") {
        basico.forEach(item => {
            const libro = document.createElement("p");
            libro.innerText = item;
            listaDisplay.appendChild(libro);
        });
    } else if(planElegido.value === "clasico") {
        clasico.forEach(item => {
            const libro = document.createElement("p");
            libro.innerText = item;
            listaDisplay.appendChild(libro);
        });
    } else if(planElegido.value === "moderno") {
        moderno.forEach(item => {
            const libro = document.createElement("p");
            libro.innerText = item;
            listaDisplay.appendChild(libro);
        });
    } else if(planElegido.value === "contemporaneo") {
        contemporaneo.forEach(item => {
            const libro = document.createElement("p");
            libro.innerText = item;
            listaDisplay.appendChild(libro);
        });
    }
    console.log(planElegido.value);
}


// LISTAS

const basico = [
    "La Biblia",
    "La Odisea (Homero)",
    "El Banquete (Platón)",
    "La Eneida (Virgilio)",
    "Confesiones (S. Agustín)",
    "La Divina Comedia (Dante)",
    "Hamlet (Shakespeare)",
    "El Quijote (Cervantes)",
    "Crimen y castigo (Dostoievski)",
    "Guerra y paz (Tolstoi)",
    "El extranjero (Camus)",
    "El Aleph (Borges)",
    "1984 (George Orwell)"
]
const clasico = [
    "La Biblia",
    "La Odisea (Homero)",
    "Tragedias (Esquilo)",
    "Medea (Eurípides)",
    "Edipo Rey (Sófocles)",
    "Comedias (Aristófanes)",
    "El Banquete (Platón)",
    "La Eneida (Virgilio)",
    "Odas (Horacio)",
    "Las Metamorfosis (Ovidio)",
    "Vidas paralelas (Plutarco)",
    "Diálogos de los dioses (Luciano)",
    "Confesiones (S. Agustín)"
]
const moderno = [
    "Poema del Mio Cid",
    "La Divina Comedia (Dante)",
    "Hamlet (Shakespeare)",
    "El Quijote (Cervantes)",
    "El paraíso perdido (Milton)",
    "Robinson Crusoe (Daniel Defoe)",
    "Los viajes de Gulliver (Jonathan Swift)",
    "Fausto (Goethe)",
    "Orgullo y prejuicio (Jane Austen)",
    "Cuentos (Edgar Allan Poe)",
    "Cumbres borrascosas (Emily Bronte)",
    "Moby Dick (Melville)",
    "Hojas de hierba (W. Whitman)",
    "Crimen y castigo (Dostoievski)",
    "Guerra y paz (Tolstoi)",
    "Las aventuras de Tom Sawyer (Mark Twain)",
    "Cuentos (Chéjov)",
    "Prosas profanas (Rubén Darío)"
]
const contemporaneo = [
    "El castillo (Kafka)",
    "La montaña mágica (Thomas Mann)",
    "Al faro (Virginia Woolf)",
    "Romancero gitano (García Lorca)",
    "Poemas (Pessoa)",
    "Absalón, Absalón (Faulkner)",
    "Finnegan's Wake (James Joyce)",
    "El extranjero (Camus)",
    "Esperando a Godot (Beckett)",
    "El Aleph (Borges)",
    "1984 (George Orwell)",
    "El Viejo y el mar (Hemingway)",
    " Pedro Páramo (Juan Rulfo)"
]