/*
信息提示框：可接受3个参数，
    1.传入1个参数（message）:代表的是剧中提示框；
    2.传入2个参数($obj,message)，代表的是在$obj上方提示信息；
    3.传入3个参数时($obj,message,removeBtn),代表的是不自动移除提示框，等待removeTooltip()函数调用移除
*/

var tipBtn = true;
function tooltip($obj, message,removeBtn) {
    var aLen = arguments.length;
    if (!tipBtn) {
        $('.errorTooltip').remove();
    }
    if (aLen==0) return;
    tipBtn = false;
    if (aLen==3) {
        $('body').append('<span class="errorTooltip">' + arguments[1] + '</span>');
    }else{
         $('body').append('<span class="errorTooltip">' + arguments[arguments.length-1] + '</span>');
    }
    var $errorTooltip = $('.errorTooltip');
    setTimeout(function () {
        $errorTooltip.addClass('errorTooltipShow');
        var spanH = $errorTooltip.outerHeight();
        if (aLen == 1) {
            var t = $(window).scrollTop() + (document.documentElement.clientHeight - spanH) / 2;
        } else if (aLen == 2 || aLen == 3) {
            var t = $obj.offset().top - spanH - 20;
        }
        $errorTooltip.css('top', t);
    }, 10);
    if (aLen!=3) {
        setTimeout(function () {
            $errorTooltip.removeClass('errorTooltipShow');

        }, 2000);
        setTimeout(function () {
            $errorTooltip.remove();
            tipBtn = true;
        }, 2500);
    }


}
function removeTooltip() {
    $('.errorTooltip').remove();
}