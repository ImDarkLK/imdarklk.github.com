function currentTime() {
    const date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let time = (`${hours}:${minutes}:${seconds}`)

    let clockRenderSection = document.getElementById("clock-render");
    clockRenderSection.innerHTML = time;
    setTimeout(currentTime, 10);

}

currentTime();
