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
                    ${window.location.pathname.includes("index.html") ? `
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        ${menuHTML.join("")}
                    </ul>
                    <form class="d-flex" role="search" id="searchForm">
                        <input class="form-control me-1" id="search" type="search" placeholder="Buscar" aria-label="Search" style="width: 300px;">
                        <button class="buscar btn btn-outline-success d-flex align-items-center justify-content-center" id="filter" type="button">
                            <i class="material-icons">search</i>
                        </button>
                    </form>
                    ` : ""}

                    <div class="user-container ms-auto">
                        ${localStorage.getItem("email")
        ? `<span>${localStorage.getItem("email")}</span> 
                            <span style="margin-left: 10px; margin-right: 10px;">|</span> 
                            <li><a href="cart.html" style="color: inherit; text-decoration: none;">
                                <img height="25" src="./img/cart.png" alt="Comprar"/>
                                <b id="quantity">${localStorage.getItem("quantity")}</b>
                            </a></li>
                            <span> | </span>
                            <span class="logout d-flex align-items-center justify-content-center" type="button" onClick="Logout()" style="color: #5D3F8E;"><span class="material-symbols-outlined">logout</span> Cerrar sesión</span>`
        : `<a href='./login.html' class="login d-flex align-items-center justify-content-center" style="color: #5D3F8E;"><span class="material-symbols-outlined">login</span>Iniciar sesión</a>`
    }
                    </div>



                </div>
            </div>
        </nav>
    </div>
`);

// Estilos CSS para mejorar la vista
// Estilos CSS para mejorar la vista del navbar y las categorías
const style = document.createElement('style');
style.innerHTML = `

    *{
        color: #5D3F8E;
    }
    li{
        list-style-type: none;
        & b{
        margin: 0 5px; 
        }
        & 
        

    }a {
        list-style-type: none;
        }
    .navbar {
        padding: 10px; 
    }
    .nav-item {
        margin: 0 15px; 
    }
    .nav-link {
        color: white; 
        text-decoration: none; 
        transition: color 0.3s, background-color 0.3s; /
        padding: 8px 12px;
        border-radius: 10px; 
    }
    .nav-link:hover {
        background-color: rgba(255, 255, 255, 0.2); 
        color: #FF69B4; 
    }
    .user-container {
        display: flex;
        align-items: center;
        margin-left: 20px; 
    }
    .logout, .login {
        margin-left: 10px; 
        color: white; 
        text-decoration: none; 
        cursor: pointer; 
    }
    .logout:hover, .login:hover {
       
    }
`;
document.head.appendChild(style);


function Logout() {
    localStorage.clear();
    location.href = "./index.html";
}

