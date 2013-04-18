
(function (data, $) {

    $('#content').children().remove();

    $.get('/view/dashboard.js', function (code) {
        $view = $(eval(code)(data));
        getView($view);
        loadSchedule();

    }); 

    var loadSchedule = function () {
        $('#dashboard .nav.nav-list li[id^="nav-"]').addClass('hide');
        $('#dashboard .nav.nav-list .' + data.role + '.phase' + data.phase).removeClass('hide');
        $('#dashboard .nav.nav-list .' + data.role + '.phase-all').removeClass('hide');

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

    var getView = function ($view) {
        $view.appendTo("#content");
    };

});
