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
                ${localStorage.getItem("email") ? `
                    <div class="agregar">
                        <div class="input-group">
                            <button class="btn btn-secondary d-flex align-items-center justify-content-center" type="button" onclick="decreaseItem()">
                                <span class="material-symbols-outlined" style="color:white;">remove</span>
                            </button>
                            <input type="number" class="form-control" value="1" style="width: 50px; text-align: center;">
                            <button class="btn btn-secondary d-flex align-items-center justify-content-center" "type="button" onclick="increaseItem()">
                                <span class="material-symbols-outlined" style="color:white;">add</span>
                            </button>
                        </div>
                        <a class="btn btn-secondary m-3 d-flex align-items-center justify-content-center w-100 mx-auto" onclick="addItems()">
                            <span class="material-symbols-outlined" style="color:white;">shopping_cart</span>Agregar al carrito
                        </a>
                    </div>

                    `
        : `<a href="./login.html" class="btn btn-secondary col-12">Iniciar sesión para comprar</a>`}
            </div>
        </div>
        <div class="details_info">
            <h4 class="tit">Especificaciones</h4>
            <div class="especificaciones">
                <p>${producto.detail}</p>
            </div>
        </div>
    </div>
</div>
`;


document.querySelector("main").innerHTML = card;

const counter = document.querySelector(".input-group input")
const idProduct = Number(window.location.search.split("=")[1])
const product = data.find(item => item.id === idProduct)

function decreaseItem() {
    if (Number(counter.value) > 1) {
        counter.value = Number(counter.value) - 1;
    }
}
function increaseItem() {

    if (Number(counter.value) < product.stock) {
        counter.value = Number(counter.value) + 1;
    }
}
function addItems() {
    const idProduct = Number(window.location.search.split("=")[1]);
    const product = data.find(item => item.id === idProduct);
    const quantityToAdd = Number(counter.value);

    // Confirmación con Swal
    Swal.fire({
        text: "¿Estás seguro/a de que quieres agregar el producto al carrito?",
        confirmButtonText: "Sí",
        cancelButtonText: "No, mejor no",
        showCancelButton: true,
        confirmButtonColor: "#06f",
        cancelButtonColor: "#DB5079",
    }).then(result => {
        if (result.isConfirmed) {
            // Obtener el carrito actual
            const cart = JSON.parse(localStorage.getItem("cart")) || [];

            // Buscar el producto en el carrito
            const existingProductIndex = cart.findIndex(item => item.product.id === idProduct);

            if (existingProductIndex !== -1) {
                // Si ya existe, actualizamos la cantidad
                cart[existingProductIndex].quantity += quantityToAdd;
            } else {
                // Si no existe, lo agregamos
                cart.push({
                    product: product,
                    quantity: quantityToAdd,
                    img: product.img,
                });
            }

            // Actualizar el carrito en localStorage
            localStorage.setItem("cart", JSON.stringify(cart));

            // Calcular y actualizar la cantidad total de productos
            const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
            localStorage.setItem("quantity", totalQuantity);

            // Actualizar el contador en el DOM
            document.querySelector("#quantity").innerText = totalQuantity;

            // Reiniciar el contador de cantidad
            counter.value = "1";

            // Mostrar notificación de éxito
            Toastify({
                text: "Producto agregado al carrito",
                style: {
                    background: "#cacfd2",
                },
            }).showToast();
        }
    });
}




