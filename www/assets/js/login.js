
(function ($) {

    $('#content').children().remove();

    $.get('/view/login.js', function (data) {
        $view = $(eval(data)());
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
