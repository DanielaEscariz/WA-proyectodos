
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


});









