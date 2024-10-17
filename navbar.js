let menu = [
    {
        texto: "Motherboard",
        category: "Motherboard",
        href: "/mather"
    },
    {
        texto: "Memoria Ram",
        category: "Memoria Ram",
        href: "/pantalones"
    },
    {
        texto: "Procesador",
        category: "Procesador",
        href: "/procesador"
    },
    {
        texto: "Teclado",
        category: "Teclado",
        href: "/teclado"
    },
    {
        texto: "Mouse",
        category: "Mouse",
        href: "/mouse"
    },
    {
        texto: "Placa de Video",
        category: "Placa de Video",
        href: "/placa_de_video"
    },
];

let menuHTML = [];

for (let categoria of menu) {
    menuHTML.push(`
        <li class="nav-item" >
        <a class="nav-link" id="category" data-category="${categoria.category}" href="#">${categoria.texto}</a>
        </li>
        `);
}
menuHTML.push(`
    <li class="nav-item">
        <a class="nav-link" href="#" id="clean">Ver Todos</a>
    </li>
`);
// document.querySelector('header').innerHTML = menuHTML.join("");

// inserto en el html en el header el narbar con el array de los link y con el join saco  las comas
document.querySelector('header').innerHTML = (`
    <div class="navbarOG">
        <nav class="navbar navbar-expand-lg bg-body-tertiary" style="background-color: #FF69B4; color: white;">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html">HardwareSof</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        ${menuHTML.join("")}
                    </ul>
                    <form class="d-flex" role="search" id="searchForm">
                        <input class="form-control me-1" id="search" type="search" placeholder="Buscar" aria-label="Search">
                        <button class="buscar btn btn-outline-success d-flex align-items-center justify-content-center" id="filter" type="button">
                            <i class="material-icons">search</i>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    </div>
`);
