class Producto {
  constructor(nombre, precio, stock, estaDisponible, imagen) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.estaDisponible = estaDisponible;
    this.imagen = imagen;
  }

  vender(cantidad) {
    if (this.estaDisponible && this.stock >= cantidad) {
      this.stock -= cantidad;
      console.log(`${cantidad} unidades de ${this.nombre} vendidas.`);
    } else if (!this.estaDisponible) {
      console.log(`${this.nombre} no está disponible para la venta.`);
    } else {
      console.log(`No hay suficiente stock de ${this.nombre}.`);
    }
  }
}

const productos = [
  new Producto(
    "Torta de Chocolate",
    120,
    5,
    true,
    "https://via.placeholder.com/150"
  ),
  new Producto(
    "Cheesecake de Queso",
    200,
    10,
    true,
    "https://via.placeholder.com/150"
  ),
  new Producto(
    "Desayunos Sorpresas",
    180,
    1,
    true,
    "https://via.placeholder.com/150"
  ),
  new Producto(
    "Cajas de Donas y Paletas de Chocolates",
    220,
    4,
    true,
    "https://via.placeholder.com/150"
  ),
];

const productosContainer = document.getElementById("productos-container");

productos.forEach((producto) => {
  const productoDiv = document.createElement("div");
  productoDiv.className = "producto";

  productoDiv.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h2>${producto.nombre}</h2>
        <p class="precio">$${producto.precio}</p>
        <p>Stock: ${producto.stock}</p>
        <button ${!producto.estaDisponible ? "disabled" : ""}>Comprar</button>
    `;

  productoDiv.querySelector("button").addEventListener("click", () => {
    producto.vender(1);
    productoDiv.querySelector(
      "p:nth-child(4)"
    ).textContent = `Stock: ${producto.stock}`;
    if (producto.stock === 0) {
      producto.estaDisponible = false;
      productoDiv.querySelector("button").disabled = true;
      productoDiv.querySelector("button").textContent = "Agotado";
    }
  });

  productosContainer.appendChild(productoDiv);
});
