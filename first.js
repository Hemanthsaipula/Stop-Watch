let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let button3 = document.querySelector(".button3");
let time = document.querySelector(".time");
let reset = 0;
let variable = true;
let start = false;
let [seconds, minutes, hours] = [0, 0, 0];

button2.addEventListener("click", () => {
    if(variable){
        checkFunction();
        button2.disabled = true;
        variable = false
        start = true
    }
});

const checkFunction = () => {
    if (reset === 0 ) {
        seconds = seconds + 1;
        setTimeout(checkFunction, 1000);
        if (seconds === 60) {
            seconds = 0;
            minutes = minutes + 1;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
        time.innerText = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
};

button1.addEventListener("click", () => {
    if(start){
        stop();
        checkFunction();
    }
});

const stop = () => {
    if (reset === 0) {
        reset = 1;
    } else {
        reset = 0;
    }
};

button3.addEventListener("click", () => {
    time.innerText = "00:00:00";
    [seconds, minutes, hours] = [0, 0, 0];
    reset = 1;
    button2.disabled = false;
    variable=true
    start = false
    checkFunction1()
});
const checkFunction1 = () => {
    if (reset === 0 ) {
        seconds = seconds + 1;
        setTimeout(checkFunction, 1000);
        if (seconds === 60) {
            seconds = 0;
            minutes = minutes + 1;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
        time.innerText = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
};
