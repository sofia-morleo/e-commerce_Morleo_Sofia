const titulo = document.querySelector("h1");
titulo.innerText = "Conocé nuestros productos ";

// FUNCION PARA MOSTRAR LAS CARD
function card(product) {
    let card = product.map((producto) =>
        
        `<div class="card mb-3" >
            <a href="#"><img src="${producto.img}" class="card-img-top img-fluid" style="height: 200px; object-fit: cover;" alt="${producto.id}"></a>
            <div class="card-body">
                    <h5 class="card-title">${producto.title}</h5>
                    <p class="card-text">${producto.detail}</p>
                    <p class="card-stock">stock: ${producto.stock}</p>
                    <p class="card-price">$${producto.price.toLocaleString('es-ES')}</p>
                    <a href="producto.html?prod=${producto.id}" class="btn btn-primary bg-secondary border-0">Ver más</a>
            </div>
        </div>`
    );  //${producto.price.toLocaleString('es-ES')} esto es para hacer que el precio tenga punto de los miles
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

        if (filterData.length > 0) {
            card(filterData);// PASO eL OBJETO FILTRADO
        } else {
            document.querySelector('section').innerHTML = "No encontrado";
        }
    };

    const resetInput = () => {
        input.value = "";
        titulo.innerText = "Conocé nuestros productos ";
        card(data);
    }

    buttonFilter.addEventListener("click", filter);

    input.addEventListener("input", () => {
        if (input.value === "") {
            resetInput(); // Si el input está vacío, restablecer productos
        }
    });


    //buscador de categorias:

    const categoriaFilter = document.querySelectorAll("#category");
    const clean = document.querySelector("#clean");

    const filterCategoria = (category) => {//pasamos l acategoria elegida 
        const filterDataCategori = data.filter((prod) =>
            prod.category.toLowerCase() === category.toLowerCase()// ponemos todo en minusculas
        );
        if (filterDataCategori.length > 0) {
            card(filterDataCategori);// PASO eL OBJETO FILTRADO
        } else {
            document.querySelector('section').innerHTML = "No encontrado";
        }
    };
    clean.addEventListener("click", resetInput);
    
    // Asignar evento a cada botón como esta en un onjeto necesito pasarlea} a cada uno el evento del click y que haga la funcion
    categoriaFilter.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category"); // Obtener la categoría del atributo data-category, para ya poder buscalo
            document.querySelector('h1').innerHTML = category;
            filterCategoria(category); // llamar a la funcion para que filtre
        });
    });

    
});




