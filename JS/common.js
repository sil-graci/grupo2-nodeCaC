// header

let cad = ` 
<div class="contenedor-grid">
<header class="encabezado" >

<img src="../imagenes/logo-pets.png" alt="" class="logo" />
<h1 class="titulo">PETWHOLE</h1>
<div class="carrito"><a href="##" title="carrito"><i class="fa-solid fa-cart-shopping"></i></a></div>
</header>
<nav class="menu">
<a href="../index.html">Inicio</a>
<a href="acercaDe.html">Acerca de</a>
<a href="contacto.html">Contacto</a>


</nav>

`;
document.getElementById("idheader").innerHTML = cad;

//FOOTER
let cad2 = `
<footer class="pie" >
<div class="iconos">
<a href="https://www.facebook.com/" target="_blank" rel="noopener"
  ><i class="fab fa-facebook" title="Ir a Facebook"></i
></a>
<a href="https://www.instagram.com/" target="_blank" rel="noopener"
  ><i class="fab fa-instagram" title="Ir a Instagram"></i
></a>
<a href="https://ar.pinterest.com/" target="_blank" rel="noopener"
  ><i class="fab fa-pinterest" title="Ir a Pinterest"></i
></a>
<a href="https://twitter.com/" target="_blank" rel="noopener">
  <i class="fab fa-twitter" title="Ir a twitter"></i
></a>
<a href="https://ar.linkedin.com/" target="_blank" rel="noopener"
  ><i class="fab fa-linkedin-in" title="Ir a Linkedin"></i
></a>
</div>
<p>&copy; 2024 Derechos reservados </p>
</footer>

`;
document.getElementById("idfooter").innerHTML = cad2;

/*--------------------------------------------------*/
/*PRODUCTOS PARA PÁG ALIMENTOS*/
/*--------------------------------------------------*/
if (document.getElementById("idalimentos")) {
  var cad3 = `
    <div id="contenedor-productos" class="grid-container">
    `;

  for (var i = 0; i < data.length; i++) {
    cad3 += `
  <div class="card producto">
  <div class="card-body">
  <h3 class="card-title">${data[i].nombre}</h3>
  <img src="${data[i].imagen}" alt="${data[i].alt}" >
  <p class="card-text">
    Precio: ${data[i].precio}
  </p>  
    <a href="#" class="btn btn-card">Agregar al carrito</a>
    <div class="descripcion">
      <p>${data[i].descripcion}</p>
    </div>
  </div>
</div>

`;
  }

  cad3 += `
</div>
`;

  document.getElementById("idalimentos").innerHTML = cad3;
}