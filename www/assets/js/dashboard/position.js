
(function (data, $) {

    $("#dashboard .sidebar ul li").removeClass('active');
    $("#dashboard .sidebar ul li#nav-position").addClass('active');

    $("#task-panel").children().remove();

    $.get('/view/dashboard/position-manage.js', function (data) {
        $view = $(eval(data)());
        getView($view);
    });

    $.get('/view/dashboard/position-editor.js', function (data) {
        $view = $(eval(data)());
        getView($view);
    });

    $.get('/view/dashboard/position-apply.js', function (data) {
        $view = $(eval(data)({role: 'student'}));
        getView($view);
    });

    $.get('/view/dashboard/position-apply.js', function (data) {
        $view = $(eval(data)({role: 'professor'}));
        getView($view);
    });

    $.get('/view/dashboard/position-enroll.js', function (data) {
        $view = $(eval(data)({phase: 3}));
        getView($view);
    });

    $.get('/view/dashboard/position-enroll.js', function (data) {
        $view = $(eval(data)({phase: 4}));
        getView($view);
    });

    $.get('/view/dashboard/position-view.js', function (data) {
        $view = $(eval(data)({
            title: "软件攻城师",
            department: "宇宙研究部门",
            need: "20",
            salary: ">3000",
            description: "呱……呱呱……",
            tutor: {
                name: "刘洋",
                gender: "先生",
                title: "首席",
                phone: "123564326",
                email: "foo@bar.com"
            },
            company: {
                name: "跨国公司",
                website: "http://inter.co.jp"
            },
        }));
        getView($view);
    });

    var getView = function ($view) {
        $view.appendTo("#task-panel");
    };

});
