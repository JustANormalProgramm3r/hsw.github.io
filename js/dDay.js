//공통 변수 만들기
const dDay = document.querySelector('#dDay');
const setDay = document.querySelector('.setDay');
const dDay_txt = document.querySelector('.dDay_txt');
const setTxt =document.querySelector('.setTxt');
const txt = document.querySelector('.txt');


//로컬스토리지 변수
const SETDAY_KEY = "setDayValue"
const TEXT_KEY = "setTxtValue"

//form 태그 정보 받고, 인풋들 사라지게 하고, 계산 시간 나오게 하고, 로컬스토리지에 저장하기
function timer(e){
    e.preventDefault;
    let setDayValue = setDay.value;
    dDay.classList.add('hidden');
    calDay(setDayValue);
    localStorage.setItem(SETDAY_KEY,setDayValue);

    let setTxtValue = setTxt.value;
    txt.innerHTML = setTxtValue;
    localStorage.setItem(TEXT_KEY,setTxtValue);


};

//로컬스토리지에 저장된 시간 다시 현재 시간과 빼고 화면에 채우기
function paintDday (setDayValue){
    calDay(setDayValue);
    dDay.classList.add('hidden');
}
function paintText (setTxtValue){
    txt.innerHTML = setTxtValue;
}
//만약에 로컬스토리지가 비어있다면 timer 함수를 실행하고 로컬스토리지에 value값이 있다면 paintDday(saveSetDayValue)를 실행해라
const saveSetDayValue =localStorage.getItem(SETDAY_KEY);
const savSetTextValue = localStorage.getItem(TEXT_KEY);

if(saveSetDayValue === null && savSetTextValue === null){
    dDay.addEventListener('submit',timer);
}else{
    paintDday(saveSetDayValue);
    paintText(savSetTextValue)
}



//공통 시간 계산 함수
function calDay (setDayValue){
    setInterval(function(){
        const today = new Date();
        const endDday = new Date(`${setDayValue} 00:00:00`);
        const selectedDday = endDday - today;
        
        const d = String(Math.floor(selectedDday / (1000 * 60 * 60 * 24))).padStart(2, "0");
        const h = String(Math.floor((selectedDday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
        const m = String(Math.floor((selectedDday % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
        const s = String(Math.floor((selectedDday % (1000 * 60)) / 1000)).padStart(2, "0");
        dDay_txt.innerHTML = `${d} : ${h} : ${m} : ${s} `;
    },1000)
}