function dDayClock() {
    const newYear = new Date("January 1, 2022  00:00:00");
    const date = new Date();
    const dDay = document.querySelector("#dDay");
    const HappyNewYear = newYear - date;
  
    const d = String(
      Math.floor(HappyNewYear / (1000 * 60 * 60 * 24))
    ).padStart(2, "0");
  
    const h = String(
      Math.floor((HappyNewYear % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    ).padStart(2, "0");
  
    const m = String(
      Math.floor((HappyNewYear % (1000 * 60 * 60)) / (1000 * 60))
    ).padStart(2, "0");
  
    const s = String(
      Math.floor((HappyNewYear % (1000 * 60)) / 1000)
    ).padStart(2, "0");
  
    dDay.innerHTML = `${d}d : ${h}h : ${m}m : ${s}s`;
  }
  dDayClock();
  setInterval(dDayClock, 1000);