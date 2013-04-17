
(function (data, $) {

    $('#content').children().remove();

    $.get('/view/dashboard.js', function (code) {
        $view = $(eval(code)(data));
        getView($view);
    }); 

    var loadSchedule = function () {
        $("#schedule").remove();
        $.get('/view/schedule.js', function (code) {
            $view = $(eval(code)(data));
            $("#task-panel").before($view);
            $('button', $view).click(function () {
                data.phase = parseInt($(this).text());
                loadSchedule();
                return false;
            });
        }); 
    };

    loadSchedule();

    var getView = function ($view) {
        $view.appendTo("#content");
    };

});
