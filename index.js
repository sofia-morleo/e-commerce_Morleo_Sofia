const titulo = document.querySelector("h1");
titulo.innerText = "Productos";

function card() {
    const data = 
        [{
            "id": 1,
            "title": "Nothing to Lose",
            "detail": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
            "img": "http://dummyimage.com/450x300.png/cc0000/ffffff",
            "price": 54,
            "stock": 87
        }, {
            "id": 2,
            "title": "Ditchdigger's Daughters, The",
            "detail": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
            "img": "http://dummyimage.com/450x300.png/cc0000/ffffff",
            "price": 52,
            "stock": 57
        }, {
            "id": 3,
            "title": "Atlantic City",
            "detail": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
            "img": "http://dummyimage.com/450x300.png/dddddd/000000",
            "price": 8,
            "stock": 18
        }, {
            "id": 4,
            "title": "HOUBA! On the Trail of the Marsupilami (Sur la piste du Marsupilami)",
            "detail": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
            "img": "http://dummyimage.com/450x300.png/dddddd/000000",
            "price": 21,
            "stock": 38
        }, {
            "id": 5,
            "title": "Possession",
            "detail": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            "img": "http://dummyimage.com/450x300.png/dddddd/000000",
            "price": 67,
            "stock": 3
        }, {
            "id": 6,
            "title": "Fragile",
            "detail": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
            "img": "http://dummyimage.com/450x300.png/cc0000/ffffff",
            "price": 78,
            "stock": 23
        }, {
            "id": 7,
            "title": "Killjoy Goes to Hell",
            "detail": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
            "img": "http://dummyimage.com/450x300.png/5fa2dd/ffffff",
            "price": 1,
            "stock": 74
        }, {
            "id": 8,
            "title": "Ronja Robbersdaughter (Ronja Rövardotter)",
            "detail": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
            "img": "http://dummyimage.com/450x300.png/dddddd/000000",
            "price": 79,
            "stock": 12
        }, {
            "id": 9,
            "title": "MacGyver: Trail to Doomsday",
            "detail": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
            "img": "http://dummyimage.com/450x300.png/cc0000/ffffff",
            "price": 3,
            "stock": 57
        }, {
            "id": 10,
            "title": "Rhapsody in August (Hachi-gatsu no kyôshikyoku)",
            "detail": "In congue. Etiam justo. Etiam pretium iaculis justo.",
            "img": "http://dummyimage.com/450x300.png/ff4444/ffffff",
            "price": 76,
            "stock": 86
        }];
          
    
    
    let card = data.map((producto) =>

    `<div class="card mb-3" style="width: 18rem;">
            <a href="#"><img src="${producto.img}" class="card-img-top img-fluid" style="height: 200px; object-fit: cover;" alt="${producto.id}"></a>
            <div class="card-body">
                    <h5 class="card-title">${producto.title} ${producto.id}</h5>
                    <p class="card-text">${producto.detail}</p>
                    <p class="card-text">$${producto.price}</p>
                    <p class="card-text">${producto.stock}</p>
                    <a href="producto.html?prod=${producto.id}" class="btn btn-primary bg-secondary border-0">Ver más</a>
            </div>
        </div>`
    );

    document.querySelector('section').innerHTML = card.join("");
}
card();


