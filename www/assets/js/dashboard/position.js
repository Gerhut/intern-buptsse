
(function (data, $) {

    $("#dashboard .sidebar ul li").removeClass('active');
    $("#dashboard .sidebar ul li#nav-position").addClass('active');

    $("#task-panel").children().remove();

});
