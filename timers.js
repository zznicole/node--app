const waitTime = 3000;
const waitInterval = 500;
let currentTime = 0;
// incrementing time
const incTime = () => {
    currentTime += waitInterval;
    console.log(`wating ${currentTime/1000} second`);
};

console.log(` setting a ${
    waitTime / 1000} second delay
`);

const timerFinished = () => {
    clearInterval(interval);
    console.log("done");
}

const interval = setInterval(incTime, waitInterval)

setTimeout(timerFinished, waitTime);