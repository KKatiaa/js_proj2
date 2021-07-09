function getMiddleValue () {
    var x, txt;
    txt = document.getElementById("string").value;
    txt.trim();
    x = txt.length;
    if (!Boolean(txt)) {
        document.getElementById("empty").innerHTML = "Invalid value";
    }
    else if (x%2==0) {
        var r = txt[x/2 - 1] + txt[x/2];
        document.getElementById("even").innerHTML = r;
    }
    else {
        var r = txt[Math.floor(x/2)];
        document.getElementById("odd").innerHTML = r;
    }
}