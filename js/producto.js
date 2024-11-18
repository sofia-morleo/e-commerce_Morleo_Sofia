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
                            <button class="btn btn-secondary d-flex align-items-center justify-content-center" "type="button" onclick="increaseItem()">
                                <span class="material-symbols-outlined" style="color:white;">add</span>
                            </button>
                            <input type="number" class="form-control" value="1" style="width: 50px; text-align: center;">
                            <button class="btn btn-secondary d-flex align-items-center justify-content-center" type="button" onclick="decreaseItem()">
                                <span class="material-symbols-outlined" style="color:white;">remove</span>
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
    function add() {
        // Obtener el carrito del localStorage
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const idProduct = Number(window.location.search.split("=")[1]);
        const product = data.find(item => item.id === idProduct);

        // Verificar si el producto ya existe en el carrito
        const existeIdEnCard = cart.some(item => item.product.id === idProduct);

        if (existeIdEnCard) {
            cart = cart.map(item => {
                if (item.product.id === idProduct) {
                    return {
                        ...item,
                        quantity: item.quantity + Number(counter.value)
                    };
                } else {
                    return item;
                }
            });
        } else {
            cart.push({ product: product, quantity: Number(counter.value), img: product.img });
        }


        counter.value = "1";// Reiniciar el valor del contador
        localStorage.setItem("cart", JSON.stringify(cart));

        // Calcular la cantidad total de productos en el carrito
        let quantity = cart.reduce((acumulado, actual) => acumulado + actual.quantity, 0);
        localStorage.setItem("quantity", JSON.stringify(quantity));

        // Actualiza
        const quantityTag = document.querySelector("#quantity");
        quantityTag.innerText = quantity;

        Toastify({
            text: "Agregaste producto/s al carrito de compras",
            style: {
                background: "#cacfd2 ",
            },
        }).showToast()
    }
    Swal.fire({
        text: "Estás segura/o de que estás segura/o de que querés agregar el producto al carrito?",
        confirmButtonText: "Si",
        cancelButtonText: "Ay no se! Tengo miedo",
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonColor: "#06f",
        cancelButtonColor: "#DB5079",
    }).then(result => {
        if (result.isConfirmed) {
            // Ejecutamos lo que queremos si nos dió ok!
            add()
        }
    })
}



