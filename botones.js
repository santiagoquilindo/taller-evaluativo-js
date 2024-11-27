export function generarBotones() {
    const contenedor = document.getElementById("contenedor-botones");
    Array.from({ length: 5 }).forEach((_, indice) => {
        const boton = document.createElement("button");
        boton.textContent = `Botón ${indice + 1}`;
        boton.addEventListener("click", () => {
            console.log(`Botón ${indice + 1} clickeado`);
        });
        contenedor.appendChild(boton);
    });
}
