
(function (data, $) {

    $("#dashboard .sidebar ul li").removeClass('active');
    $("#dashboard .sidebar ul li#nav-student").addClass('active');

    var createView = function () {
        $("#task-panel").children().remove();
        $.get('/view/dashboard/student.js', function (code) {
            $view = $(eval(code)());
            getView($view);
            $('tr', $view).click(function () {
                $("#task-panel").children().remove();
                $.get('/view/dashboard/intern.js', function (code) {
                    $view = $(eval(code)(data));
                    getView($view);
                    $('button.btn-large', $view).click(createView);
                });
                return false;
            });
        });
    };

    createView();

    var getView = function ($view) {
        $view.appendTo("#task-panel");
    };

});
