var isStop = true;
var s = 0;
var min = 0;
var hr = 0;

function start() {

    if (isStop == true) {
        isStop = false;
        timer();
    }
}

function timer() {

    if (isStop == false) {

        s=parseInt(s);
        min=parseInt(min);
        hr=parseInt(hr);

        s++;

        if(s==60)
        {
            s=0;
            min++;
        }
        if(min==60)
        {
            min=0;
            hr++;
        }
        if(s<10)
        {
            s='0'+s;
        }
        if (min < 10) {
            min = '0' + min;
        }
        if (hr < 10) {
            hr = '0' + hr;
        }
        
        stopwatch.innerHTML = hr + " : " + min + " : " + s;
        setTimeout("timer()", 1000);
    }
}
function stop() {

    isStop = true;
}

function reset() {
    s = 00;
    min = 00;
    hr = 00;

    stopwatch.innerHTML = hr + "0 : " + min + "0 : " + s+"0";
    isStop = true;
}