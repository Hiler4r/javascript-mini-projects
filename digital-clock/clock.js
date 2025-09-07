const spans = document.querySelectorAll("span:first-of-type");
const toggleBtn = document.getElementById("toggleFormat");
const dateDisplay = document.getElementById("dateDisplay");
let is24Hour = false;

function setClock() {
    const now = new Date();
    let hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    const millisecond = now.getMilliseconds();
    let ampm = hour >= 12 ? 'PM' : 'AM';

    if (!is24Hour) {
        hour = hour % 12;
        hour = hour ? hour : 12;
    }

    spans[0].textContent = hour < 10 ? `0${hour}` : hour;
    spans[1].textContent = minute < 10 ? `0${minute}` : minute;
    spans[2].textContent = second < 10 ? `0${second}` : second;
    spans[3].textContent = millisecond < 100 ? (millisecond < 10 ? `00${millisecond}` : `0${millisecond}`) : millisecond;
    spans[4].textContent = is24Hour ? '' : ampm;


    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateDisplay.textContent = now.toLocaleDateString(undefined, options);

    setTimeout(setClock, 200);
    document.title = `${spans[0].textContent}:${spans[1].textContent}:${spans[2].textContent}:${spans[3].textContent} ${spans[4].textContent}`;
}

toggleBtn.addEventListener("click", function () {
    is24Hour = !is24Hour;
    toggleBtn.textContent = is24Hour ? "Switch to 12-hour" : "Switch to 24-hour";
});

setClock();