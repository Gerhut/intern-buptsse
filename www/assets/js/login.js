
(function (data, $) {

    $('#content').children().remove();

    $.get('/view/login.js', function (code) {
        $view = $(eval(code)());
        getView($view);
    }); 

    var getView = function ($view) {
        $view.children('form').submit(function () {
            window.location.hash = "#dashboard";
            return false;
        });
        $view.appendTo("#content");
    };

});
