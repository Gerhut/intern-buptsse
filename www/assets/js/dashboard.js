
(function ($) {

    $('#content').children().remove();

    var role = "student";

    $.get('/view/dashboard.js', function (data) {
        $view = $(eval(data)({
            id: "1020394",
            realname: "XXX",
            phone: "010-12345678",
            photo: "http://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
        }));
        getView($view);
    }); 

    var getView = function ($view) {
        $view.appendTo("#content");
    };

});
