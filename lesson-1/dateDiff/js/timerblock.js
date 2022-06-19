export function start(){
    const timerInput = document.getElementById("time");
    let timeMinut = parseInt(timerInput.value);

    setInterval(function(){
        const timerShow = document.getElementById("timer");
        let seconds = timeMinut%60;
        let minutes = timeMinut/60%60;
        let hour = timeMinut/60/60%60;

        if (timeMinut <= 0) {
            clearInterval();
        } else{
            let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
            timerShow.innerHTML = strTimer;
        }
        --timeMinut;
    }, 1000)
}


export function stop(){
    
    clearInterval();
}