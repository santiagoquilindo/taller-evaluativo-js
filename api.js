// api.js
export function obtenerDatos() {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (datos) {
            return datos;
        });
}
