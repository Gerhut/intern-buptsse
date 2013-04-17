
(function (data, $) {

    $('#content').children().remove();

    $.get('/view/dashboard.js', function (code) {
        $view = $(eval(code)(data));
        getView($view);
    }); 

    var getView = function ($view) {
        $view.appendTo("#content");
    };

});
