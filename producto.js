class Producto {
    constructor(titulo, detalle, precio, stock, imagen) {
        this.titulo = titulo;
        this.detalle = detalle;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
    }
    getAddress() {
        return `Mi producto es ${this.titulo}`;
    }
}

// obtener el id del vehiculo
const url = window.location.search;
// console.log(url);

const urlParametro = new URLSearchParams(url);
//Accedemos a los valores ID
var id = urlParametro.get('id');

// Instanciar un objeto
const bmwProducto = new Producto(`BMW`, `Es Azul`, 40000000, 4, `https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${id}.jpg`);

// Crear el HTML dinámico
const productoHTML = `
<div class="card text-center" style="width: 18rem;">
  <img src="${bmwProducto.imagen}" class="card-img-top" alt="Imagen del producto">
  <div class="card-body">
    <h5 class="card-title">${bmwProducto.titulo}</h5>
    <h4 class="card-price">$ ${bmwProducto.precio}</h4>
    <p class="card-text">${bmwProducto.detalle}</p>
    <p class="card-text">Stock: ${bmwProducto.stock}</p>
  </div>
</div>`;

// Insertar el contenido en el h1 de producto.html
document.querySelector("main").innerHTML = productoHTML;
