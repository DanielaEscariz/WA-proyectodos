
$(document).ready(function() {

    // MENÚ RESPONSIVE
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

});









