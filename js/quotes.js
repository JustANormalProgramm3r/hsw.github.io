const quotes = [
    {
        quote:"삶이 있는 한 희망은 있다",
        autor:"키케로",
    },
    {
        quote:"산다는것 그것은 치열한 전투이다",
        autor:"로망로랑",
    },
    {
        quote:"하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다",
        autor:"사무엘존슨",
    },
    {
        quote:"언제나 현재에 집중할수 있다면 행복할것이다",
        autor:"파울로 코엘료",
    },
    {
        quote:"진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해",
        autor:"찰리 채플린",
    },
    {
        quote:"직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다",
        autor:"엘버트 허버드",
    },
    {
        quote:"신은 용기있는자를 결코 버리지 않는다",
        autor:"켄러",
    },
    {
        quote:"행복의 문이 하나 닫히면 다른 문이 열린다 그러나 우리는 종종 닫힌 문을 멍하니 바라보다가 우리를 향해 열린 문을 보지 못하게 된다",
        autor:"헬렌켈러",
    },
    {
        quote:"피할수 없으면 즐겨라",
        autor:"로버트 엘리엇",
    },
    {
        quote:"나는 해야 한다 그러므로 나는 할 수 있다",
        autor:"임마누엘 칸트",
    },
]

const quote = document.querySelector("#quote span:first-child");
const autor = document.querySelector("#quote span:last-child");


const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
autor.innerText = todayQuote.autor;
