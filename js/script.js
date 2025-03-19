//variables
let valores

valores = "$10000"
valores = "$12000"
valores = "$40000"


const usuarios = [
    {edad: 17},
    {edad: 20},
    {edad: 18},
    {edad: 15},
    {edad: 45}
]



let edad = 17;
let dinero = true;

if (edad >= 18 || dinero) {
    console.log("ENTRAR");
} else {
    console.log ("MENORES DE 18, NO ENTRAN");
}

//and (&&)
//or (||)

const password = "1";
let passwordingresado = prompt ("Usted tiene +18");

while (passwordingresado != password) {
    passwordingresado = prompt ("Usted tiene +18");
}

document.querySelectorAll('.btn-comprar').forEach(button => {
    button.addEventListener('click', function() {
        alert(`Has comprado una entrada para ${this.dataset.evento} por ${this.dataset.precio}`);
    });
});


let carrito = [];

document.querySelectorAll('.btn-comprar').forEach(button => {
    button.addEventListener('click', function() {
        let evento = this.dataset.evento;
        let precio = this.dataset.precio;
        carrito.push({ evento, precio });
        actualizarCarrito();
    });
});

function actualizarCarrito() {
    let carritoHTML = document.getElementById('carrito');
    carritoHTML.innerHTML = '';
    carrito.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.evento} - ${item.precio}`;
        carritoHTML.appendChild(li);
    });
}

document.querySelectorAll('.btn-comprar').forEach(button => {
    button.addEventListener('click', function() {
        alert(`Has comprado una entrada para ${this.dataset.evento} por ${this.dataset.precio}`);
    });
});