/**
 * Created by hcq on 2017/6/25.
 */
var drag = function (id) {

    var dom = document.getElementById(id);

    var disX = 0;
    var disY = 0;
    dom.onmousedown = function (ev) {
        var ev = ev ? ev : window.event;
        disX = ev.clientX-dom.offsetLeft;
        disY = ev.clientY-dom.offsetTop;

        document.onmousemove = function (ev) {
            var ev = ev ? ev : window.event;
            var nowX = ev.clientX;
            var nowY = ev.clientY;

            dom.style.left = nowX - disX +"px";
            dom.style.top = nowY - disY +"px";
        }

        document.onmouseup = function () {
            document.onmousedown = null;
            document.onmousemove = null;
        }
        return false;
    }
};

