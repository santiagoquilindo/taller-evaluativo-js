let pro = [
    { id: 1, producto: 'leche' },
    { id: 2, producto: 'arequipe' },
    { id: 3, producto: 'tomate' },
    { id: 4, producto: 'verdura' },
    { id: 5, producto: 'naranja' },
]



pro.map((tarea) => {
    const elemento = document.createElement('li');
    const buton = document.createElement('button');
    buton.textContent = 'Eliminar';
    buton.addEventListener('click', () => {
        elemento.remove();
    });
    elemento.textContent = tarea.producto;
    elemento.appendChild(buton);
    document.querySelector('#lista').appendChild(elemento);
});