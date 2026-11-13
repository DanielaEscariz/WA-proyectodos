
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

    $(document).on("click", function() {
        $("#navegacion").slideUp();
        $("#boton-menu").removeClass("abierto");

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



});









