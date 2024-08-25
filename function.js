function StopWatch(){
    const timeDsiplay = document.getElementById('timerDisplay');
    let timer;
    let startTime = 0;
    let elapsedTime = 0;
    let isRunning = false;


    function start(){
        if(isRunning){
            return;
        }
        timer = setInterval(()=>{update()},10);
        startTime = Date.now() - elapsedTime;
        isRunning = true;
    }
    function update(){
        const currentTime = Date.now();
        elapsedTime = currentTime- startTime;
        let hours= Math.floor(elapsedTime/(1000*60*60));
        let minutes = Math.floor(elapsedTime/(1000*60)%60);
        let seconds = Math.floor(elapsedTime /1000 % 60);
        let mili = Math.floor(elapsedTime%1000/10);
        console.log("Run");
        timeDsiplay.innerText = `${hours<10? "0"+hours:hours}:${minutes<10?"0"+minutes:minutes}:${seconds<10? "0"+seconds:seconds}:${mili<10?"0"+mili:mili}`;
    }
    function stop(){
        if(isRunning){
            clearInterval(timer);
            isRunning = false;
        }
    }
    function reset(){
        clearInterval( timer);
        startTime = 0;
        elapsedTime = 0;
        isRunning= false;
        timeDsiplay.innerText="00:00:00:00"
    }
    return {start, reset,stop}


}
const stopWatch = StopWatch();
 document.getElementById('stopButton').addEventListener('click',stopWatch.stop);
 document.getElementById('startButton').addEventListener('click',stopWatch.start);
 document.getElementById('resetButton').addEventListener('click',stopWatch.reset);
