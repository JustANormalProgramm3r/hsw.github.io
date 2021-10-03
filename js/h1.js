
function dDayClock(){
    const xMas = new Date('December 25, 2021  00:00:00');
    const date = new Date();
    const dDay = document.querySelector("#dDay");
    const lookingForCristmas = xMas-date;
    
    const d = String(Math.floor(lookingForCristmas / (1000 * 60 * 60 * 24))).padStart(2, "0");
    
    const h = String(Math.floor((lookingForCristmas % (1000 * 60 * 60 * 24))/(1000 * 60 * 60))).padStart(2, "0");

    const m = String(Math.floor((lookingForCristmas % (1000 * 60 * 60))/(1000 * 60))).padStart(2, "0");

    const s = String(Math.floor((lookingForCristmas % (1000 * 60)) / 1000)).padStart(2, "0");
    
    
    
    
    dDay.innerHTML = `${d}d : ${h}h : ${m}m : ${s}s`;
}
dDayClock();
setInterval(dDayClock, 1000);