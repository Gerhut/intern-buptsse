
(function (data, $) {

    $("#dashboard .sidebar ul li").removeClass('active');
    $("#dashboard .sidebar ul li#nav-setting").addClass('active');

    $("#task-panel").children().remove();

    $.get('/view/dashboard/setting.js', function (data) {
        $view = $(eval(data)({
            photo: "http://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
        }));
        getView($view);
    });

    var getView = function ($view) {
        $view.appendTo("#task-panel");
    };

});
