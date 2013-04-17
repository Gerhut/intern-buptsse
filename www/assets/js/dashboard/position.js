
(function (data, $) {

    $("#dashboard .sidebar ul li").removeClass('active');
    $("#dashboard .sidebar ul li#nav-position").addClass('active');
    
    var clearView = function () {
        $("#task-panel").children().remove();
    };

    clearView();

    var displayView = function ($view) {
        $view.appendTo("#task-panel");
    };

    if("professor" == data.role && data.phase == 1) {
        var loadJobList = function () {
            clearView();
            $.get('/view/dashboard/position-manage.js', function (code) {
                $view = $(eval(code)(data.jobs));
                displayView($view);
                $("button", $view).click(createJob);
                $("tr", $view).click(createJob);
            });
            return false;
        };
        var createJob = function () {
            clearView();
            $.get('/view/dashboard/position-editor.js', function (code) {
                $view = $(eval(code)({}));
                displayView($view);
                $("button.btn-large", $view).click(loadJobList);
            });
            return false;
        };
        loadJobList();
    }

    if(data.phase == 2) {
        var loadJobList = function () { 
            clearView();
            $.get('/view/dashboard/position-apply.js', function (code) {
                $view = $(eval(code)(data));
                displayView($view);
                $('tr', $view).click(viewJob.bind(this, loadJobList));
            });
        };
        loadJobList();
    }

    if("professor" == data.role && [3, 4].indexOf(data.phase) > -1) {
        var loadJobList = function () {
            clearView();
            $.get('/view/dashboard/position-enroll.js', function (code) {
                $view = $(eval(code)(data));
                displayView($view);
                $('tr', $view).click(viewJob.bind(this, loadJobList));
            });
        };
        loadJobList();
    }

    var viewJob = function (cb) {
        clearView();
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
            displayView($view);
            $('button', $view).click(cb);
        });
    };

});
