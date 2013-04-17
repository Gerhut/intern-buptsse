
(function ($) {

    $("#dashboard .sidebar ul li").removeClass('active');
    $("#dashboard .sidebar ul li#nav-personal").addClass('active');

    $("#task-panel").children().remove();

});
