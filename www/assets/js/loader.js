
!(function (window, $) {

    var D = function (script, cb) {
        $.get('/js/' + script + '.js', function (data) {
            eval(data)($);
            if(cb instanceof Function) cb();
        });
    };

    window.D = D;

    $(document).ready(function () {
        var anchor = window.location.hash.substring(1);
        if(anchor) return D(anchor);
        D('login');
    });

})(window, window.jQuery);

