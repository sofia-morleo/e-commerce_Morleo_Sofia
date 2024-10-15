const titulo = document.querySelector("h1");
titulo.innerText = "Productos";

const data =
    [{
        "id": 1,
        "title": "Cosa 1",
        "detail": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
        "img": "http://dummyimage.com/450x300.png/cc0000/ffffff",
        "price": 54,
        "stock": 87
    }, {
        "id": 2,
        "title": "Cosa 2",
        "detail": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
        "img": "http://dummyimage.com/450x300.png/cc0000/ffffff",
        "price": 52,
        "stock": 57
    }, {
        "id": 3,
        "title": "Cosa 3",
        "detail": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
        "img": "http://dummyimage.com/450x300.png/dddddd/000000",
        "price": 8,
        "stock": 18
    }, {
        "id": 4,
        "title": "Cosa 4",
        "detail": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
        "img": "http://dummyimage.com/450x300.png/dddddd/000000",
        "price": 21,
        "stock": 38
    }, {
        "id": 5,
        "title": "Cosa 5",
        "detail": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "img": "http://dummyimage.com/450x300.png/dddddd/000000",
        "price": 67,
        "stock": 3
    }, {
        "id": 6,
        "title": "Cosa 6",
        "detail": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        "img": "http://dummyimage.com/450x300.png/cc0000/ffffff",
        "price": 78,
        "stock": 23
    }, {
        "id": 7,
        "title": "Cosa 7",
        "detail": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
        "img": "http://dummyimage.com/450x300.png/5fa2dd/ffffff",
        "price": 1,
        "stock": 74
    }, {
        "id": 8,
        "title": "Cosa 8",
        "detail": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
        "img": "http://dummyimage.com/450x300.png/dddddd/000000",
        "price": 79,
        "stock": 12
    }, {
        "id": 9,
        "title": "Cosa 9",
        "detail": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
        "img": "http://dummyimage.com/450x300.png/cc0000/ffffff",
        "price": 3,
        "stock": 57
    }, {
        "id": 10,
        "title": "Cosa 10",
        "detail": "In congue. Etiam justo. Etiam pretium iaculis justo.",
        "img": "http://dummyimage.com/450x300.png/ff4444/ffffff",
        "price": 76,
        "stock": 86
    }];

// FUNCION PARA MOSTRAR LAS CARD
function card(product) {
    let card = product.map((producto) =>
        `<div class="card mb-3" style="width: 18rem;">
            <a href="#"><img src="${producto.img}" class="card-img-top img-fluid" style="height: 200px; object-fit: cover;" alt="${producto.id}"></a>
            <div class="card-body">
                    <h5 class="card-title">${producto.title}</h5>
                    <p class="card-text">${producto.detail}</p>
                    <p class="card-text">$${producto.price}</p>
                    <p class="card-text">${producto.stock}</p>
                    <a href="producto.html?prod=${producto.id}" class="btn btn-primary bg-secondary border-0">Ver más</a>
            </div>
        </div>`
    );
    document.querySelector('section').innerHTML = card.join("");
}
// pASO A LA FUNCION EL OBJETO ENTERRO
card(data);

document.addEventListener("DOMContentLoaded", () => {

//buscador variables
const buttonFilter = document.querySelector("#filter");
const input = document.querySelector("input");

const filter = () => {
    
    const filterData = data.filter((prod) =>
        prod.title.toLowerCase() === input.value.toLowerCase()// ponemos todo en minusculas
    );

    if (filterData.length === 1) {
        card(filterData);// PASO eL OBJETO FILTRADO
    } else {
        document.querySelector('section').innerHTML = "No encontrado";
    }
};

const resetInput = () => {
    input.value = "";
    card(data);
}

buttonFilter.addEventListener("click", filter);

input.addEventListener("input", () => {
    if (input.value === "") {
        resetInput(); // Si el input está vacío, restablecer productos
    }
});

});




