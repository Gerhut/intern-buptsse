/**
 * Module to inject the Cross-Reference text in the document
 */
$(function () {
    var terms = {};

    var headers = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P'];
    $("p a").each(function (i, term) {
        var $term = $(term);
        var $header = $term.parent().next();
        if($header.length && headers.indexOf($header[0].tagName) >= 0) {
            var translation = $header.text().replace(')','(').split('(')
                                     .join(',').split(',');
            terms[term.id] = {trans: translation}; 
            var detail = $header.next().text();
            if(detail && detail.length > 0) {
                terms[term.id].detail = $.trim(detail);
            }
        }
    });

    $.each(terms, function (id, entry) {
        var $refs = $("a[href='#" + id + "']");
        $refs.each(function (i, ref) {
            var $ref = $(ref);
            var text = $ref.text();
            if(text.length == 1 || text.charAt(1) == '-') {
                $ref.text($.trim(
                    entry.trans[parseInt(text)]
                ));
                if(entry.detail !== undefined) {
                    $ref.attr('title', entry.detail);
                }
            }else{
                var $content = $("<div></div>").text(
                    $.trim(entry.trans[parseInt(text)])
                ).css("display", "inline-block");
                if(entry.detail !== undefined) {
                    $content.attr('title', entry.detail);
                }
                $ref.after($content);
                $ref.remove();
            }
        });
    });
});
