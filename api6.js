export function obtenerDatos() {
    return fetch("https://jsonplaceholder.typicode.com/users")
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (usuarios) {
            return usuarios;
        });
}
