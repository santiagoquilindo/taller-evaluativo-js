let carros = [
    { marca: 'Toyota', modelo: 'Corolla' },
    { marca: 'Honda', modelo: 'Civic' },
    { marca: 'Ford', modelo: 'Mustang' },
    { marca: 'Chevrolet', modelo: 'Camaro' },
];

carros.map((carro) => {
    let tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta');

    let marcaTitulo = document.createElement('h2');
    marcaTitulo.textContent = carro.marca;

    const modeloDescripcion = document.createElement('p');
    modeloDescripcion.textContent = carro.modelo;

    tarjeta.appendChild(marcaTitulo);
    tarjeta.appendChild(modeloDescripcion);

    document.body.appendChild(tarjeta);
});