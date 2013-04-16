
(function ($) {

    $.get('/view/login.js', function (data) {
        $view = $(eval(data)());
        getView($view);
    }); 

    var getView = function ($view) {
        $view.children('form').submit(function () {
            return false;
        });
        $view.appendTo("#content");
    };

});
