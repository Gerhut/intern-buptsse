
!(function (window, $) {

    var data = {};

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

    var hashChanged = (function () {
        var section = [];
        return function (hash) {
            var anchor = hash.substring(1);
            if(anchor) {
                var tasks = [];
                var _section = anchor.split("/");
                for(var i = 0; i != _section.length; i++) {
                    if(section.length > i && section[i] == _section[i]) 
                        continue;
                    tasks.push(_section.slice(0, i + 1).join('/'));
                }
                var worker = function () {
                    if(tasks.length > 0) {
                        D(tasks.shift(), function () {
                            worker();
                        });
                    }
                };
                worker();
                section = _section;
            }
            return anchor;
        };
    })();

    var D = function (script, cb) {
        $.get('/js/' + script + '.js', function (code) {
            eval(code)(data, $);
            if(cb instanceof Function) cb();
        });
    };

    window.D = D;

    $(document).ready(function () {
        _(data).extend({
            phase: 1,
            role: 'student',
            profile: {
                id: "10212002",
                realname: "王小二",
                email: "trinity@dummi.org",
                phone: "010-62289905"
            },
            phases: ["职位准备", "实习申报", "导师确认", "导师调剂", "正式实习", "导师评分", "实习结束"],
        });
        data.profile.photo = "http://www.gravatar.com/avatar/" + MD5(data.profile.email);

        if(!hashChanged(window.location.hash)) D('login');
    });

})(window, window.jQuery);

