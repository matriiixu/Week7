
function random() {
    var val = !Math.round(Math.random());

    alert(val);
    
    navigator.notification.beep(1); //beep once
    navigator.notification.beep(2); //beep twice
}