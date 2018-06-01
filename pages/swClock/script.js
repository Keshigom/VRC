function set() {
    setInterval("update()", 10);
}

function update() {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    var ms = now.getMilliseconds();
    h = ("00" + h).slice(-2);
    m = ("00" + m).slice(-2);
    s = ("00" + s).slice(-2);
    ms = ("000"+ms).slice(-3,-1);
    var times = h + ":" + m + ":" + s + ":" + ms;

    document.getElementById("colorID").innerHTML = times;
}
