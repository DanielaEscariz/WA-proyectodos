
$(document).ready(function() {

// MENÚ RESPONSIVE_________________________________
    $("#boton-menu").on("click", function(evento) {
        evento.stopPropagation();
        $("#navegacion").slideToggle();
        $(this).toggleClass("abierto");
    });


    // CERRAR EL MENÚ AL PULSAR FUERA
    $("#navegacion").on("click", function(evento) {
        evento.stopPropagation();
    });

// Corrección error en menú ordenador, diferenciando entre menú ordenador y menú tablet/móvil 
    $(document).on("click", function() {
        // Cerrar el menú solo en tablet y móvil (cuando sea menor de 1024px)
        if ($(window).width() <= 1024) {
            $("#navegacion").slideUp();
            $("#boton-menu").removeClass("abierto");
        }
    });

    // Restaurar el menú
    $(window).on("resize", function() {
        if ($(window).width() > 1024) {
            $("#navegacion").show();
            $("#boton-menu").removeClass("abierto");
        } else {
            $("#navegacion").hide();
        }
    });






// BOTÓN VOLVER ARRIBA_________________________________
    // Aparece el botón cuando haces scroll
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 300) {
            $("#volver-arriba").fadeIn();

        } else {
            $("#volver-arriba").fadeOut();
        }

    });


    // Cuando haces click subes hasta arriba de la página
    $("#volver-arriba").on("click", function() {
        $("html, body").animate({
            scrollTop: 0
            
        }, 600);

    });





// VENTANA MODAL DE RUTAS________________________

    // Pulsando, abrimos la ventana modal
    $("#abrir-modal-ruta").on("click", function() {
        $("#modal-ruta").fadeIn();
    });

    // Cerrar con la X
    $("#cerrar-modal-ruta").on("click", function() {
        $("#modal-ruta").fadeOut();
    });

    // Cerrar con el botón de ahora no
    $("#cancelar-modal-ruta").on("click", function() {
        $("#modal-ruta").fadeOut();
    });

    // Cerrar pulsando fuera
    $("#modal-ruta").on("click", function() {
        $(this).fadeOut();
    });


    // Evitar que se cierre cuando estamos pulsando dentro de la ventana
    $(".contenido-modal").on("click", function(evento) {
        evento.stopPropagation();
    });






// VENTANA MODAL DE EVENTOS________________________

    // Pulsando, abrimos la ventana modal
    $("#abrir-modal-evento").on("click", function() {
        $("#modal-evento").fadeIn();
    });

    // Cerrar con la X
    $("#cerrar-modal-evento").on("click", function() {
        $("#modal-evento").fadeOut();
    });

    // Cerrar con el botón de ahora no
    $("#cancelar-modal-evento").on("click", function() {
        $("#modal-evento").fadeOut();
    });

    // Cerrar pulsando fuera
    $("#modal-evento").on("click", function() {
        $(this).fadeOut();
    });


    // Evitar que se cierre cuando estamos pulsando dentro de la ventana
    $(".contenido-modal").on("click", function(evento) {
        evento.stopPropagation();
    });








// TARJETAS BOTÓN DE FAVORITOS________________________
    // Cuando pulso se modifica el corazón de rutas
    $(".guardar-ruta").on("click", function() {
        $(this).find("i").toggleClass("fa-regular fa-solid");

    });

    // Cuando pulso se modifica el corazón de eventos
    $(".guardar-evento").on("click", function() {
        $(this).find("i").toggleClass("fa-regular fa-solid");

    });









// FILTROS DE BÚSQUEDA DE RUTAS________________________

