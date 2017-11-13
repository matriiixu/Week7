document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
    
    document.getElementById("sound").addEventListener("click", sound);
    document.getElementById("vibrate").addEventListener("click", vibrate);
}

function sound() {
    var val = !Math.round(Math.random());

    if(val == true){
       navigator.notification.beep(1); //beep once
        navigator.vibrate(2000);
    }else{
        navigator.notification.beep(2); //beep twice
        navigator.vibrate(200);
    }
}

function vibrate(){
    //vibrate for 2000 milliseconds
    alert('Pressed!');
    
}