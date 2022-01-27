export default function Timer() {
    var hours = 0;
    var minute = 0;
    var rt = hours + ":" + minute;
    setInterval(() => {
        minute++;
        if (minute === 60) {
            minute = 0;
            hours++;
        }
        if (hours.toString().length === 1) {
            hours = "0" + hours;
        }
        if (minute.toString().length === 1) {
            minute = "0" + minute;
        }
        var rt = hours + ":" + minute;
        document.querySelector(".timer").innerText = rt;
    }, 1000);
    return (
        <div className="timer">
            {rt}
        </div>
    );
}