// Hacer click en el filtro
    $(".filtro").on("click", function() {
        // Guardamos el filtro seleccionado
        var filtroSeleccionado = $(this).data("filtro");

        // Cambiar el botón a activo
        $(".filtro").removeClass("activo");
        $(this).addClass("activo");

        // Ver TODAS las rutas
        if (filtroSeleccionado == "todas") {
            $(".tarjeta-ruta").show();
        }
        
        // Filtra por rutas de: CERCA DE MI
        else if (filtroSeleccionado == "cerca") {
            $(".tarjeta-ruta").hide();
            $('.tarjeta-ruta[data-cerca="si"]').show();
        }

        // Filtra por rutas de: ESTE FIN DE SEMANA
        else if (filtroSeleccionado == "fin-semana") {
            $(".tarjeta-ruta").hide();
            $('.tarjeta-ruta[data-fin-semana="si"]').show();
        }

        // Filtra por rutas de: NIVEL MEDIO
        else if (filtroSeleccionado == "medio") {
            $(".tarjeta-ruta").hide();
            $('.tarjeta-ruta[data-nivel="medio"]').show();
        }

        // Filtra por rutas de: CARRETERA CON CURVAS
        else if (filtroSeleccionado == "curvas") {
            $(".tarjeta-ruta").hide();
            $('.tarjeta-ruta[data-curvas="si"]').show();
        }

        // Actualizar el número de contador de rutas
        var totalRutas = $(".tarjeta-ruta:visible").length;
        $("#contador-rutas").text(totalRutas + " RUTAS ENCONTRADAS");
    });





// FILTROS DE BÚSQUEDA DE EVENTOS________________________

// Hacer click en el filtro
    $(".filtro").on("click", function() {
        // Guardamos el filtro seleccionado
        var filtroSeleccionado = $(this).data("filtro");

        // Cambiar el botón a activo
        $(".filtro").removeClass("activo");
        $(this).addClass("activo");

        // Ver TODOS los eventos
        if (filtroSeleccionado == "todas") {
            $(".tarjeta-evento").show();
        }

        // Filtra por eventos CERCANOS
        else if (filtroSeleccionado == "cerca") {
            $(".tarjeta-evento").hide();
            $('.tarjeta-evento[data-cerca="si"]').show();
        }

        // Filtra por eventos del FIN DE SEMANA
        else if (filtroSeleccionado == "fin-semana") {
            $(".tarjeta-evento").hide();
            $('.tarjeta-evento[data-fin-semana="si"]').show();
        }

        // Filtra por CONCENTRACIONES
        else if (filtroSeleccionado == "concentraciones") {
            $(".tarjeta-evento").hide();
            $('.tarjeta-evento[data-categoria="concentraciones"]').show();
        }

        // Filtra por ENCUENTROS SOCIALES
        else if (filtroSeleccionado == "sociales") {
            $(".tarjeta-evento").hide();
            $('.tarjeta-evento[data-categoria="sociales"]').show();
        }

        // Actualizar el número de contador de eventos
        var totalEventos = $(".tarjeta-evento:visible").length;
        $("#contador-eventos").text(totalEventos + " EVENTOS ENCONTRADOS");

    });









// FORMULARIO DE BÚSQUEDA DE RUTAS________________________
    $("#formulario-rutas").on("submit", function(evento) {

        evento.preventDefault();

        var zona = $("#zona").val();
        var fecha = $("#fecha").val();
        var ritmo = $("#ritmo").val();
        var carretera = $("#tipo-carretera").val();

        // Todas las tarjetas escondidas para enseñar solo las que correspondan son la selección.
        $(".tarjeta-ruta").hide();
        var selector = ".tarjeta-ruta";

        // FILTRO DE ZONA: Da igual lo que se escriba en ese campo que si o si aparecerán las tarjetas. 
        selector = selector + '[data-zona="si"]';

        // FILTRO DE FECHA: si es 2026 se muestran las tarjetas de fin de semana no y si es 2027 se muestra fin de semana si.
        if (fecha != "") {
            var year = fecha.substring(0, 4);
            if (year == "2026") {
                selector = selector + '[data-fin-semana="no"]';
            }
            else if (year >= "2027") {
                selector = selector + '[data-fin-semana="si"]';
            }
        }

        // FILTRO DE RITMO: si es bajo se muestran las tarjetas que sean nivel bajo, lo mismo con medio y avanzso: 
        if (ritmo != "") {
            selector = selector + '[data-nivel="' + ritmo + '"]';
        }

        // FILTRO DE CARRETERA: si tienen en las tarjetas curvas si se muestran las curvas y si es no se muestran autovía: 
        if (carretera == "curvas") {
            selector = selector + '[data-curvas="si"]';
        }
        else if (carretera == "autovia") {
            selector = selector + '[data-curvas="no"]';
        }



        // Cuando das a buscar se muestran las tarjetas que coincidan con la selección
        $(selector).show();

        // Actualizar el número del contador
        var totalRutas = $(".tarjeta-ruta:visible").length;

        $("#contador-rutas").text(totalRutas + " RUTAS ENCONTRADAS");

    });








