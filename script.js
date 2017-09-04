$(document).ready(function() {

    //NAVBAR MENU HIDE ON LINK CLICK
    $(".navbar-collapse a.navlink").click(function() {
        $(".navbar-collapse").collapse('hide');
    });

    //SIDE CONTENT DROPDOWN MENU SLIDE TOGGLE
    $("#dropdownMenu1").click(function() {
        $("#dropMenu").slideToggle();
    });

    $("#dropMenu li a").click(function() {
        $("#dropMenu").slideUp();
    });

    //CLOSE NAVBAR DROPMENU AND DROPDOWN MENU WHEN CLICKED
    //AWAY/OUTSIDE OF THE DROPDOWN MENU AREA
    $(document).click(function() {
        $(".navbar-collapse").collapse('hide');
        $("#dropMenu").slideUp();
    });

    //LOAD MODAL WITH CARD CLICKED
    $("#itemImgs .card img").click(function() {
        $('.modal-body').html($(this).parent().clone());
        $('.modal-footer').html($(this).parent().find('.card-text').clone());
        $('.modal-footer').find('.card-text').css("display", "block");
        $("#itemModal").modal('show');
    });

    $("#bmi img").click(function() {
        var chart = $('<img src="imgs/bmichart.jpg" style="width:100%">');
        $('.modal-body').html(chart);
        $("#itemModal").modal('show');
    });

    $("#itemModal").on('hide.bs.modal', function() {
        $('.modal-body').html("");
        $('.modal-footer').html("");
    });

    $("#soc1").tooltip();
    $("#soc2").tooltip();
    $("#soc3").tooltip();

    $(".question").click(function() {
        var question = $(this).next();
        $(".answer").not(question).slideUp();
        question.slideToggle();
    });

    $(".event").click(function() {
        $(this).next().slideToggle();
    })

    //DISABLE RIGHT CLICK ON THE WEBPAGE
    // $(document).on("contextmenu", function(e) {
    //     return false;
    // });




});
