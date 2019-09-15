// jQuery.expr[':'].Contains = function(a, i, m) {
//     return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
// };

function filterList(list) {
    $('#js-groupId').bind('input propertychange', function() {
        var filter = $(this).val();
        if (filter) {
            $matches = $(list).find('a:Contains(' + filter + ')').parent();
            $('li', list).not($matches).slideUp();
            $matches.slideDown();
        } else {
            $(list).find("li").slideDown();
        }
    });
}
$(function() {
    filterList($("#groupid"));
    $('#js-groupId').bind('focus', function() {
        $('#groupid').slideDown();
    }).bind('blur', function() {
        $('#groupid').slideUp();
    })
    $('#groupid').on('click', 'li', function() {
        $('#js-groupId').val($(this).text())
        $('#groupId').val($(this).data('id'))
        $('#groupid').slideUp()
    });
})