// FORMULARIO DE BÚSQUEDA DE EVENTOS________________________

    $("#formulario-eventos").on("submit", function(evento) {

        evento.preventDefault();

        var zona = $("#zona-evento").val();
        var fecha = $("#fecha-evento").val();
        var horario = $("#ritmo-evento").val();
        var categoria = $("#tipo-carretera").val();

        // Igual que en rutas, todas las tarjetas escondidas para enseñar solo las que correspondan son la selección.
        $(".tarjeta-evento").hide();

        var selector = ".tarjeta-evento";

        // FILTRO DE ZONA (mismo procedimiento que rutas)
        selector = selector + '[data-zona="si"]';

        // FILTRO DE FECHA (mismo procedimiento que rutas)
        if (fecha != "") {
            var year = fecha.substring(0, 4);
            if (year == "2026") {
                selector = selector + '[data-fin-semana="no"]';
            }
            else if (year >= "2027") {
                selector = selector + '[data-fin-semana="si"]';
            }
        }

        // FILTRO DE HORARIO (mismo procedimiento que rutas)
        if (horario != "") {
            selector = selector + '[data-horario="' + horario + '"]';
        }

        // FILTRO DE TIPO DE EVENTO (mismo procedimiento que rutas)
        if (categoria != "") {
            selector = selector + '[data-categoria="' + categoria + '"]';
        }

        // Cuando das a buscar se muestran las tarjetas que coincidan con la selección (mismo procedimiento que rutas)
        $(selector).show();

        // Actualizar el número del contador (mismo procedimiento que rutas)
        var totalEventos = $(".tarjeta-evento:visible").length;

        $("#contador-eventos").text(totalEventos + " EVENTOS ENCONTRADOS");
    });





// SLIDESHOW________________________
// Seleccionamos las imágenes
    var slides = $(".slide");
    var total = slides.length;
    var actual = 0;

    // Escondemos todas las imágenes menos la primera
    slides.hide();
    slides.eq(0).show();

    // Función para mostrar las imágenes
    function mostrar(indiceSlides) {
        slides.eq(actual).fadeOut(1000);

        actual = indiceSlides;

        slides.eq(actual).fadeIn(1000);
    }

    // Función para pasar a la siguiente imagen
    function siguiente() {
        var n = actual + 1;

        if (n === total) {
            n = 0;
        }
        mostrar(n);
    }
    // Funcionamiento automático
    var automatico = setInterval(siguiente, 4000);

















// ANIMACIONES AOS________________________
    AOS.init({
        duration: 600,
        offset: 50
    });



// ANIMACIÓN TEXTO TYPED________________________
    if (typeof Typed !== "undefined" && $("#texto-dinamico").length > 0) {

        var typed = new Typed("#texto-dinamico", {
            strings: [
                "nos unen",
                "merecen cada kilómetro",
                "no se cuentan, se viven",
                "no entienden límites",
                "se viven sobre dos ruedas"

            ],
            typeSpeed: 60,
            backSpeed: 35,
            backDelay: 1500,
            loop: true
        });

    }

});
