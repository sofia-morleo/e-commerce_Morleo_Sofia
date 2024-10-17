const titulo = document.querySelector("h1");
titulo.innerText = "Conocé nuestros productos ";

const data =
    [{
        "id": 1,
        "title": "TUF GAMING B450M-PLUS II",
        "detail": "Tarjeta madre para juegos AMD B450 (AM4) micro ATX con soporte M.2, micrófono con cancelación de ruido IA, HDMI, DVI-D, USB 3.2 Gen 2 Tipo A, USB 3.2 Gen 1 Tipo A y Tipo C, e iluminación Aura Sync RGB",
        "img": "https://www.asus.com/media/global/gallery/9tq886hxmoy8c681_setting_xxx_0_90_end_800.png",
        "price": 100899,
        "stock": 10,
        "category": "Motherboard"
    }, {
        "id": 2,
        "title": "ROG STRIX X670E-E GAMING WIFI",
        "detail": "Tarjeta madre AMD  X670 ATX con 18+2+2 fases de poder, soporte DDR5, dos puertos PCIe®  5.0 x16, PCIe Slot Q-Release, cuatro puertos M.2 con disipadores, compatibilidad con PCIe 5.0 SSD NVMe®, disipador combinado M.2, placa posterior M.2, disipador térmico masivo M.2, USB 3.2 Gen 2x2, WiFi 6E integrado, Dynamic OC Switcher, Ryzen Core Flex, AI Cooling II e iluminación Aura Sync RGB.",
        "img": "https://dlcdnwebimgs.asus.com/gain/BADFA920-702B-451B-9592-8279ACD6857B/w717/h525",
        "price": 642620,
        "stock": 57,
        "category": "Motherboard"
    }, {
        "id": 3,
        "title": "Memoria Adata DDR4 8GB 3600Mhz XPG Spectrix D45G RGB",
        "detail": "El SPECTRIX D45G, además de parecerlo, es robusto y tiene un exterior de aluminio sólido similar a una armadura con salientes resistentes y un rendimiento robusto.",
        "img": "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_29566_Memoria_Adata_DDR4_8GB_3600Mhz_XPG_Spectrix_D45G_RGB_44faac86-grn.jpg",
        "price": 26999,
        "stock": 18,
        "category": "Memoria Ram"
    }, {
        "id": 4,
        "title": "Memoria Ram Kingston Fury Beast RGB 8GB 3200 Mhz DDR4",
        "detail": "Optimiza tu PC con la memoria Kingston Fury Beast RGB de 8GB y 3200Mhz. Ofrece alto rendimiento y efectos de iluminación RGB dinámicos para una experiencia potente y personalizada.",
        "img": "https://media.kingston.com/kingston/product/FURY_Beast_RGB_Black_DDR4_4-zm-lg.jpg",
        "price": 28200,
        "stock": 18,
        "category": "Memoria Ram"
    }, {
        "id": 5,
        "title": "Procesador AMD RYZEN 3 3200G 4.0GHz Turbo + Radeon Vega 8 AM4 Wraith Stealth Cooler",
        "detail": "Ryzen con gráficos Radeon Vega 8 está equipada con 4 núcleos, frecuencias revisadas al alza con base 3,6 GHz y hasta 4 GHz, 4 MB de caché L3 y 65W de TDP.",
        "img": "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_16752_Procesador_AMD_RYZEN_3_3200G_4.0GHz_Turbo___Radeon_Vega_8_AM4_Wraith_Stealth_Cooler_f414a507-grn.jpg",
        "price": 73900,
        "stock": 38,
        "category": "Procesador"
    }, {
        "id": 6,
        "title": "Procesador AMD Ryzen 5 5600X 4.6GHz Turbo AM4 + Wraith Stealth Cooler",
        "detail": "ptimiza tu rendimiento con el AMD Ryzen 5 5600X, un procesador de 6 núcleos que alcanza hasta 4.6GHz. Ideal para juegos y multitarea, incluye el Wraith Stealth Cooler para un enfriamiento silencioso y eficiente. ¡Potencia tu PC al máximo",
        "img": "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_22254_Procesador_AMD_Ryzen_5_5600X_4.6GHz_Turbo_AM4___Wraith_Stealth_Cooler_f737ec9f-grn.jpg",
        "price": 208000,
        "stock": 3,
        "category": "Procesador"
    }, {
        "id": 7,
        "title": "Teclado Mecanico Logitech Aurora G715 Wireless White RGB Tactile Switch",
        "detail": "Disfruta de la libertad inalámbrica con el teclado mecánico Logitech Aurora G715. Con interruptores táctiles y retroiluminación RGB, combina estilo y rendimiento para una experiencia de escritura y juego superior.",
        "img": "https://spacegamer.com.ar/img/Public/1058-producto-1-6025.jpg",
        "price": 204940,
        "stock": 23,
        "category": "Teclado"
    }, {
        "id": 8,
        "title": "Teclado Mecanico Logitech PRO X RGB TKL Wireless Lightspeed Magenta",
        "detail": "Lleva tu juego al siguiente nivel con el Logitech PRO X TKL. Este teclado mecánico compacto ofrece conectividad inalámbrica Lightspeed y retroiluminación RGB personalizable, brindando un rendimiento excepcional y un diseño elegante en color magenta.",
        "img": "https://resource.logitechg.com/w_1600,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-tkl/gallery-2-pro-x-tkl-magenta-lightspeed-gaming-keyboard-us-intl.png?v=1&quot",
        "price": 170500,
        "stock": 74,
        "category": "Teclado"
    }, {
        "id": 9,
        "title": "Mouse Logitech Aurora G705 Wireless White RGB",
        "detail": "Optimiza tu juego con el mouse inalámbrico Logitech Aurora G705. Diseñado para la comodidad, ofrece retroiluminación RGB personalizable y un rendimiento rápido y preciso, todo en un elegante color blanco. ¡Ideal para jugadores que buscan estilo y funcionalidad!",
        "img": "https://resource.logitech.com/content/dam/gaming/en/products/mouse/g705-wireless-mouse/gallery/g705-gallery-3.png",
        "price": 72990,
        "stock": 12,
        "category": "Mouse"
    }, {
        "id": 10,
        "title": "Mouse Logitech G PRO X Wireless Superlight Pink 25K",
        "detail": "Mejora tu rendimiento en el juego con el mouse inalámbrico Logitech G PRO X Superlight en color rosa. Con tecnología de sensor de 25,600 DPI, es ultra liviano y ofrece una conectividad rápida y precisa, ideal para gamers exigentes.",
        "img": "https://store.teslards.pe/wp-content/uploads/2022/03/DBDEFE65-999A-4FDB-851A-0F67DEEEEF20.jpg",
        "price": 114990,
        "stock": 40,
        "category": "Mouse"
    }, {
        "id": 11,
        "title": "Placa de Video Zotac GeForce RTX 4060 Ti 16GB GDDR6 AMP",
        "detail": "Impulsa tu experiencia gaming con la Zotac GeForce RTX 4060 Ti. Equipado con 16GB de memoria GDDR6, ofrece un rendimiento impresionante en juegos y aplicaciones gráficas, asegurando gráficos fluidos y realistas.",
        "img": "https://http2.mlstatic.com/D_NQ_NP_839732-MLA74558855279_022024-O.webp",
        "price": 684470,
        "stock": 30,
        "category": "Placa de Video"
    }
    , {
        "id": 12,
        "title": "Placa de Video ASUS Dual GeForce RTX 4060 Ti 8GB GDDR6 White OC",
        "detail": "Mejora tu rendimiento gráfico con la ASUS Dual GeForce RTX 4060 Ti. Con 8GB de memoria GDDR6 y un diseño en blanco, esta placa ofrece overclocking de fábrica y un excelente rendimiento en juegos y tareas creativas.",
        "img": "https://www.deffo.com.ar/wp-content/uploads/2024/01/DUAL-RTX4060-O8G-WHITE-1.webp",
        "price": 684470,
        "stock": 4,
        "category": "Placa de Video"
    }, {
        "id": 13,
        "title": "Placa de Video ASUS GeForce GT 1030 2GB DDR5 CSM",
        "detail": "Potencia tu PC con la ASUS GeForce GT 1030. Con 2GB de memoria DDR5, es ideal para tareas básicas, juegos ligeros y multimedia, ofreciendo un rendimiento eficiente y un diseño compacto.",
        "img": "https://www.precio-calidad.com.ar/wp-content/uploads/2021/05/ASUS-GT-1030-GT1030-2G-CSM-1.jpg",
        "price": 684470,
        "stock": 12,
        "category": "Placa de Video"
    }];

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
            filterCategoria(category); // llamar a la funcion para que filtre
        });
    });

    
});




