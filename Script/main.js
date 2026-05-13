import { DB } from "./db.js"

function TraerDatos(Datos) {
    
    let contenedor = document.querySelector('.contenedor')
    contenedor.innerHTML = "";

    Datos.forEach(i => {
        let ContenedorAux = document.createElement('div')
        ContenedorAux.className = 'Tarjetas'
        ContenedorAux.innerHTML =
            `
        <h1>${i.Nombre}</h1>
        <h2>$${i.Precio}</h2>
        <p>${i.Descripcion}</p>
        <img src="${i.Imagen}" alt="img">
        <h3>Stock disponible: ${i.Stock}</h3>

    `
        contenedor.appendChild(ContenedorAux)
    });

}

TraerDatos(DB)
