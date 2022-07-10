const formulario = document.getElementById("formulario");

let rating;
let plan = [];
let nombre;
let email;
let comentarios;

formulario.addEventListener("submit", enviar)

function enviar(e) {
    e.preventDefault();
     
    rating = formulario.rating.value;
    localStorage.setItem("Rating", rating);
    
    if (formulario.basico.checked) {
        plan.push(formulario.basico.value);
    } else if (!formulario.basico.checked && plan.includes(formulario.basico.value)) {
        plan.pop(formulario.basico.value);
    }
    
    if (formulario.clasico.checked) {
        plan.push(formulario.clasico.value);
    } else if (!formulario.clasico.checked && plan.includes(formulario.clasico.value)) {
        plan.pop(formulario.clasico.value);
    }
    
    if (formulario.moderno.checked) {
        plan.push(formulario.moderno.value);
    } else if (!formulario.moderno.checked && plan.includes(formulario.moderno.value)) {
        plan.pop(formulario.moderno.value);
    }
    if (formulario.contemporaneo.checked) {
        plan.push(formulario.contemporaneo.value);
    } else if (!formulario.contemporaneo.checked && plan.includes(formulario.contemporaneo.value)) {
        plan.pop(formulario.contemporaneo.value);
    }
    
    localStorage.setItem("Plan", plan);
    
    nombre = formulario.nombre.value;
    if(nombre !== "" && nombre.match(/^[A-Za-z]+$/)) {
        localStorage.setItem("Nombre", nombre);
    } else {
        alert("En nombre solo pueden ir letras, sin caracteres especiales!")

        return
    }
    
    email = formulario.email.value;
    if(email !== "" && email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        localStorage.setItem("Email", email);
    } else {
        alert("Tu dirección de email no tiene el formato correcto!")

        return
    }
    
    comentarios = formulario.comentarios.value;
    if(comentarios.length > 100) {
        alert("Tienes un límite de 100 caracteres para tu comentario");

        return
    } else {
        localStorage.setItem("Comentarios", comentarios);
    }

    setTimeout(() => window.location.href = "./gracias.html", 500);
}