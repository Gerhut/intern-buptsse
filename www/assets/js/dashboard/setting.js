
(function (data, $) {

    $("#dashboard .sidebar ul li").removeClass('active');
    $("#dashboard .sidebar ul li#nav-setting").addClass('active');

    $("#task-panel").children().remove();

    $.get('/view/dashboard/setting.js', function (data) {
        $view = $(eval(data)());
        getView($view);
    });

    var getView = function ($view) {
        $view.appendTo("#task-panel");
    };

});
