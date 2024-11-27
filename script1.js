function cambiarFondo() {
    let lista = document.getElementById('mi-lista'); 
    let elementos = lista.children;
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].style.backgroundColor = 'yellow'; 
    }
    return elementos; 
}

cambiarFondo();
