import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";
import { start } from "./timerblock.js";
import { stop } from "./timerblock.js";
import { showCalc, showTimer } from "./showBlock.js";
/* import {Howl} from '../howler.js';

var sound = new Howl({
    src: ['sound.mp3']
  });
  
  sound.play(); */

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");
const timerStart = document.getElementById("buttonstart");
const timerStop = document.getElementById("buttonstop");
const calcBlock = document.getElementById("calcBlock");
const timerBlock = document.getElementById("timerBlock");

dateCalcForm.addEventListener("submit", handleCalcDates);
timerStart.addEventListener("click", start);
timerStop.addEventListener('click', stop);
calcBlock.addEventListener('click', showCalc);
timerBlock.addEventListener('click', showTimer);

function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();
    
    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(diff);
    } else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
}
