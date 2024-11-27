let table = document.createElement('table');
let headerRow = document.createElement('tr');
let headerId = document.createElement('th');
let headerName = document.createElement('th');

headerId.textContent = 'Id';
headerName.textContent = 'Name';

headerRow.appendChild(headerId);
headerRow.appendChild(headerName);

table.appendChild(headerRow);

datos.filter(user => user.id < 5).forEach(user => {
    let row = document.createElement('tr');
    let cellId = document.createElement('td');
    let cellName = document.createElement('td');

    cellId.textContent = user.id;
    cellName.textContent = user.name;


    row.appendChild(cellId);
    row.appendChild(cellName);


    table.appendChild(row);
});


document.body.appendChild(table);