const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

// Toma el numero del imput
const contenido = document.getElementById("input").innerText;

// const pizzas = JSON.stringify(pizzas) 

//dado un numero toma una pizza del id "n";
elegirPizza = (n) => {

  pizzas.forEach(pizza => {
        if ( pizza.id = n ) {
            prepararPizza(pizza)
        }
    });
} 

//dado una pizza crea el elemento html
function prepararPizza(pz) {

    let pizza = document.createElement("ul");

    let nombre = document.createElement("li").innerText(pz.nombre);
    let precio = document.createElement("li").innerText(pz.precio);
    let ingredientes = document.createElement("li").innerText(pz.ingredientes);
    let imagen = document.createElement("li").innerText(pz.imagen);

    pizza.appendChild(nombre);
    pizza.appendChild(precio);
    pizza.appendChild(ingredientes);
    pizza.appendChild(imagen);

    const body = document.getElementsByName("body");
    body.appendChild(pizza);

}

const unaPizza = document.createElement("div");

