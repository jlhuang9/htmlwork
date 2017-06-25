/**
 * Created by hcq on 2017/6/25.
 */
window.onload = function () {
    var dom = document.getElementById("div1");
    drag(dom);
    var dom1 = document.getElementById("dom1");
    var dom2 = document.getElementById("dom2");
    var title = document.getElementById("title")
    troole(dom1, dom2);
    dragtitle(title, dom1);
};


var drag = function (dom) {
    dom.onmousedown = function (ev) {
        var ev = ev ? ev : window.event;
        var startX = dom.offsetLeft - ev.clientX;
        var startY = dom.offsetTop - ev.clientY;
        window.onmousemove = function (ev) {
            var ev = ev ? ev : window.event;
            dom.style.left = ev.clientX + startX + "px";
            dom.style.top = ev.clientY + startY + "px";
        };
        window.onmouseup = function (ev) {
            window.onmousemove = null;
        }
        return false;
    }
};
var dragtitle = function (dom1,dom2) {
    dom1.onmousedown = function (ev) {
        var ev = ev ? ev : window.event;
        var startX = dom2.offsetLeft - ev.clientX;
        var startY = dom2.offsetTop - ev.clientY;
        window.onmousemove = function (ev) {
            var ev = ev ? ev : window.event;
            dom2.style.left = ev.clientX + startX + "px";
            dom2.style.top = ev.clientY + startY + "px";
        };
        window.onmouseup = function (ev) {
            window.onmousemove = null;
        }
        return false;
    }
}
var troole = function (dom1, dom2) {
    dom2.onmousedown = function (ev) {
        var ev = ev ? ev : window.event;
        var dom1Width = dom1.offsetWidth;
        var dom1Height = dom1.offsetHeight;
        var clientX = ev.clientX;
        var clientY = ev.clientY;
        window.onmousemove = function (ev) {
            var ev = ev ? ev : window.event;
            var nowX = ev.clientX;
            var nowY = ev.clientY;
            dom1.style.width = dom1Width + (nowX - clientX) + "px";
            dom1.style.height = dom1Height + (nowY - clientY) + "px";
        }
        window.onmouseup = function (ev) {
            window.onmousemove = null;
        };
        return false;
    };
};

