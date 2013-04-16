
!(function (window, $) {

    if ("onhashchange" in window) { // event supported?
        window.onhashchange = function () {
            hashChanged(window.location.hash);
        }
    }else{ // event not supported:
        var storedHash = window.location.hash;
        window.setInterval(function () {
            if (window.location.hash != storedHash) {
                storedHash = window.location.hash;
                hashChanged(storedHash);
            }
        }, 100);
    }

    var hashChanged = function (hash) {
        var anchor = hash.substring(1);
        if(anchor) {
            D(anchor);
        }
        return anchor;
    };

    var D = function (script, cb) {
        $('#content').children().remove();
        $.get('/js/' + script + '.js', function (data) {
            eval(data)($);
            if(cb instanceof Function) cb();
        });
    };

    window.D = D;

    $(document).ready(function () {
        if(!hashChanged(window.location.hash)) D('login');
    });

})(window, window.jQuery);

