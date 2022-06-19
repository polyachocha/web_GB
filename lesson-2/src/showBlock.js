export function showCalc(){
    document.getElementById("datecalc").style.display = "block";
    document.getElementById("timerblock").style.display="none";
}

export function showTimer(){
    document.getElementById("datecalc").style.display = "none";
    document.getElementById("timerblock").style.display="block";
}