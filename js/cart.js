const cardsSection = document.querySelector("#cart #cards");
const btnClearCart = document.querySelector("#btn-clear-cart");
const btnCheckout = document.querySelector("#btn-checkout");


function getCart(cards) {
    const list = cards.map(
        card => `
            <div class="card border shadow-none">
                <div class="card-body">
                    <div class="d-flex align-items-start border-bottom pb-3">
                        <div class="me-4">
                            <img src="${card.img}" alt="${card.product.title}"
                                class="avatar-lg rounded" />
                        </div>
                        <div class="flex-grow-1 overflow-hidden">
                            <h5 class="text-truncate font-size-18">${card.product.title}</h5>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="mt-3">
                                        <p class="text-muted mb-2">Precio</p>
                                        <h5 class="mb-0 mt-2">$${card.product.price}</h5>
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="mt-3">
                                        <p class="text-muted mb-2">Cantidad</p>
                                        <h5 class="mb-0 mt-2">${card.quantity}</h5>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="mt-3">
                                        <p class="text-muted mb-2">Total</p>
                                        <h5>$${card.product.price * card.quantity}</h5>
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="mt-3">
                                        <p class="text-muted mb-2" onclick="removeItem(${card.product.id})">Eliminar</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
    ).join("");
    cardsSection.innerHTML = list;

    btnClearCart.style.display = cards.length > 0 ? "block" : "none";
    btnCheckout.style.display = cards.length > 0 ? "block" : "none";
}


function total(cards) {
    let cartTotal = document.querySelector("#card-total");
    let total = cards.length > 0
        ? cards.reduce((acumulado, actual) => acumulado + actual.product.price * actual.quantity, 0) // suma
        : 0;

    cartTotal.innerText = "$" + total;
}


function removeItem(id) {
    let cards = JSON.parse(localStorage.getItem("cart")) || [];
    let newCards = cards.filter(card => card.product.id !== id);
    localStorage.setItem("cart", JSON.stringify(newCards));
    getCart(newCards);
    total(newCards);

    let quantity = newCards.reduce((acumulado, actual) => acumulado + actual.quantity, 0);
    localStorage.setItem("quantity", quantity);

    const quantityTag = document.querySelector("#quantity");
    quantityTag.innerText = quantity;
}


function cleanCart() {
    localStorage.setItem("cart", JSON.stringify([]));
    localStorage.setItem("quantity", "0");

    getCart([]);
    total([]);

    const quantityTag = document.querySelector("#quantity");
    quantityTag.innerText = "0";
}


function checkout() {
    const recurso = {
        user: localStorage.getItem("email"),
        items: JSON.parse(localStorage.getItem("cart")) || [],
    };
    fetch("https://673cc12496b8dcd5f3fb7635.mockapi.io/orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(recurso),
    })
        .then(response => response.json())
        .then(data => {
            Swal.fire({
                text: `Gracias ${data.user}. Hemos registrado tu orden número ${data.id}`,
                confirmButtonText: "OK",
                confirmButtonColor: "#06f",
            });
            clearCart();
        })
        .catch(() =>
            Swal.fire({
                text: "Ups, hubo un problema, intenta más tarde..",
                confirmButtonText: "OK",
                confirmButtonColor: "#a6f",
            })
        );
}

// Limpia el carrito después del checkout
function clearCart() {
    localStorage.removeItem("cart");
    localStorage.setItem("quantity", "0");

    const quantityTag = document.querySelector("#quantity");
    if (quantityTag) {
        quantityTag.innerText = "0"; 
    }

    getCart([]);
    total([]);
}

// Inicialización del carrito y totales
getCart(JSON.parse(localStorage.getItem("cart")) || []);
total(JSON.parse(localStorage.getItem("cart")) || []);
