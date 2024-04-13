// header

let cad = ` 
<div class="contenedor-grid">
<header class="encabezado" >

<img src="../IMAGENES/logo-pets.png" alt="" class="logo" />
<h1 class="titulo">PETWHOLE</h1>
<div class="iniciarSesion">Iniciar sesión</div>
</header>
<nav class="menu">
<a href="../index.html">Inicio</a>
<a href="acercaDe.html">Acerca de</a>
<a href="contacto.html">Contacto</a>

<a href="##" title="carrito"><i class="fa-solid fa-cart-shopping"></i></a>
</nav>

`
document.getElementById("idheader").innerHTML = cad;


//FOOTER
let cad2=`
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

