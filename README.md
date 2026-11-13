# WA-proyectodos

Se cargan por orden, el ÚLTIMO es el más importante.

EN LOS HTML EN EL HEAD:
    <!-- 1. Enlaza aquí el CSS de AOS, antes de styles.css:
         https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">


EN LOS HTML JUSTO ANTES DE QUE SE CIERRE EL BODY:
    <!-- 2. Enlaza aquí los scripts, en este orden:
         AOS:      https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js
         Typed.js: https://cdn.jsdelivr.net/npm/typed.js@3.0.0/dist/typed.umd.js
         Reto, SimpleParallax:
         https://cdn.jsdelivr.net/npm/simple-parallax-js@7.0.0/dist/vanilla/simpleParallaxVanilla.umd.js
         Y por último, vuestro js/script.js -->

         <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
         <script src="js/script.js"></script>


EN EL CASO DE AOS, ha que iniciarlo en js: 
Ej html: pongo etiqueta en el html a algun elemento: 
Aplico: data-aos="fade-up"
            <h1 data-aos="fade-up">Esta noche puedes ver<br><span id="typed" class="hero__typed"></span></h1>

"Retraso natural":
            <p class="hero__texto" data-aos="fade-up" data-aos-delay="300">Sesiones de planetario, telescopios en la terraza y talleres para todas las edades.</p>


Ej js: modificamos todas las animaciones a la vez en js: 
        AOS.init({
        duration: 2000
        }); 




<!-- Otra librería -->
https://mattboldt.github.io/typed.js/


<!-- OTRA -->
         <!-- SIMPLEPARADAX -->
        <script src="https://cdn.jsdelivr.net/npm/simple-parallax-js@7.0.0/dist/vanilla/simpleParallaxVanilla.umd.min.js"></script>








# FALTA POR HACER: 
- Meter un slideshow en el index
- JS: Ventana modal [OKEY]
- JS: Tarjetas favoritos [OKEY]
- JS: Filtros de búsqueda [OKEY]
- JS: Formularios


- AOS: aparecer las tarjetas
- AOS: Botón subir???
- AOS: Título index


REVISIÓN TOTAL
CHEQUEAR CON: 
https://jigsaw.w3.org/css-validator/ (PDF de entrega- evaluación)
https://validator.w3.org/ (PDF de entrega- evaluación)
