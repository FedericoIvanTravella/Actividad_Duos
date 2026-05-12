import { DB } from "./db.js"

function TraerDatos(Datos) {
    
    let contenedor = document.querySelector('.contenedor')
    contenedor.innerHTML = "";

    Datos.forEach(i => {
        let ContenedorAux = document.createElement('div')
        ContenedorAux.className = 'tarjetas'
        ContenedorAux.innerHTML =
            `
        <h1>${i.Nombre}</h1>
        <h2>${i.Precio}</h2>
        <h3>${i.Stock}</h3>
        ${i.Stock <= 3 ? '<p Style="Color:Red">Bajo Stock </p>' : ""}
        <p>${i.Descripcion}</p>
        <img src="${i.Imagen}" alt="img">
        <button onclick="agregarfavorito()" class="btnfav">💕</button>

    `
        contenedor.appendChild(ContenedorAux)
    });

}

TraerDatos(DB)

let Filtro= document.querySelector('#Filtro')
let Contenedor= document.querySelector('.contenedor')

Filtro.addEventListener('keyup', function(){
    let Filtros= DB.filter(i=>i.Nombre.toLowerCase().includes(Filtro.value.toLocaleLowerCase()))
    TraerDatos(Filtros)
    if (Filtros.length>0) {
        TraerDatos(Filtros)
            
    } else {
        Contenedor.innerHTML=`<p>Producto NO Encontrado</p>`   
    }

})

let contador= 0;

window.agregarfavorito=function() {
    contador++;
    document.getElementById('fav').innerText=contador;
}
