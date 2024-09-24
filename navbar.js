let menu = [
    {
        texto: "Contacto",
        href: "/contact"
    },
    {
        texto: "Pantalones",
        href: "/pantalones"
    },
    {
        texto: "Remeras",
        href: "/remeras"
    },
];

let menuHTML = [];

for (let categoria of menu) {
    menuHTML.push(`
        <li class="nav-item">
        <a class="nav-link" href="${categoria.href}">${categoria.texto}</a>
        </li>
        `);
}
// document.querySelector('header').innerHTML = menuHTML.join("");

// inserto en el html en el header el narbar con el array de los link y con el join saco  las comas
document.querySelector('header').innerHTML = (`
    <div class="narbarOG">
 
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html">e-commerce</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        ${menuHTML.join("")}
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
                        <button class="btn btn-outline-success d-flex align-items-center justify-content-center"
                            type="submit">
                            <i class="material-icons">search</i>
                        </button>
                    </form>
                </div>
            </div>
        </nav>

    </div> 
`);