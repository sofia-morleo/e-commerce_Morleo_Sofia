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


// data tengo que crear un json
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
        "img": "https://http2.mlstatic.com/D_NQ_NP_725322-MLU74033804174_012024-O.webp",
        "price": 170500,
        "stock": 74,
        "category": "Teclado"
    }, {
        "id": 9,
        "title": "Mouse Logitech Aurora G705 Wireless White RGB",
        "detail": "Optimiza tu juego con el mouse inalámbrico Logitech Aurora G705. Diseñado para la comodidad, ofrece retroiluminación RGB personalizable y un rendimiento rápido y preciso, todo en un elegante color blanco. ¡Ideal para jugadores que buscan estilo y funcionalidad!",
        "img": "https://www.nfm.com/on/demandware.static/-/Sites-nfm-master-catalog/default/dw7248a9fa/images/062/92/62926837-1.jpg",
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
                    <div class="agregar">
                        <a href="index.html" class="btn btn-secondary" role="button" >Agregar</a>
                    </div>
                </div>
            </div>
            <div class="details_info">
                <h4 class="tit">Especificaciones</h4>
                <div class="especificaciones">
                    <p>
                    ${producto.detail}
                    </p>
                </div>
            </div>
        </div>
    </div>`;

  
  document.querySelector("main").innerHTML = card;
