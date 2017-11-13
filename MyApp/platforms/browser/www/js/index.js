function random() {
    var val = !Math.round(Math.random());

    alert(val);
    if(val == true){
       navigator.notification.beep(1); //beep once
    }
    if(val == false){
       navigator.notification.beep(2); //beep twice
    }
}