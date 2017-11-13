function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady(){
    random();
    vibrate();
}

function random() {
    var val = !Math.round(Math.random());

    alert(val);
    if(val == true){
       navigator.notification.beep(1); //beep once
    }else{
        navigator.notification.beep(2); //beep twice
    }
}

function vibrate(){
    //vibrate for 2000 milliseconds
    navigator.vibrate(2000);
}