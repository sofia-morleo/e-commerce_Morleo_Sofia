// console.log("Hola Mundo ¿Como estan?");
// const  h5 = document.querySelector("h5");
// const text =  document.querySelector(".card-brand")
// const  precio = document.querySelector(".card-price");
// const img = document.querySelector(".card-img-top");

// h5.innerText = "Dibu"
// console.log(h5.innerText)
// text.innerText = "Futbolista argentino";
// console.log(text.innerText)
// precio.innerText = "$7,29M"
// console.log(precio.innerText)
// img.src = "https://img.lagaceta.com.ar/fotos/notas/2023/12/27/600x400_para-nosotros-el-mejor-emiliano-dibu-martinez-termino-detras-brasileno-ederson-manchester-city-1018785-110841.webp"; 
// console.log(img.src)

const titulo = document.querySelector("h1");
titulo.innerText = "Productos"

const Prod = []
for (let i = 1; i <= 5; i++) {

    const Card = `
        <div class="card col-sm-12 col-md-6 col-lg-4 mb-4">
            <a href="#"><img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top" alt="..."></a>
            <div class="card-body">
                    <h5 class="card-title">Producto ${i}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary bg-secondary border-0">Agregar</a>
            </div>
        </div>`

        Prod.push(Card);
}

// document.querySelector('section').innerHTML = (Prod); //esto estaba bien pero cuando lo mostraba habia comas
document.querySelector('section').innerHTML = Prod.join("");