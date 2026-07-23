// Kód elrejtése - Developer Tools elrejtése
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    return false;
}, false);

// F12, Ctrl+Shift+I, Ctrl+Shift+K, Ctrl+Shift+C, Ctrl+U elrejtése
document.onkeydown = function(event) {
    // F12
    if (event.keyCode === 123) {
        return false;
    }
    // Ctrl+Shift+I
    if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
        return false;
    }
    // Ctrl+Shift+K
    if (event.ctrlKey && event.shiftKey && event.keyCode === 75) {
        return false;
    }
    // Ctrl+Shift+C
    if (event.ctrlKey && event.shiftKey && event.keyCode === 67) {
        return false;
    }
    // Ctrl+U
    if (event.ctrlKey && event.keyCode === 85) {
        return false;
    }
};

// Firefox developer tools blokkolás
if (typeof console !== "undefined" && console.log) {
    console.log("%cWarning!", "color:red;font-size:50px;");
    console.log("%cA fejlesztői eszközök használata nem engedélyezett!", "color:red;font-size:20px;");
}
