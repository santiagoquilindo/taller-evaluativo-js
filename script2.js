import { usuarios } from "./data2.js";

const tablaCuerpo = document.querySelector("#tabla-usuarios tbody");

usuarios.map(usuario => {
    let fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${usuario.nombre}</td>
        <td>${usuario.edad}</td>
        <td>${usuario.email}</td>
    `;
    tablaCuerpo.appendChild(fila);
});
