function getMiddleValue () {
    var x, txt;
    txt = document.getElementById("string").value;
    txt.trim();
    x = txt.length;
    if (!Boolean(txt)) {
        document.getElementById("empty").innerHTML = "Invalid value";
    }
    else {
        document.getElementById("empty").innerHTML = "";
    }
    if (x%2==0) {
        var r = txt[x/2 - 1] + txt[x/2];
        document.getElementById("even").innerHTML = r;
    }
    else {
        document.getElementById("even").innerHTML = "";
    }
    if (x%2==1) {
        var r = txt[Math.floor(x/2)];
        document.getElementById("odd").innerHTML = r;
    }
    else {
        document.getElementById("odd").innerHTML = "";
    }
}