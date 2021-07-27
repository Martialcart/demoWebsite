document.onkeypress = function (e) {
    e = e || window.event;
    // use e.keyCode
    document.getElementById(output).innerHTML.replace(e.key);
};