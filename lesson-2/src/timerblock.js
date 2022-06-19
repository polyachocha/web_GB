export function start(){
    const timerInput = document.getElementById("time");
    let timeMinut = parseInt(timerInput.value);

    let timerInerval = setInterval(function(){
        const timerShow = document.getElementById("timer");
        let seconds = timeMinut%60;
        let minutes = timeMinut/60%60;
        let hour = timeMinut/60/60%60;

        if (timeMinut <= 0) {
            clearInterval(timerInerval);
        } else{
            let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
            timerShow.innerHTML = strTimer;
        }
        --timeMinut;
    }, 1000)
}

export function playSound() {
    const sound = new Howl({
    src: ["./src/audio/end.mp3"],
    });
    return sound.play();
}

export function stop(){
    
    clearInterval(timerInerval);
}