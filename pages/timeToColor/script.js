function set() {
    setInterval("update()", 1000);
}

function update() {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    h = ("00" + h).slice(-2);
    m = ("00" + m).slice(-2);
    s = ("00" + s).slice(-2);
    var times = "#" + h + ":" + m + ":" + s;

    var randomCol = "#" + h + m + s;
    document.body.style.backgroundColor = randomCol;
    document.getElementById("colorID").innerHTML = times;
}
