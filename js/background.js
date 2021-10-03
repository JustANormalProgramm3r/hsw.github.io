const colors = [
    "#ccead8", 
    "#b7cae2", 
    "#9bd1dd",
    "#86b1e5",    
    "#a2b59f",
    "#e3e2b4",
    "#bfc8d7",
    "#c3e2dd",
    "#83b1c9"
];



const body = document.querySelector("body");

function colorChange(){
    const chosenColor = colors[Math.floor(Math.random() * colors.length)];
    body.style.background = chosenColor;
};

window.addEventListener("load", colorChange);