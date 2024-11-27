import { obtenerDatos } from "./api6.js";

obtenerDatos().then(function (usuarios) {
    let tabla = document.getElementById("tabla-usuarios");
    let usuariosFiltrados = usuarios.filter(function (usuario) {
        return usuario.id < 5;
    });
    usuariosFiltrados.forEach(function (usuario) {
        let tr = document.createElement("tr");
        let tdNombre = document.createElement("td");
        tdNombre.textContent = usuario.name;
        tr.appendChild(tdNombre);

        let tdEmail = document.createElement("td");
        tdEmail.textContent = usuario.email;
        tr.appendChild(tdEmail);

        tabla.appendChild(tr);
    });
});
