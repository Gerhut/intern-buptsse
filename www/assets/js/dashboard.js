
(function (data, $) {

    $('#content').children().remove();

    $.get('/view/dashboard.js', function (code) {
        $view = $(eval(code)(data.profile));
        getView($view);
    }); 

    var getView = function ($view) {
        $view.appendTo("#content");
    };

});
