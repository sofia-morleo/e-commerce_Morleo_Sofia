class Producto { //creo la clase donde se va a guardar las categorias del menu
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

// Obtener el id del vehiculo/ lo que enviamos en la url
const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get('prod'));  // Convertir a número entero


// buscar el producto que coincida con el id del url
const producto = data.find((prod) => prod.id === id);


// Crear el HTML dinámico para que este el navbar

  const card = `
        <div class="product">
        <div class="product_details">
            <div class="product_basico">
                <div class="img_prod">
                    <img src="${producto.img}" alt="${producto.title}">
                </div>
                <div class="product_tit">
                    <h1 class="titulo">${producto.title}</h1>
                    <div class="stock">
                        <p>Stock: <div class="stock_cant">${producto.stock}</div></p>
                        <div class="price_product">
                            $${producto.price.toLocaleString('es-ES')}
                        </div>
                    </div>
                    <div class="agregar">
                        <a href="index.html" class="btn btn-secondary" role="button" >Agregar</a>
                    </div>
                </div>
            </div>
            <div class="details_info">
                <h4 class="tit">Especificaciones</h4>
                <div class="especificaciones">
                    <p>
                    ${producto.detail}
                    </p>
                </div>
            </div>
        </div>
    </div>`;

  
  document.querySelector("main").innerHTML = card;
