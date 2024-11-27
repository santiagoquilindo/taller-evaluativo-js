import { obtenerDatos } from "./api.js";

obtenerDatos().then(function (datos) {
  var lista = document.getElementById("lista-titulos");
  datos.forEach(function (post) {
    var li = document.createElement("li");
    li.textContent = post.title;
    lista.appendChild(li);
  });
});
