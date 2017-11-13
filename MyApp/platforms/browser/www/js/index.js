document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
    
    document.getElementById("sound").addEventListener("click", sound());
    document.getElementById("vibrate").addEventListener("click", vibrate());
}

function sound() {
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
    alert('Pressed!');
    navigator.vibrate(2000);
}